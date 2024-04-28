import "./Header.css";
import Telegram from "./assets/telega.png";
import GitHub from "./assets/Gh.png";


type Props = {
    headling: string
};


function Header(props: Props) {
    return (
        <header className="header">
            <h3 className="logo">Quotes by Terracodum</h3>
            <h2 className="page-name">{props.headling}</h2>
            <div className="contact">
                <a href="https://t.me/Lucky_WoIf">
                    <img className="telega" src={Telegram} alt="Telegram" />
                </a>
                <a href="https://github.com/terracodum/Quotes">
                    <img className="github" src={GitHub} alt="Github" />
                </a>
            </div>
        </header>
    );
}

export default Header;
