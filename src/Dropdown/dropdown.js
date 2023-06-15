/** ------------------ IMPORTING CSS ------------------ **/
import Style from "./dropdown.module.css";
/** ------------------ IMPORTING HOOKS ------------------ **/
import React, {useState} from "react";


function Dropdown() {

/** ------------------ Array to store the list data ------------------ **/
    const list = [
        "Sure, because dropdowns are just so user-friendly.",
        "Absolutely, because everyone loves endless dropdown menus.",
        "Why not? Dropdowns bring joy to user interfaces.",
        "Definitely, because life is incomplete without dropdowns.",
        "Of course, because dropdowns make everything better."
    ];


    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("-");

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

  return (
        <div className={Style.dropdown}>
            <h1 className={Style.title}>Should We Use Dropdown?</h1>
            <h3 className={Style.selectedOption}>{selectedOption}</h3>
            <button
                className={Style.dropdownButton}
                onClick={handleDropdownToggle}>
                Select
            </button>
            {isDropdownOpen && (
                <ul className={Style.dropdownMenu}>
                {list.map((item, index) => (
                    <li
                    key={index}
                    className={Style.dropdownMenuItem}
                    onClick={() => handleOptionSelect(item)}
                    >
                    {item}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}



/** ------------------ EXPORTING CSS ------------------ **/
export default Dropdown