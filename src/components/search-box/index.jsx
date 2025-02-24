/* eslint-disable react/prop-types */
import "./search-box.css";

const SearchBox = ({
  onChangeHandler,
  placeHolder,
  customClass,
  searchLable,
}) => {
  return (
    <div className="searchContainer">
      <label>
        {searchLable}
        <input
          type="search"
          className={`search-box ${customClass}`}
          placeholder={placeHolder}
          onChange={onChangeHandler}
        />
      </label>
    </div>
  );
};

export default SearchBox;
