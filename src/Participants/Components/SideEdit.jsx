import React, {useState} from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ORANGE_COLOR } from "../../style/Colors";
import ProfileInfo from "./ProfileInfo";
import data from "../../data/data.json";
import PreferenceEligibility from "./PreferenceEligibility";
import Password from "./Password";
import AccountPrivacy from "./AccountPrivacy";

const SideEdit = () => {
    const user = data.user;
  const location = useLocation();
  const [activePage, setActivePage] = useState("ProfileInfo")

  return (
    <Edit>
        <SidebarContainer>
        <Title>Portefeuille</Title>
        <LinkList>
            <StyledLink onClick={(e) => {
                        e.preventDefault();
                        setActivePage("ProfileInfo");
                    }}
                    className={activePage == "ProfileInfo" ? "active" : ""}
                    to="/profile/edit/ProfileInfo"
                    >
            Informations de profile
            </StyledLink>
        </LinkList>

        <Title>Recommandations pour le hackathon</Title>
        <LinkList>
            <StyledLink onClick={(e) => {
                        e.preventDefault();
                        setActivePage("PreferenceEligibility");
                    }}
                    className={activePage == "PreferenceEligibility" ? "active" : ""}
                    to="/profile/edit/preferences-eligibility">
            Préférences et éligibilité
            </StyledLink>
        </LinkList>

        <Title>Gestion de compte</Title>
        <LinkList>
            <StyledLink onClick={(e) => {
                        e.preventDefault();
                        setActivePage("AccountPrivacy");
                    }}
                    className={activePage == "AccountPrivacy" ? "active" : ""}
                    to="/profile/edit/account-privacy">
            Compte et confidentialité
            </StyledLink>
            <StyledLink onClick={(e) => {
                        e.preventDefault();
                        setActivePage("Password");
                    }}
                    className={activePage == "Password" ? "active" : ""}
                    to="/profile/edit/password">
            Mot de passe
            </StyledLink>
        </LinkList>
        </SidebarContainer>
        <Content>
            {
                activePage=="ProfileInfo" ? (
                <ProfileInfo user={user}/>
                ) : (
                ""
                )
            }
            {
                activePage=="PreferenceEligibility" ? (
                <PreferenceEligibility user={user}/>
                ) : (
                ""
                )
            }
            {
                activePage=="PreferenceEligibility" ? (
                <PreferenceEligibility user={user}/>
                ) : (
                ""
                )
            }
            {
                activePage=="Password" ? (
                <Password user={user}/>
                ) : (
                ""
                )
            }
            {
                activePage=="AccountPrivacy" ? (
                <AccountPrivacy user={user}/>
                ) : (
                ""
                )
            }
        </Content>
    </Edit>
  );
};

const Edit = styled.div`
    display: flex;
    flex-direction: row;
`;


const SidebarContainer = styled.div`
  background: white;
  padding: 20px;
  width: 80vw;
  height: 80vh;
  margin-top: 40px;
  margin-left: 30px;
`;

const Title = styled.h3`
  color: #adadad;
  font-size: 14px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  font-size: 15px;
  margin-left: 10px;
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${props => props.isActive ? "black" : "${ORANGE_COLOR}"};
  text-decoration: none;
  margin-bottom: 5px;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    background-color: #d8d6d6;
    color: #192325;
    padding-top: 5px;
    padding-left: 4px;
    width: 20vw;
    height: 5vh;
}
`;

const Content = styled.div`
    margin-right: 30px;
    width: 150vw;
`;

export default SideEdit;
