import { useSelector } from "react-redux";
import { selectItems } from "../../redux/repositories/selectors";

const Repositories = () => {
  const { items } = useSelector(selectItems);

  return (
    <div>
      {items.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Язык</th>
              <th>Число форков</th>
              <th>Число звёзд</th>
              <th>Дата обновления</th>
            </tr>
          </thead>
          <tbody>
            {items.map((repo: any) => (
              <tr key={repo.id}>
                <td>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </td>
                <td>{repo.language}</td>
                <td>{repo.forks_count}</td>
                <td>{repo.stargazers_count}</td>
                <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Repositories;
