import logo from "../images/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} className="logo" alt="Место логотип" />
      </a>
    </header>
  );
}
