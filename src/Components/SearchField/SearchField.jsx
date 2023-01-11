import PropTypes from "prop-types";
import { Label } from "../common/Label/Label";

export const SearchField = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </Label>
  );
};

SearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
