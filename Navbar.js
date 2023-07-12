import { useRef } from "react"
import { FaTimes, FaBars } from "react-icons/fa";
import "../main.css";


function Navbar() {
    const navRef = useRef();

    const updateNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h2>Logo</h2>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Product</a>
                <a href="/#">Services</a>
                <a href="/#">Contact</a>
                <button className="btn close-btn" onClick={updateNav}>
                    <FaTimes />
                </button>
            </nav>
            <button className="btn" onClick={updateNav}><FaBars /></button>
        </header>
    )
}

export default Navbar;