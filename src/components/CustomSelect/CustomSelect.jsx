import { PropTypes } from "prop-types";
import { useState } from "react";
import { OptionItem, OptionsList, SelectButton, SelectWrapper } from "./CustomSelect.styled";

const CustomSelect = ({ options, onSelect  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <SelectWrapper>
      <SelectButton onClick={toggleOptions}>
        {selectedOption ? selectedOption : "Select Language"}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SelectButton>
      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <OptionItem
              key={option}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  options: PropTypes.string,
  onSelect: PropTypes.func,
};
