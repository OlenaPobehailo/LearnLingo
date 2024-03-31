import { PropTypes } from "prop-types";
import { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import { FilterWrapper, Languages, Levels, Title } from "./Filter.styled";

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

const Filter = ({ onSelectLanguage, onSelectLevel }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

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

  return (
    <FilterWrapper>
      <Languages>
        <Title>Languages</Title>
        <CustomSelect options={languages} onSelect={handleSelectLanguage} />
      </Languages>

      <Levels>
        <Title>Levels</Title>
        <CustomSelect options={levels} onSelect={handleSelectLevel} />
      </Levels>
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  onSelectLanguage: PropTypes.func,
  onSelectLevel: PropTypes.string,
};
