import { useEffect, useRef, useState } from 'react'

export function usePwaInstall() {
  const installPromptRef = useRef(null)
  const dialogRef = useRef(null)

  const [installed, setInstalled] = useState(false)
  const [installStatus, setInstallStatus] = useState(
    'Disponível pela web.'
  )

  useEffect(() => {
    const markInstalled = () => {
      setInstalled(true)
      setInstallStatus(
        'Tudo pronto! Abra o aplicativo para continuar.'
      )
    }

    // Já está instalado como PWA
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone
    ) {
      markInstalled()
    }

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      installPromptRef.current = event
    }

    const handleAppInstalled = () => {
      installPromptRef.current = null
      markInstalled()
    }

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt
    )

    window.addEventListener(
      'appinstalled',
      handleAppInstalled
    )

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )

      window.removeEventListener(
        'appinstalled',
        handleAppInstalled
      )
    }
  }, [])

  const showInstructions = () => {
    const isIOS =
      /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
      (
        window.navigator.platform === 'MacIntel' &&
        window.navigator.maxTouchPoints > 1
      )

    const isAndroid =
      /Android/.test(window.navigator.userAgent)

    let instructions

    if (isIOS) {
      instructions =
        'No Safari, toque em Compartilhar, escolha Adicionar à Tela de Início e confirme.'
    } else if (isAndroid) {
      instructions =
        'No Chrome, abra o menu ⋮ e escolha Adicionar à tela inicial ou Instalar aplicativo.'
    } else {
      instructions =
        'No Chrome ou Edge, procure a opção de instalar na barra de endereços ou no menu.'
    }

    const dialog = dialogRef.current

    if (!dialog) return

    const instructionElement =
      dialog.querySelector('#dialog-instructions')

    if (instructionElement) {
      instructionElement.textContent = instructions
    }

    dialog.showModal()
  }

  const handleInstall = async () => {
    const installPrompt = installPromptRef.current

    // O navegador não disponibilizou instalação automática
    if (!installPrompt) {
      showInstructions()
      return
    }

    installPromptRef.current = null

    try {
      await installPrompt.prompt()

      const { outcome } =
        await installPrompt.userChoice

      if (outcome === 'accepted') {
        setInstalled(true)
        setInstallStatus(
          'Tudo pronto! Abra o aplicativo para continuar.'
        )
      } else {
        setInstallStatus(
          'Você pode adicionar depois ou abrir o app no navegador.'
        )
      }
    } catch {
      showInstructions()
    }
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  const handleDialogClick = (event) => {
    const dialog = dialogRef.current

    if (!dialog || event.target !== dialog) {
      return
    }

    const bounds = dialog.getBoundingClientRect()

    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom

    if (clickedOutside) {
      dialog.close()
    }
  }

  return {
    dialogRef,
    installed,
    installStatus,
    handleInstall,
    closeDialog,
    handleDialogClick,
  }
}