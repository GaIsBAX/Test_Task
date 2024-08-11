import { handleSearch } from "../../redux/repositories/asyncActions";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { setQuery } from "../../redux/filter/filterSlice";
import { ChangeEvent } from "react";
import styles from "./index.module.scss";

const Header = () => {
  // const [query, setQuery] = useState("");
  const { query, sortBy, order } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleSearchClick = () => {
    dispatch(
      handleSearch({
        query,
        sortBy,
        order,
      })
    );
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <header className={styles.header}>
      <input
        type="text"
        placeholder="Введите запрос..."
        value={query}
        onChange={onChangeInput}
      />
      <button onClick={handleSearchClick}>Поиск</button>
    </header>
  );
};

export default Header;
