
import React,{Fragment} from "react";
import ChildFragment from "./ChildFragment";

const FatherFragment = () => {
  const films = [
    {
      id: 1,
      title: "Film Action",
      description: "Action",
      release: 2023,
    },

    {
      id: 2,
      title: "Film Horror",
      description: "Horror",
      release: 2022,
    },
    {
      id: 3,
      title: "Film Commedia",
      description: "Commedia",
      release: 2021,
    },
  ];

  return (
    <React.Fragment>
      KeyFilm
      <ul>
        {films.map((film) => (
          <ChildFragment
            key={film.id}
            title={film.title}
            description={film.description}
            release={film.release}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default FatherFragment;
