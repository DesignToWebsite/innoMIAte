import { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const Cards_small = () => {
  const [competitions, setCompetitions] = useState(null);
  useEffect(() => {
    const url = "http://localhost:8000/competition";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCompetitions(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);
  return (
    <Cards>
      <div className="container">
        <div className="cards">
          {competitions &&
            competitions.map((item) => {
              return <Card data={item} />;
            })}
        </div>
      </div>
    </Cards>
  );
};

const Cards = styled.div`
    margin: 2em 0;
    .cards{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
`
export default Cards_small;
