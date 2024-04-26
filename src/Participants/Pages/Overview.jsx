import styled from "styled-components";
import dataJson from "../../data/data.json";
import CardCompetitionInfo from "../Components/CardCompetitionInfo";
import CompInfoOverview from "../Components/CompInfoOverview";
import DescriptionComp from "../Components/DescriptionComp";


const Overview = ({data, isLogged, joinedCompetition, setJoinedCompetition}) => {

  return (
    <>
      {data && 
        <OverviewStyle>
          <div className="header">
            <div className="row">
              <div className="col-12 col-md-7 col-sm-6 col-lg-8">
                <CompInfoOverview 
                    isLogged={isLogged} 
                    joinedCompetition={joinedCompetition} 
                    setJoinedCompetition={setJoinedCompetition}  
                    data={data} />
              </div>
              <div className="col-12 col-md-5 col-sm-6 col-lg-4">
                <CardCompetitionInfo data={data} />
              </div>
            </div>
          </div>
          <DescriptionComp data={data}/>
        </OverviewStyle>
      }
    </>
  );
};

const OverviewStyle = styled.div`
  .header {
    background-color: #dce6e9;
    padding: 2em 1em;
    width: 100%;
  }
`;

export default Overview;
