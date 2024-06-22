import styled from "styled-components";
// import dataJson from "../../data/data.json";
import CardCompetitionInfo from "../Components/general/CardCompetitionInfo";
import CompInfoOverview from "../Components/competitionPage/overview/CompInfoOverview";
import DescriptionComp from "../Components/competitionPage/overview/DescriptionComp";
import { RED_COLOR } from "../../style/Colors";
import { PADDING_BIG_SCREEN, PADDING_SMALL_SCREEN } from "../../style/Padding";

const Overview = ({
  isConfirmed,
  teamName,
  data,
  setJoinedCompetition,
  isLogged,
  joinedCompetition,
  hasATeam,
  isLeader,
}) => {
  // console.log(data)
  return (
    <>
      {data && (
        <OverviewStyle>
          <div className="header">
         
              <div className="general">
              <CompInfoOverview
                  isConfirmed={isConfirmed}
                  setJoinedCompetition={setJoinedCompetition}
                  isLogged={isLogged}
                  joinedCompetition={joinedCompetition}
                  hasATeam={hasATeam}
                  data={data}
                  isLeader={isLeader}
                  teamName={teamName}
                />
                <CardCompetitionInfo data={data} />

              </div>

            {!isConfirmed && data?.location != 0 && (
              <p className="activeYouEmail">
                Vous devez activer votre inscription à l'accueil pour confirmer
                votre présence
              </p>
            )}
          </div>
          <DescriptionComp data={data} />
        </OverviewStyle>
      )}
    </>
  );
};

const OverviewStyle = styled.div`
  .header {
    background-color: #dce6e9;
    width: 100%;
    padding:${PADDING_BIG_SCREEN};
    @media (max-width : 425px) {
      padding:${PADDING_SMALL_SCREEN};

    }
    
  }
  .activeYouEmail {
    color: ${RED_COLOR};
    padding-top: 5px;
  }
  .general{
    display: flex;
    justify-content: space-between;
    gap: 15px;
    flex-wrap: wrap;
  }
`;

export default Overview;
