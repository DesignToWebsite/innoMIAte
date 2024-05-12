import styled from "styled-components";
import React, { useState, useEffect } from "react";
import place from "../../assets/dashboard_competition/place.png";
import publicIcon from "../../assets/dashboard_competition/public.png";
import tags from "../../assets/dashboard_competition/tags.png";
import theme from "../../assets/dashboard_competition/theme.png";
import { GREEN_COLOR, ORANGE_COLOR } from "../../style/Colors";
const CardCompetitionInfo = ({ data }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(data.deadLine.trim()) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const timerComponents = [];

  Object.keys(timeLeft).some((interval) => {
    if (timeLeft[interval]) {
      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval]} {interval} à la date limite
        </span>
      );
      return true; // Break the loop after finding the first non-zero interval
    }
    return false;
  });

  return (
    <Card>
      <div className="cardCompetionInfo">
        <div className="deadline">
          <p className="dayLeft">
            {timerComponents.length ? (
              timerComponents
            ) : (
              <span>Le temps est écoulé!</span>
            )}
          </p>
          <h4>Date limite</h4>
          <p>{data.deadLine} </p>
        </div>
        <Line />
        <div className="info">
          <div className="row">
            <div className="col-6 item">
              <img src={place} alt="" />
              {data.location }
            </div>
            <div className="col-6 item">
              <img src={publicIcon} alt="" />
              {data.targetAudience}
            </div>
            <div className="col-6 item">{data.prizes.$values[0].amount}{data.prizes.$values[0].currency} in prizes</div>
            <div className="col-6 item">{data.participants.$values.length} participants</div>
          </div>
        </div>
        <Line />
        <div className="metaData">
          <div className="theme">
            <img src={theme} alt="" />
            {
             data.theme.$values.map((item, index)=>{
                return(<p className="tagsTheme" key={index}>{item}</p>)
              })
            }
  
          </div>
          <div className="tags">
            <img src={tags} alt="" />
            {data.tags.$values.map((tag, index) => {
              return <p key={index} className="tag">{tag} </p>;
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  /* background-color: #a5a4a4; */
  background-color: white;
  max-width: 300px;
  padding: 1em 0.5em;
  border-radius: 10px;
  img {
    margin-right: 10px;
  }
  .deadline {
    .dayLeft {
      background-color: ${GREEN_COLOR};
      width: fit-content;
      padding: 2px 10px;
      border-radius: 30px;
      color: white;
      font-size: 16px;
    }
    h4 {
      margin-top: 15px;
      font-size: 1.4em;
      font-weight: normal;
      margin-bottom: 0;
    }
    p {
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
  .info {
    .item {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
    }
  }
  .metaData {
    p {
      margin: 0;
      font-size: 15px;
    }
    .theme {
      display: flex;
      flex-wrap   :wrap ;
      align-items: center;
      margin-bottom: 10px;
      .tagsTheme {
        color: ${ORANGE_COLOR};
        border: 2px solid ${ORANGE_COLOR};
        padding: 1px 10px;
        margin: 5px 2px;
        border-radius: 30px;
        opacity: 0.8;
      }
    }
    .tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .tag{
        color: ${ORANGE_COLOR};
        background-color: #c5801156;
        margin-right: 5px;
        padding: 1px 10px;
        border-radius: 30px;
        opacity: 0.8;
      }
    }
  }
`;

const Line = styled.div`
  height: 3px;
  background-color: #dce6e9;
  margin: 15px 0;
`;

export default CardCompetitionInfo;
