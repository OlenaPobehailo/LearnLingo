import { useState } from "react";
import { PropTypes } from "prop-types";
import CustomSelect from "../../components/CustomSelect";
import {
  FilterWrapper,
  Languages,
  Levels,
  Price,
  Title,
} from "./Filter.styled";

const languages = [
  "All",
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
  "All",
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
  "C1 Advanced",
  "C2 Proficient",
];

const prices = ["All", "10", "20", "30", "40"];

const Filter = ({ onSelectLanguage, onSelectLevel, onSelectPrice }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    onSelectLanguage(language === "All" ? null : language);
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    onSelectLevel(level === "All" ? null : level);
  };

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
    onSelectPrice(price === "All" ? null : parseFloat(price));
  };

  return (
    <FilterWrapper>
      <Languages>
        <Title>Languages</Title>
        <CustomSelect
          options={languages}
          selected={selectedLanguage}
          onSelect={handleSelectLanguage}
          placeholder="Languages"
        />
      </Languages>

      <Levels>
        <Title>Level of knowledge</Title>
        <CustomSelect
          options={levels}
          onSelect={handleSelectLevel}
          selected={selectedLevel}
          placeholder="Levels"
        />
      </Levels>

      <Price>
        <Title>Price</Title>
        <CustomSelect
          options={prices}
          onSelect={handleSelectPrice}
          selected={selectedPrice}
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
