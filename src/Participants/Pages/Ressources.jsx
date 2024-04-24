import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../data/data.json'; // Importez le fichier JSON contenant les données

const Ressources = () => {
  const [ressources, setRessources] = useState([]);

  useEffect(() => {
    // Mettez à jour l'état des ressources avec les données importées
    setRessources(data.competition[0].ressources);
  }, []);

  return (
    <RessourcesContainer>
      <Title>Ressources</Title>
      {ressources.map((resource, index) => (
        <Resource key={index}>
          <ResourceDescription>
            {resource.description}{' '}
            <ResourceLink href={resource.url} target="_blank">
              {resource.title}
            </ResourceLink>
          </ResourceDescription>
        </Resource>
      ))}
    </RessourcesContainer>
  );
}

const RessourcesContainer = styled.div`
  padding: 20px;
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

export default Ressources;
