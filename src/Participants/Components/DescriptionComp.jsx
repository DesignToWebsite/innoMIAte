import styled from "styled-components";
import dataJSON from "../../data/data.json";
import { Marked, marked } from "marked";
import star from "../../assets/dashboard_competition/Star.png";
import imageUser from "../../assets/Profile/user.png"
const DescriptionComp = ({ data }) => {
  // const data = dataJSON.competition[0];
  console.log(data)
  return (
    <DescriptionCompStyle>
      <Description>
        
        <div
          dangerouslySetInnerHTML={{ __html: marked(data.description) }}
        />

        <h3>Les Prix</h3>
        <div className="prices">
          {data.prizes?.$values.map((prize, key) => {
            return (
              <div key={key} className="priceItem">
                <div className="title">
                  <img src={star} alt="" />
                  {prize.name}
                </div>

                <ul>
                  <li> {prize.amount} {prize.currency} </li>
                  <li>{prize.description}</li>
                  {/* {price.others.map((other, index) => {
                    return <li key={index}>{other}</li>;
                  })} */}
                </ul>
              </div>
            );
          })}
        </div>

        <h2>Les Entraîneurs</h2>

        <div className="coachs">
          {data.coaches?.$values?.map((coach, index) => {
            return (
              <div key={index} className="item">
                <div className="image">
                  <img src={coach.user.image? coach.user.image: imageUser} alt="" />
                </div>
                <div className="info">
                  <h4>{coach.user.lastName} {coach.user.firstName}</h4>
                  {/* <p>{coach.user.job}</p> */}
                </div>
              </div>
            );
          })}
        </div>

        <h3>Les Juges</h3>
        <div className="judges">
          {data.judges?.$values?.map((judge, index) => {
            return (
              <div key={index} className="item">
                <div className="image">
                  <img src={judge.user.image ? judge.user.image : imageUser } alt="" />
                </div>
                <div className="info">
                  <h4>{judge.user.lastName} {judge.firstName}</h4>
                  {/* <p>{judge.job}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </Description>
      <div className="more">
        <div className="questions">
          <h4>Questions?</h4>
          <a href={`mailto:${data.responsibleEmail}`}> Email the hackathon manager</a>
        </div>
        <div className="sponsors">
          <h3>Organisateurs :</h3>

          {data.organizers?.$values.map((item) => {
            return (
              <div className="item">
                <p>{item.name}</p>
                <img src={item.imageUrl} alt={item.name} />;
              </div>
            );
          })}
        </div>
        <div className="sponsors">
          <h3>partenaires :</h3>

          {data.partnerships?.$values.map((item) => {
            return (
              <div className="item">
                <p>{item.name}</p>
                <img src={item.imageUrl} alt={item.name} />;
              </div>
            );
          })}
        </div>
        <div className="sponsors">
          <h3>Sponsors : </h3>
         
          {data.sponsors?.$values.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <img src={item.imageUrl} alt={item.name} />;
              </div>
            );
          })}
        </div>
      </div>
    </DescriptionCompStyle>
  );
};
const DescriptionCompStyle = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
  .more {
    padding: 2em 1em;
    .questions {
      background-color: #f5f7f7;
      width: fit-content;
      padding: 5px 15px;
      margin-bottom: 1em;
      @media screen and (max-width: 750px) {
        width: auto;
        text-align: center;
        padding: 1em;
      }
    }
    .sponsors {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      @media screen and (max-width: 750px) {
        flex-direction: row;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        h3, p{
          margin: 0;
          padding: 0;
        }
      
      }
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 750px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
      }
      }
      img {
        width: 100px;
      }
    }
  }
`;
const Description = styled.div`
  color: #233136;
  padding: 1.5em 2em;
  p {
    margin: 0;
  }
  h3 {
    padding: 0.5em 0;
  }
  .prices {
    display: flex;
    flex-wrap: wrap;
    .priceItem {
      margin-right: 15px;
      width: 200px;
      .title {
        display: flex;
      }

      ul {
        li {
          list-style-type: square;
        }
      }
    }
  }
  .judges,
  .coachs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .item {
    display: flex;
    padding-right: 20px;
    padding-bottom: 25px;
    gap: 10px;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-right: 2px;
      border-radius: 50%;
    }
    h4 {
      font-size: 19px;
      font-weight: 600;
      margin-bottom: 0;
    }
    p {
      font-size: 17px;
    }
  }
`;
export default DescriptionComp;
