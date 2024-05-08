import styled from "styled-components";
import dataJSON from "../../data/data.json";
import { Marked, marked } from "marked";
import star from "../../assets/dashboard_competition/Star.png";
const DescriptionComp = ({ data }) => {
  // const data = dataJSON.competition[0];
  return (
    <DescriptionCompStyle>
      <Description>
        
        <div
          dangerouslySetInnerHTML={{ __html: marked(data.description) }}
        />

        <h3>Les Prix</h3>
        <div className="prices">
          {data.prizes?.map((price, key) => {
            return (
              <div key={key} className="priceItem">
                {/* <div className="title">
                  <img src={star} alt="" />
                  {price.title}
                </div> */}

                <ul>
                  <li> {price} </li>
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
          {/* {data.coachs.map((coach, index) => {
            return (
              <div key={index} className="item">
                <div className="image">
                  <img src={coach.img} alt="" />
                </div>
                <div className="info">
                  <h4>{coach.name}</h4>
                  <p>{coach.job}</p>
                </div>
              </div>
            );
          })} */}
        </div>

        <h3>Les Juges</h3>
        {/* <div className="judges">
          {data.judges.map((judge, index) => {
            return (
              <div key={index} className="item">
                <div className="image">
                  <img src={judge.img} alt="" />
                </div>
                <div className="info">
                  <h4>{judge.name}</h4>
                  <p>{judge.job}</p>
                </div>
              </div>
            );
          })}
        </div> */}
      </Description>
      <div className="more">
        <div className="questions">
          <h4>Questions?</h4>
          <a href="#"> Email the hackathon manager</a>
        </div>
        <div className="sponsors">
          <h3>Organisateurs</h3>

          {data.organizers.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <img src={item.imageUrl} alt={item.name} />;
              </div>
            );
          })}
        </div>
        <div className="sponsors">
          <h3>partenaires </h3>
          {/* {data.Partnership.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })} */}
          {data.partnerships.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <img src={item.imageUrl} alt={item.name} />;
              </div>
            );
          })}
        </div>
        <div className="sponsors">
          <h3>Sponsors</h3>
          {/* {data.sponsor.map((item, index) => {
            return <img key={index} src={item} />;
          })} */}
          {data.sponsors.map((item) => {
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
  .more {
    padding: 2em 1em;
    .questions {
      background-color: #f5f7f7;
      width: fit-content;
      padding: 5px 15px;
      margin-bottom: 1em;
    }
    .sponsors {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
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
  }
  .item {
    display: flex;
    padding-right: 20px;
    padding-bottom: 25px;
    img {
      width: 40px;
      height: 40px;
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
