import React, { useState } from 'react';
import styled from 'styled-components';

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);
  const [emailNotification, setEmailNotification] = useState(false);

  return (
    <DiscussionContainer>
      <DiscussionColumn>
        <Header>
          <NewDiscussionButton>Post a new discussion topic</NewDiscussionButton>
        </Header>
        
        {discussions.length === 0 ? (
          <NoTopics>No topics have been created yet.</NoTopics>
        ) : (
          <DiscussionList>
            {/* Afficher les discussions */}
          </DiscussionList>
        )}
        <LookingForTeammate>
          If you're looking for a teammate, <a href="#teammate">it's over here</a>.
        </LookingForTeammate>
      </DiscussionColumn>

      <NotificationColumn>

        <NotificationContainer>
          <input
            type="checkbox"
            checked={emailNotification}
            onChange={(e) => setEmailNotification(e.target.checked)}
          />
          <label>Email me when new discussions are added</label>
        </NotificationContainer>
      </NotificationColumn>
    </DiscussionContainer>
  );
}

const DiscussionContainer = styled.div`
  display: flex;
`;

const DiscussionColumn = styled.div`
  flex: 1;
  padding: 20px;
`;

const NotificationColumn = styled.div`
  width: 300px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;


const NewDiscussionButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #AF0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NoTopics = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DiscussionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LookingForTeammate = styled.p`
  font-size: 16px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
  }
`;

const NotificationContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 12px;
    margin-left: 10px;
    margin-top: 1px;
  }
`;

export default Discussions;
