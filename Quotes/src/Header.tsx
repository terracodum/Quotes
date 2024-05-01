import "./Header.css";
import Telegram from "./assets/telega.png";
import GitHub from "./assets/Gh.png";

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        Quotes by Terracodum
      </a>
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
