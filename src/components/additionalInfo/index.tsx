import axios from "axios";
import { FC, useEffect, useState } from "react";

type licenseType = {
  name: string;
};
type itemType = {
  name: string;
  language: string;
  stargazers_count: string;
  license: licenseType;
  languages_url: string;
};

interface AdditionalInfoProps {
  id: string;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({ id }) => {
  const [item, setItem] = useState<itemType>({
    name: "",
    language: "",
    stargazers_count: "",
    license: {
      name: "",
    },
    languages_url: "",
  });
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    async function fetchRepo() {
      try {
        const res = await axios.get(
          "https://api.github.com/repositories/" + id
        );

        setItem(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRepo();
  }, [id]);

  useEffect(() => {
    const languageurl = item.languages_url;
    const fetchData = async () => {
      try {
        const res = await axios.get(languageurl);
        setLanguages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [item.languages_url]);

  if (item === undefined) {
    return <h1>Выберети репозиторий</h1>;
  }
console.log(languages)
  return (
    <div>
      <h1>{item.name}</h1>
      <div>
        <h2>{item.language}</h2>
        <h2>{item.stargazers_count}</h2>
      </div>
      <ul>
        {Object.keys(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h3>{item.license === null ? "Not Lisense" : item.license.name}</h3>
    </div>
  );
};

export default AdditionalInfo;

// const languageurl = item.languages_url;
//   const [language, setLanguage] = useState([]);

// const fetchData = async () => {
//   try {
//     const response = await axios.get(languageurl);
//     setLanguage(response.data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("a");
//   }
// };

// fetchData();
// }, [languageurl]);

// return (
// <div>
//   <h1>{item.name}</h1>
//   <h2>{Object.keys(language)}</h2>
// </div>
