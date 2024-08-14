import { useSelector } from "react-redux";
import { selectItems } from "../../redux/repositories/selectors";
import { useAppDispatch } from "../../redux/store";
import { handleSearch } from "../../redux/repositories/asyncActions";
import { selectFilter } from "../../redux/filter/selectors";
import { useState } from "react";
import styles from "./index.module.scss";
import AdditionalInfo from "../additionalInfo";

interface RepoStore {
  id: string;
  html_url: string;
  name: string;
  language: string;
  forks_count: string;
  stargazers_count: string;
  updated_at: string;
}

const Repositories = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectItems);
  const [itemId, setItemId] = useState<string>();
  const { query } = useSelector(selectFilter);
  const [orderForks, setOrderForks] = useState<"desc" | "asc">("asc");
  const [orderStars, setOrderStars] = useState<"desc" | "asc">("asc");
  const [orderUpdated, setOrderUpdated] = useState<"desc" | "asc">("asc");

  const onForks = () => {
    const newOrder = orderForks === "asc" ? "desc" : "asc";
    setOrderForks(newOrder);
    dispatch(
      handleSearch({
        query,
        sortBy: "forks",
        order: newOrder,
      })
    );
  };

  const onStars = () => {
    const newOrder = orderStars === "asc" ? "desc" : "asc";
    setOrderStars(newOrder);
    dispatch(
      handleSearch({
        query,
        sortBy: "stars",
        order: newOrder,
      })
    );
  };

  const onUpdate = () => {
    const newOrder = orderUpdated === "asc" ? "desc" : "asc";
    setOrderUpdated(newOrder);
    dispatch(
      handleSearch({
        query,
        sortBy: "update",
        order: newOrder,
      })
    );
  };

  return (
    <div className={styles.repositories}>
      {items.length > 0 && (
        <div>
          <ul className={styles.repoList}>
            <li>Название</li>
            <li>Язык</li>
            <li onClick={onForks}>Число форков</li>
            <li onClick={onStars}>Число звёзд</li>
            <li onClick={onUpdate}>Дата обновления</li>
          </ul>
          <div>
            {items.map((repo: RepoStore) => (
              <ul
                onClick={() => setItemId(repo.id)}
                className={styles.repoList}
                key={repo.id}
              >
                <li>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </li>
                <li>{repo.language}</li>
                <li>{repo.forks_count}</li>
                <li>{repo.stargazers_count}</li>
                <li>{new Date(repo.updated_at).toLocaleDateString()}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
      {/* {itemId === undefined ? (
        <h1>Выберети репозиторий</h1>
      ) : (
        <AdditionalInfo id={itemId} />
      )} */}

      {itemId && <AdditionalInfo id={itemId} />}
    </div>
  );
};

export default Repositories;
