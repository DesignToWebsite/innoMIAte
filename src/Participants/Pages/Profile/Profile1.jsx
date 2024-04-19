import React, { useState } from "react";
import styled from "styled-components";
import edit_icon from "../../../assets/icons/edit_icon.png";
import git_icon from "../../../assets/icons/git_icon.png";
import profile from "../../../assets/Profile/photo_profile.jpg";

const Profile1 = () => {
  const [skills] = useState(["css3", "html5", "javascript", "bootstrap", "sass"]);
  const [interests] = useState([
    "Beginner Friendly",
    "Communication",
    "DevOps",
    "E-commerce/Retail",
    "Education",
    "Mobile",
    "Web"
  ]);

  return (
    <ProfileContainer>
      <Page>
        <LinearGradient />
        <Linear />
        <UserName>User name</UserName>
        <UserName>(user_name)</UserName>
        <EditButton>
          <EditText>Edit header design</EditText>
        </EditButton>
        <ImageContainer>
          <img className="icon" src={profile} alt="profile" />
        </ImageContainer>
        <Info>
          <City>Morocco</City>
          <img src={edit_icon} className="icon_prof edit-icon-city" alt="edit" />
          <SiteIcon>🔗</SiteIcon>
          <Website>Website</Website>
          <GitIcon>
            <img src={git_icon} className="icon_prof icon-git" alt="git" />
          </GitIcon>
          <GitHub>GitHub</GitHub>
        </Info>
        <SkillsTitle>Skills</SkillsTitle>
        <img src={edit_icon} className="icon_prof edit-icon-skill" alt="edit" />
        <Skills>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </Skills>
        <InterestTitle>Interests</InterestTitle>
        <img src={edit_icon} className="icon_prof edit-icon" alt="edit" />
        <Interests>
          {interests.map((interest, index) => (
            <InterestItem key={index}>{interest}</InterestItem>
          ))}
        </Interests>
        <Bio>Add your bio.</Bio>
        <ProfileList>
          <ul className="link-list">
            <li className="active">
              <span className="v2078_7315">0</span>
              <span className="v2078_7316">Projects</span>
            </li>
            <li className="v2078_7317">
              <span className="v2078_7318">1</span>
              <span className="v2078_7319">Hackathon</span>
            </li>
            <li className="v2078_7320">
              <span className="v2078_7321">0</span>
              <span className="v2078_7322">Followers</span>
            </li>
            <li className="v2078_7323">
              <span className="v2078_7324">0</span>
              <span className="v2078_7325">Following</span>
            </li>
            <li className="v2078_7326">
              <span className="v2078_7327">0</span>
              <span className="v2078_7328">Likes</span>
            </li>
          </ul>
        </ProfileList>
        <ProfileBtn>
          <button className="edit">
            <span className="text-edit">Edit info & settings</span>
          </button>
          <button className="add-project">
            <span className="text-ajout">Add a new project</span>
          </button>
        </ProfileBtn>
        <PortfolioContenu>USER's portfolio is empty.</PortfolioContenu>
      </Page>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  .icon {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(183,195,199,1);
    opacity: 1;
    margin-left: 100px;
    margin-top: 150px;
    
  }
  img.icon_prof{
    width: 15px;
    height: 15px;
  }
  .icon-git {
    width: 16px;
    height: 13px;
    opacity: 1;
    position: absolute;
    top: 7px;
    left: 0px;
  }
  .add-project {
    width: 160px;
    height: 32px;
    background: rgba(1,72,28,1);
    opacity: 1;
    position: absolute;
    top: 215px;
    left: 0px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    overflow: hidden;
    margin-top: 15px;
  }
  .edit-icon-city{
    width: 12px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 15px;
    left: 101px;
    font-family: Font Awesome 5 Free;
    font-weight: Solid;
    font-size: 12px;
    opacity: 1;
    text-align: left;
  }
  .edit-icon-skill {
    width: 12px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 314px;
    left: 317px;
    font-family: Font Awesome 5 Free;
    font-weight: Solid;
    font-size: 12px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7284 {
    width: 45px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 8px;
    overflow: hidden;
  }
  .v2078_7285 {
    width: 28px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7286 {
    width: 52px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 62px;
    overflow: hidden;
  }
  .v2078_7287 {
    width: 35px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7288 {
    width: 76px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 123px;
    overflow: hidden;
  }
  .v2078_7289 {
    width: 59px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7290 {
    width: 77px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 208px;
    overflow: hidden;
  }
  .v2078_7291 {
    width: 60px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7292 {
    width: 43px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 293px;
    overflow: hidden;
  }
  .v2078_7293 {
    width: 26px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 12px;
    opacity: 1;
    text-align: center;
  }
  .edit-icon {
    width: 12px;
    height: 20px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 357px;
    left: 340px;
    font-family: Font Awesome 5 Free;
    font-weight: Solid;
    font-size: 12px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7297 {
    width: 125px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 8px;
    overflow: hidden;
  }
  .v2078_7298 {
    width: 108px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7299 {
    width: 116px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 142px;
    overflow: hidden;
  }
  .v2078_7300 {
    width: 99px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 3px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7301 {
    width: 67px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 267px;
    overflow: hidden;
  }
  .v2078_7302 {
    width: 50px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7303 {
    width: 138px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 343px;
    overflow: hidden;
  }
  .v2078_7304 {
    width: 121px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7305 {
    width: 79px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 489px;
    overflow: hidden;
  }
  .v2078_7306 {
    width: 62px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7307 {
    width: 61px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 577px;
    overflow: hidden;
  }
  .v2078_7308 {
    width: 43px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7309 {
    width: 46px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 646px;
    overflow: hidden;
  }
  .v2078_7310 {
    width: 29px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 4px;
    left: 9px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .link-list {
    width: 100%;
    height: 69px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 16px;
    left: 90px;
    overflow: hidden;
  }
  .active {
    width: 100%;
    height: 66px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v2078_7315 {
    width: 13px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 4px;
    left: 30px;
    font-family: Arial;
    font-weight: Bold;
    font-size: 19px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7316 {
    width: 79px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 35px;
    left: 0px;
    margin-left: 0px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .link-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .link-list li {
    display: inline-block;
    margin-right: 10px; /* Espacement entre les éléments de la liste */
  }
  .link-list li.active::after {
    content: '';
    position: absolute;
    bottom: -1px; /* Ajustez la position verticale de la ligne selon vos besoins */
    left: 0;
    width: 5%;
    height: 5px; /* Épaisseur de la ligne */
    background-color: rgba(197, 128, 17, 1); /* Couleur de la ligne */
    margin-left: 10px;
  }
  .v2078_7317 {
    width: 98px;
    height: 66px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 106px;
    overflow: hidden;
  }
  .v2078_7318 {
    width: 8px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 45px;
    font-family: Arial;
    font-weight: Bold;
    font-size: 19px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7319 {
    width: 98px;
    color: rgba(156,174,178,1);
    position: absolute;
    top: 35px;
    left: 0px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7320 {
    width: 93px;
    height: 66px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 1px;
    left: 230px;
    overflow: hidden;
  }
  .v2078_7321 {
    width: 13px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 40px;
    font-family: Arial;
    font-weight: Bold;
    font-size: 19px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7322 {
    width: 93px;
    color: rgba(156,174,178,1);
    position: absolute;
    top: 35px;
    left: 0px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7323 {
    width: 93px;
    height: 66px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 1px;
    left: 349px;
    overflow: hidden;
  }
  .v2078_7324 {
    width: 13px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 41px;
    font-family: Arial;
    font-weight: Bold;
    font-size: 19px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7325 {
    width: 93px;
    color: rgba(156,174,178,1);
    position: absolute;
    top: 35px;
    left: 0px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7326 {
    width: 42px;
    height: 66px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 1px;
    left: 469px;
    overflow: hidden;
  }
  .v2078_7327 {
    width: 13px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 4px;
    left: 15px;
    font-family: Arial;
    font-weight: Bold;
    font-size: 19px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7328 {
    width: 42px;
    color: rgba(156,174,178,1);
    position: absolute;
    top: 35px;
    left: 0px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 13px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7329 {
    width: 100%;
    height: 349px;
    background: rgba(237,241,242,1);
    opacity: 1;
    position: absolute;
    top: 588px;
    left: 0px;
    overflow: hidden;
  }
  .v2078_7330 {
    width: 100%;
    height: 278px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 74px;
    overflow: hidden;
  }
  .v2078_7331 {
    width: 68px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 82px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7332 {
    width: 44px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 82px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7333 {
    width: 55px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 82px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7334 {
    width: 57px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 82px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7335 {
    width: 33px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 203px;
    left: 82px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7336 {
    width: 97px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 382px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7337 {
    width: 137px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 382px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7338 {
    width: 115px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 382px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7339 {
    width: 123px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 382px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7340 {
    width: 127px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 203px;
    left: 382px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7341 {
    width: 72px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 682px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7342 {
    width: 93px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 682px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7343 {
    width: 116px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 682px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7344 {
    width: 57px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 682px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7345 {
    width: 70px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 982px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7346 {
    width: 16px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 96px;
    left: 982px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7347 {
    width: 50px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 1016px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7348 {
    width: 20px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 133px;
    left: 982px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7349 {
    width: 55px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 1016px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7350 {
    width: 10px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 171px;
    left: 982px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7351 {
    width: 70px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 1016px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7352 {
    width: 14px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 208px;
    left: 982px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7353 {
    width: 60px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 203px;
    left: 1016px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7354 {
    width: 287px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 279px;
    left: 531px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: center;
  }
  .v2123_2109 {
    width: 100%;
    height: 349px;
    background: rgba(237,241,242,1);
    opacity: 1;
    position: absolute;
    top: 17px;
    left: 0px;
    overflow: hidden;
  }
  .v2123_2110 {
    width: 100%;
    height: 278px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 75px;
    overflow: hidden;
  }
  .v2123_2111 {
    width: 68px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 83px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2112 {
    width: 44px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 83px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2113 {
    width: 55px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 83px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2114 {
    width: 57px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 83px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2115 {
    width: 33px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 203px;
    left: 83px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2116 {
    width: 97px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 383px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2117 {
    width: 137px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 383px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2118 {
    width: 115px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 383px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2119 {
    width: 123px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 383px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2120 {
    width: 127px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 203px;
    left: 383px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2121 {
    width: 72px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 683px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2122 {
    width: 93px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 683px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2123 {
    width: 116px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 683px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2124 {
    width: 57px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 683px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2125 {
    width: 70px;
    color: rgba(25,35,37,1);
    position: absolute;
    top: 48px;
    left: 983px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2126 {
    width: 16px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 96px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2127 {
    width: 50px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 91px;
    left: 1017px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2128 {
    width: 20px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 133px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2129 {
    width: 55px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 128px;
    left: 1017px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2130 {
    width: 10px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 171px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2131 {
    width: 70px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 166px;
    left: 1017px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2132 {
    width: 14px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 208px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2133 {
    width: 60px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 203px;
    left: 1017px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2134 {
    width: 287px;
    color: rgba(35,49,54,1);
    position: absolute;
    top: 279px;
    left: 531px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: center;
  }
  .v2123_2135 {
    width: 100%;
    height: 349px;
    background: linear-gradient(rgba(0,166,81,1), rgba(255,1,1,1));
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }
  .v2123_2136 {
    width: 100%;
    height: 278px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 94px;
    overflow: hidden;
  }
  .v2123_2137 {
    width: 68px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 48px;
    left: 83px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2138 {
    width: 44px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 91px;
    left: 83px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2139 {
    width: 55px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 128px;
    left: 83px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2140 {
    width: 57px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 166px;
    left: 83px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2141 {
    width: 33px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 203px;
    left: 83px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2142 {
    width: 97px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 48px;
    left: 383px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2143 {
    width: 137px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 91px;
    left: 383px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2144 {
    width: 115px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 128px;
    left: 383px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2145 {
    width: 123px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 166px;
    left: 383px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2146 {
    width: 127px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 203px;
    left: 383px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2147 {
    width: 72px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 48px;
    left: 683px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2148 {
    width: 93px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 91px;
    left: 683px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2149 {
    width: 116px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 128px;
    left: 683px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2150 {
    width: 57px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 166px;
    left: 683px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2151 {
    width: 70px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 48px;
    left: 983px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2152 {
    width: 16px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 96px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2153 {
    width: 50px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 91px;
    left: 1017px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2154 {
    width: 20px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 133px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2155 {
    width: 55px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 128px;
    left: 1017px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2156 {
    width: 10px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 171px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2157 {
    width: 70px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 166px;
    left: 1017px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2158 {
    width: 14px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 208px;
    left: 983px;
    font-family: Font Awesome 5 Brands;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2159 {
    width: 60px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 203px;
    left: 1017px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_2160 {
    width: 287px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 278px;
    left: 550px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .edit {
    width: 160px;
    height: 32px;
    background: rgba(216,6,6,1);
    opacity: 1;
    position: absolute;
    top: 186px;
    left: 0px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    overflow: hidden;
  }
  .text-edit {
    width: 120px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 7px;
    left: 20px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  
  .text-ajout {
    width: 117px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 7px;
    left: 22px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
  }
  .v2078_7359 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 2px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30000001192092896);
    overflow: hidden;
  }
  .v2078_7360 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v2078_7361 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 75px;
    overflow: hidden;
  }
  .v2078_7362 {
    width: 574px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 209px;
    overflow: hidden;
  }
  .v2078_7363 {
    width: 122px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 1px;
    overflow: hidden;
  }
  .v2078_7364 {
    width: 58px;
    color: rgba(3,114,45,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7365 {
    width: 10px;
    height: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 28px;
    left: 93px;
    border: 5px solid rgba(183,195,199,1);
    overflow: hidden;
  }
  .v2078_7366 {
    width: 135px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 103px;
    overflow: hidden;
  }
  .v2078_7367 {
    width: 87px;
    color: rgba(3,114,45,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7368 {
    width: 140px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 261px;
    overflow: hidden;
  }
  .v2078_7369 {
    width: 156px;
    color: rgba(3,114,45,1);
    position: absolute;
    top: 0px;
    left: 16px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7370 {
    width: 114px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 401px;
    overflow: hidden;
  }
  .v2078_7371 {
    width: 79px;
    color: rgba(3,114,45,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7372 {
    width: 44px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 967px;
    overflow: hidden;
  }
  .v2078_7373 {
    width: 20px;
    color: rgba(3,114,45,1);
    position: absolute;
    top: 20px;
    left: 12px;
    font-family: Font Awesome 5 Free;
    font-weight: Solid;
    font-size: 20px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7374 {
    width: 68px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 10px;
    left: 65px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 28px;
    opacity: 1;
    text-align: left;
  }
  .v2078_7375 {
    width: 80px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 1085px;
    overflow: hidden;
  }
  .v2078_7376 {
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 16px;
    left: 12px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    overflow: hidden;
  }
  .v2078_7377 {
    width: 22px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 30px;
    left: 40px;
    overflow: hidden;
  }
  .v2123_1732 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 2px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30000001192092896);
    overflow: hidden;
  }
  .v2123_1733 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v2123_1734 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 66px;
    overflow: hidden;
  }
  .v2123_1735 {
    width: 574px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 209px;
    overflow: hidden;
  }
  .v2123_1736 {
    width: 122px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 1px;
    overflow: hidden;
  }
  .v2123_1737 {
    width: 58px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_1738 {
    width: 135px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 103px;
    overflow: hidden;
  }
  .v2123_1739 {
    width: 87px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_1740 {
    width: 140px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 261px;
    overflow: hidden;
  }
  .v2123_1741 {
    width: 156px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 16px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_1742 {
    width: 114px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 401px;
    overflow: hidden;
  }
  .v2123_1743 {
    width: 79px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_1744 {
    width: 44px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 967px;
    overflow: hidden;
  }
  .v2123_1745 {
    width: 20px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 20px;
    left: 12px;
    font-family: Font Awesome 5 Free;
    font-weight: Solid;
    font-size: 20px;
    opacity: 1;
    text-align: left;
  }
  .v2123_1746 {
    width: 86px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 1011px;
    overflow: hidden;
  }
  .v2123_1747 {
    width: 45px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 21px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_1748 {
    width: 103px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 1097px;
    overflow: hidden;
  }
  .v2123_1749 {
    width: 87px;
    height: 34px;
    background: rgba(115,3,3,1);
    opacity: 1;
    position: absolute;
    top: 14px;
    left: 8px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    overflow: hidden;
  }
  .v2123_1750 {
    width: 55px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 4px;
    left: 16px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2123_1751 {
    width: 138px;
    position: absolute;
    top: 10px;
    left: 65px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 28px;
    opacity: 1;
    text-align: left;
  }
  .v2124_1277 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 2px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30000001192092896);
    overflow: hidden;
  }
  .v2124_1278 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v2124_1279 {
    width: 100%;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 26px;
    overflow: hidden;
  }
  .v2124_1280 {
    width: 574px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 209px;
    overflow: hidden;
  }
  .v2124_1281 {
    width: 122px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 1px;
    overflow: hidden;
  }
  .v2124_1282 {
    width: 58px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2124_1283 {
    width: 135px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 103px;
    overflow: hidden;
  }
  .v2124_1284 {
    width: 87px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2124_1285 {
    width: 140px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 261px;
    overflow: hidden;
  }
  .v2124_1286 {
    width: 156px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 16px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2124_1287 {
    width: 114px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 401px;
    overflow: hidden;
  }
  .v2124_1288 {
    width: 79px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v2124_1289 {
    width: 44px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 967px;
    overflow: hidden;
  }
  .v2124_1290 {
    width: 20px;
    color: rgba(175,0,0,1);
    position: absolute;
    top: 20px;
    left: 12px;
    font-family: Font Awesome 5 Free;
    font-weight: Solid;
    font-size: 20px;
    opacity: 1;
    text-align: left;
  }
  .v2124_1291 {
    width: 138px;
    position: absolute;
    top: 10px;
    left: 65px;
    font-family: Inter;
    font-weight: Medium;
    font-size: 28px;
    opacity: 1;
    text-align: left;
  }
  .v2124_1292 {
    width: 80px;
    height: 62px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 1017px;
    overflow: hidden;
  }
  .v2124_1293 {
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 15px;
    left: 12px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    overflow: hidden;
  }
  .v2124_1294 {
    width: 9px;
    height: 9px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 28px;
    left: 51px;
    border: 4px solid rgba(183,195,199,1);
    overflow: hidden;
  }
`;
// Styled components for the profile page
const Page = styled.div`
  width: 100%;
  height: 800px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  overflow: hidden;
`;

const LinearGradient = styled.div`
  width: 100%;
  height: 182px;
  background: linear-gradient(rgba(1, 72, 28, 1), rgba(168, 0, 0, 1));
  opacity: 1;
  position: absolute;
  top: 62px;
  left: 0px;
  overflow: hidden;
`;

const Linear = styled.div`
  width: 160px;
  height: 160px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 320px;
  left: 99px;
  border-radius: 80px;
  overflow: hidden;
`;

const UserName = styled.span`
  width: 251px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 186px;
  left: 280px;
  font-family: Arial;
  font-weight: Regular;
  font-size: 36px;
  opacity: 1;
  text-align: left;
  margin-left: 20px;
`;

const ImageContainer = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 10px;
    border-color: black;
    margin-top: 177px;
    margin-left: 100px;
    position: absolute;
  }
`;
const EditButton = styled.div`
  width: 147px;
  height: 32px;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
  position: absolute;
  top: 186px;
  right: 20px;
  border-radius: 2px;
  overflow: hidden;
`;

const EditText = styled.span`
  width: 119px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 7px;
  left: 14px;
  font-family: Arial;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: center;
`;

const Info = styled.div`
  width: 988px;
    height: 35px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 258px;
    left: 272px;
`;

const City = styled.span`
  width: 73px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 7px;
    left: 28px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
`;

const SiteIcon = styled.span`
  width: 16px;
    color: rgba(183,195,199,1);
    position: absolute;
    top: 8px;
    left: 153px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
`;

const Website = styled.span`
   width: 58px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 8px;
    left: 176px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
`;

const GitIcon = styled.div`
  width: 18px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: relative;
    top: 6px;
    left: 274px;
`;

const GitHub = styled.span`
  color: rgba(197,128,17,1);
    position: absolute;
    top: 8px;
    left: 298px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
`;

const SkillsTitle = styled.span`
  width: 922px;
    height: 33px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 303px;
    left: 337px;
    overflow: hidden;
`;

const InterestTitle = styled.div`
width: 900px;
    height: 33px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 345px;
    left: 360px;
    overflow: hidden;`;

const Skills = styled.div`
  width: 922px;
    height: 33px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 303px;
    left: 337px;
    overflow: hidden;
    display: flex; /* Utilise flexbox pour afficher les éléments sur une ligne */
    flex-direction: column;
`;

const SkillItem = styled.div`
  width: 45px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 8px;
    overflow: hidden;
    display: flex; /* Utilise flexbox pour afficher les éléments sur une ligne */
    flex-direction: column;
`;

const Interests = styled.div`
  width: 900px;
    height: 33px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 345px;
    left: 360px;
    overflow: hidden;
    display: flex; /* Utilise flexbox pour afficher les éléments sur une ligne */
    flex-direction: column;
`;

const InterestItem = styled.div`
  width: 125px;
    height: 25px;
    background: rgba(197,128,17,0.17000000178813934);
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 8px;
    overflow: hidden;
    display: flex; /* Utilise flexbox pour afficher les éléments sur une ligne */
    flex-direction: column;
`;

const Bio = styled.span`
  width: 100px;
    color: rgba(197,128,17,1);
    position: absolute;
    top: 395px;
    left: 280px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
`;

const ProfileList = styled.div`
  width: 100%;
    height: 400px;
    background: rgba(245,247,247,1);
    opacity: 1;
    position: absolute;
    top: 458px;
    left: 0px;
    overflow: hidden;
`;

const ProfileBtn = styled.div`
  width: 160px;
    height: 594px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 161px;
    left: 101px;
    overflow: hidden;
    margin-top: 20px;
`;

const PortfolioContenu = styled.span`
  width: 333px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 612px;
    left: 454px;
    font-family: Arial;
    font-weight: Regular;
    font-size: 20px;
    opacity: 1;
    text-align: center;
`;

export default Profile1;

