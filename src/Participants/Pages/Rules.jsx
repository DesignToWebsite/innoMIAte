import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';

const Rules = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    // Fonction pour charger les règles depuis le fichier data.json
    setRules(data.competition[0].rules);
  }, []);

  return (
    <RulesContainer>
      <Title>Rules</Title>
      {rules.map((rule, index) => (
        <Rule key={index}>
          <RuleTitle>{rule.title}</RuleTitle>
          <RuleContent>{rule.content}</RuleContent>
        </Rule>
      ))}
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Rule = styled.div`
  margin-bottom: 20px;
`;

const RuleTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const RuleContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export default Rules;
// "galleryPublished": false,
    // "videos": [],
    // "photos": []