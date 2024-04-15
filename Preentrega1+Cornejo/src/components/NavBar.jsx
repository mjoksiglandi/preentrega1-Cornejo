import logo from "../assets/images/logo-tpg.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="TRASHPANDA" width={180} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase textoNavbar" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase textoNavbar" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase textoNavbar" href="#">Props</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase textoNavbar" href="#">Cosplay</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase textoNavbar" href="#">Contactanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;