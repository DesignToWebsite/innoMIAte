import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';
import { marked } from 'marked';

const Rules = ({data}) => {
  

  return (
    <RulesContainer>
      <Title>Rules</Title>
      {data.rules? <div
          dangerouslySetInnerHTML={{ __html: marked(data.rules) }}
          /> : 'Empty'}
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