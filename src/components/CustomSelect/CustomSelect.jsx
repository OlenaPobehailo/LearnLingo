import { useState } from "react";
import { PropTypes } from "prop-types";
import ChevronIcon from "../../assets/icons/chevron-down.svg?react";
import {
  OptionItem,
  OptionsList,
  SelectButton,
  SelectWrapper,
} from "./CustomSelect.styled";

const CustomSelect = ({ options, onSelect, placeholder }) => {
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
        {selectedOption ? selectedOption : placeholder || "Select"}
        <ChevronIcon />
      </SelectButton>
      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <OptionItem key={option} onClick={() => handleSelectOption(option)}>
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
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
