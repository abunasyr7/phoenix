import { useState } from "react";
import DropDownIcon from "../images/down-arrow.png";
import "./Dropdown.css";

const Dropdown = ({ list, selectedItem, setSelectedItem }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button type="button" className="dropbtn" onClick={toggleDropdown}>
        <p>{selectedItem.title}</p>
        <img src={DropDownIcon} alt="Dropdown Icon" />
      </button>
      {isDropdownOpen && (
        <div>
          <ul
            className="dropdown-content"
            aria-labelledby="dropdownHoverButton"
          >
            {list.map((listItem, index) => (
              <li key={index}>
                <button onClick={() => handleItemClick(listItem)}>
                  {listItem.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
