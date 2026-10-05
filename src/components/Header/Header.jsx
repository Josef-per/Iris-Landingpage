//import de imagens
import irisLogo from '../../assets/images/iris-logo.svg';

export default function Header (){
    return (
        <>
            <header className="header wrap">
                <a
                className="brand brand-purple"
                href="/"
                aria-label="Íris, início"
                >
                <img
                    src={irisLogo}
                    width="270"
                    height="130"
                    alt="Íris"
                />
                </a>

                <nav aria-label="Menu principal">
                    <a href="#sobre">O projeto</a>
                    <a href="#telas">Telas do app</a>
                </nav>

                <a
                className="button button-small button-outline"
                href="/app"
                >
                Acessar o app

                <svg className="icon">
                    <use href="#arrow" />
                </svg>
                </a>
            </header>
        </>
    )
}