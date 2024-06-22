import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { marked } from 'marked';
import { PADDING_BIG_SCREEN, PADDING_SMALL_SCREEN } from '../../style/Padding';

const Resources = ({data}) => {

  
// console.log(data)
  return (
    <ResourcesContainer>
      <Title>Resources</Title>
     {data.resource? 
          <div
          dangerouslySetInnerHTML={{ __html: marked(data.resource) }}
          /> : 'No ressource'
      }
    </ResourcesContainer>
  );
}

const ResourcesContainer = styled.div`
  /* padding: 20px; */
  padding:${PADDING_BIG_SCREEN};
    @media (max-width : 425px) {
      padding:${PADDING_SMALL_SCREEN};

    }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Resource = styled.div`
  margin-bottom: 10px;
`;

const ResourceDescription = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;
`;

const ResourceLink = styled.a`
  font-size: 16px;
  color: #f0ad4e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Resources;
