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
];

const levels = [
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
];

const prices = ["10", "20", "30", "40"];

const Filter = ({ onSelectLanguage, onSelectLevel, onSelectPrice }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    console.log(selectedLanguage);
    onSelectLanguage(language);
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    console.log(selectedLevel);
    onSelectLevel(level);
  };

  const handleSelectPrice = (price) => {
    const priceValue = parseFloat(price);
    setSelectedPrice(priceValue);
    console.log(selectedPrice);
    onSelectPrice(priceValue);
  };

  return (
    <FilterWrapper>
      <Languages>
        <Title>Languages</Title>
        <CustomSelect options={languages} onSelect={handleSelectLanguage} placeholder="Languages"/>
      </Languages>

      <Levels>
        <Title>Level of knowledge</Title>
        <CustomSelect options={levels} onSelect={handleSelectLevel} placeholder="Levels"/>
      </Levels>

      <Price>
        <Title>Price</Title>
        <CustomSelect options={prices} onSelect={handleSelectPrice} placeholder="Price"/>
      </Price>
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  onSelectLanguage: PropTypes.func,
  onSelectLevel: PropTypes.string,
  onSelectPrice: PropTypes.string,
};
