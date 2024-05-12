import { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import axios from "axios";

const Cards_small = () => {
  const [competitions, setCompetitions] = useState(null);
  const [noCompetion, setNoCompetion] = useState(null)
  useEffect(() => {
    const fetchCompetitions = async () => {

        const url = "http://localhost:5299/api/Competition";
        try {
            const response = await axios.get(url);
            console.log("Response data:", response.data.$values);
            setCompetitions(response.data.$values);
            if(response.data.length == 0){
              setNoCompetion('no competition exist')
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchCompetitions();
}, []);


  return (
    <Cards>
      <div className="container">
        <div className="cards">
          {competitions &&
            competitions.map((item) => {
              return <Card data={item} />;
            })}

            {noCompetion && <p className="no_comp">No competition exist</p>}
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
    .no_comp{
      margin: 2em auto;
    }
`
export default Cards_small;
