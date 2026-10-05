import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const motion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    // Não anima se o usuário prefere menos movimento
    if (motion.matches) return;

    // Browser sem suporte
    if (
      typeof IntersectionObserver === 'undefined' ||
      typeof Element === 'undefined' ||
      !Element.prototype.animate
    ) {
      return;
    }

    const animations = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const element = entry.target;

          observer.unobserve(element);

          // Não esconder elemento que recebeu foco pelo teclado
          if (
            motion.matches ||
            element.contains(document.activeElement)
          ) {
            continue;
          }

          const isCard = element.matches(
            '.feature, .screen-card'
          );

          const index = isCard
            ? [...element.parentElement.children].indexOf(
                element
              )
            : 0;

          const animation = element.animate(
            [
              {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              {
                opacity: 1,
                transform: 'translateY(0)',
              },
            ],
            {
              duration: 650,
              delay: (index % 3) * 70,
              easing:
                'cubic-bezier(0.22, 1, 0.36, 1)',
              fill: 'backwards',
            }
          );

          animations.add(animation);

          const finish = () => {
            animations.delete(animation);
          };

          animation.addEventListener(
            'finish',
            finish,
            { once: true }
          );

          animation.addEventListener(
            'cancel',
            finish,
            { once: true }
          );

          element.addEventListener(
            'focusin',
            () => animation.cancel(),
            { once: true }
          );
        }
      },
      {
        threshold: 0.08,
      }
    );

    const elements = document.querySelectorAll(
      '.hero-copy, .hero-art, .section-heading, ' +
      '.feature, .screen-card, .about-art, ' +
      '.about-copy, .install-panel, .install-guide'
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    const handleMotionChange = (event) => {
      if (!event.matches) return;

      observer.disconnect();

      for (const animation of animations) {
        animation.cancel();
      }

      animations.clear();
    };

    motion.addEventListener(
      'change',
      handleMotionChange
    );

    return () => {
      observer.disconnect();

      for (const animation of animations) {
        animation.cancel();
      }

      animations.clear();

      motion.removeEventListener(
        'change',
        handleMotionChange
      );
    };
  }, []);
}