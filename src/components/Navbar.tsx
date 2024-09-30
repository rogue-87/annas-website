import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Selector from "./Selector";
import "./Navbar.css"

export default function Navbar() {
    const [selectedIndex, setSelectedIndex] = useState<number>(
        () => Number(localStorage.getItem("selectedIndex")) || 0
    );

    useEffect(() => {
        localStorage.setItem("selectedIndex", selectedIndex.toString());
    }, [selectedIndex]);

    function onSelectorClicked(index: number) {
        setSelectedIndex(index);
    }

    return (
        <div className="navbar">
            <Link to="/">
                <Selector text="Home" isSelected={selectedIndex == 0} onClick={() => onSelectorClicked(0)} />
            </Link>

            <Link to="/projects">
                <Selector text="Projects" isSelected={selectedIndex == 1} onClick={() => onSelectorClicked(1)} />
            </Link>

            <Link to="/blogs">
                <Selector text="Blogs" isSelected={selectedIndex == 2} onClick={() => onSelectorClicked(2)} />
            </Link>

            <Link to="/contact">
                <Selector text="Contact" isSelected={selectedIndex == 3} onClick={() => onSelectorClicked(3)} />
            </Link>
        </div>
    )
}