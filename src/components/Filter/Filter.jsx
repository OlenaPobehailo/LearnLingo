import { PropTypes } from "prop-types";
import { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import { FilterWrapper, Item, Title } from "./Filter.styled";

const languages = [
  "French",
  "English",
  "German",
  "Ukrainian",
  "Polish",
  "Spanish",
];

const Filter = ({ onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    console.log(selectedLanguage);
    onSelectLanguage(language);
  };

  return (
    <FilterWrapper>
      <Item>
        <Title>Languages</Title>
        <CustomSelect options={languages} onSelect={handleSelectLanguage} />
      </Item>
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  onSelectLanguage: PropTypes.string,
};
