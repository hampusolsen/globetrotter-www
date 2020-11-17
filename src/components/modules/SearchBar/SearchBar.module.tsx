import React from "react";

interface Props {
  name: string;
}

const SearchBar: React.FC<Props> = ({ name }) => {
  return (
    <form>
      <input type="search" name={name} />
    </form>
  );
};

export default SearchBar;
