import styled from "styled-components";
import dataJSON from "../../data/data.json";
import { Marked, marked } from "marked";
import star from "../../assets/dashboard_competition/Star.png";
const DescriptionComp = () => {
  const data = dataJSON.competition;

  return (
    <DescriptionCompStyle>
<Description>
      <h3>À propos du défi</h3>
      <div
        dangerouslySetInnerHTML={{ __html: marked(data.AboutCompetition) }}
      />
      <h3>Ce que vous obtenez</h3>
      <div dangerouslySetInnerHTML={{ __html: marked(data.WhatYouGet) }} />
      <div dangerouslySetInnerHTML={{ __html: marked(data.WhatYouGet) }} />
      <div dangerouslySetInnerHTML={{ __html: marked(data.WhatYouGet) }} />

      <h3>Commencer </h3>
      <div dangerouslySetInnerHTML={{ __html: marked(data.GettingStarted) }} />
      <div dangerouslySetInnerHTML={{ __html: marked(data.GettingStarted) }} />
      <div dangerouslySetInnerHTML={{ __html: marked(data.GettingStarted) }} />

      <h3>Les Prix</h3>
      <div className="prices">
        {data.prizesAll.map((price) => {
          return (
            <div className="priceItem">
              <div className="title">
                <img src={star} alt="" />
                {price.title}
              </div>

              <ul>
                <li> {price.price} </li>
                {price.others.map((other) => {
                  return <li>{other}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      
      <h2>Les Entraîneurs</h2>

      <div className="coachs">
        {data.coachs.map((coach) => {
          return (
            <div className="item">
              <div className="image">
                <img src={coach.img} alt="" />
              </div>
              <div className="info">
                <h4>{coach.name}</h4>
                <p>{coach.job}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h3>Les Juges</h3>
      <div className="judges">
        {data.judges.map((judge) => {
          return (
            <div className="item">
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
      </div>
    </Description>
<div className="more">
    <div className="questions">
        <h4>Questions?</h4>
        <a href="#"> Email the hackathon manager</a>
    </div>
    <div className="sponsors">
        {data.sponsor.map(item=>{
            return <img src={item} />
        })}
    </div>
</div>
    </DescriptionCompStyle>
    
  );
};
const DescriptionCompStyle = styled.div`
display: grid;
grid-template-columns: 4fr 1fr;
.more{
    padding: 2em 1em;
    .questions{
        background-color: #F5F7F7;
        width: fit-content;
        padding: 5px 15px;
    }
    .sponsors{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 100px;
        }
    }
}
`
const Description = styled.div`
  color: #233136;
  padding: 1.5em 1em;
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
  .judges, .coachs{
    display: flex;
    flex-wrap: wrap;
    
  }
  .item{
        display: flex;
        padding-right: 20px;
        padding-bottom: 25px;
        img{
            width: 70px;
            border-radius: 50%;
        }
        h4{
            font-size: 19px;
            font-weight: 600;
            margin-bottom: 0;
        }
        p{
            font-size: 17px;
        }
    }
`;
export default DescriptionComp;
