import { PropTypes } from "prop-types";
import { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import {
  FilterWrapper,
  Languages,
  Levels,
  Price,
  Title,
} from "./Filter.styled";

const languages = [
  "French",
  "English",
  "German",
  "Ukrainian",
  "Polish",
  "Spanish",
  "Mandarin Chinese",
  "Italian",
  "Korean",
  "Vietnamese",
];

const levels = [
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
  "C1 Advanced",
  "C2 Proficient",
];

const prices = ["10", "20", "30", "40"];

const Filter = ({ onSelectLanguage, onSelectLevel, onSelectPrice }) => {
  const [, setSelectedLanguage] = useState(null);
  const [, setSelectedLevel] = useState(null);
  const [, setSelectedPrice] = useState(null);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    onSelectLanguage(language);
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    onSelectLevel(level);
  };

  const handleSelectPrice = (price) => {
    const priceValue = parseFloat(price);
    setSelectedPrice(priceValue);
    onSelectPrice(priceValue);
  };

  return (
    <FilterWrapper>
      <Languages>
        <Title>Languages</Title>
        <CustomSelect
          options={languages}
          onSelect={handleSelectLanguage}
          placeholder="Languages"
        />
      </Languages>

      <Levels>
        <Title>Level of knowledge</Title>
        <CustomSelect
          options={levels}
          onSelect={handleSelectLevel}
          placeholder="Levels"
        />
      </Levels>

      <Price>
        <Title>Price</Title>
        <CustomSelect
          options={prices}
          onSelect={handleSelectPrice}
          placeholder="Price"
        />
      </Price>
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  onSelectLanguage: PropTypes.func,
  onSelectLevel: PropTypes.func,
  onSelectPrice: PropTypes.func,
};
