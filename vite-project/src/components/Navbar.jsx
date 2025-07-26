import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <h1 >
                            <img style={{ width: "20%",height:"80px", borderRadius:"50%" }} src="https://i.pinimg.com/474x/2c/d5/51/2cd5518d743fe43a393c88d573011a55.jpg" alt="Logo" />
                        </h1>
                    </div>
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}><GiHamburgerMenu /></button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
