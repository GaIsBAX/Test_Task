import { useState } from "react";
import { handleSearch } from "../../redux/repositories/asyncActions";
import { useAppDispatch } from "../../redux/store";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchClick = () => {
    dispatch(
      handleSearch({
        query,
      })
    );
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Введите запрос..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearchClick}>Поиск</button>
    </header>
  );
};

export default Header;
