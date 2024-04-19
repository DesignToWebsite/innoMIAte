import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../data/data.json'; // Importer les données depuis data.json

const ProjectGallery = () => {
  const [videos, setVideos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    // Extraire les vidéos et les photos à partir de data.json
    const { videos, photos, galleryPublished } = data.competition;
    setVideos(videos);
    setPhotos(photos);
    setIsPublished(galleryPublished);
  }, []);

  return (
    <GalleryContainer>
      {!isPublished ? (
        <Message>The hackathon managers haven't published this gallery yet, but hang tight!</Message>
      ) : (
        <>
          <VideosContainer>
            {videos.map((video, index) => (
              <Video key={index} src={video.url} controls />
            ))}
          </VideosContainer>

          <PhotosContainer>
            {photos.map((photo, index) => (
              <Photo key={index} src={photo.url} alt={photo.title} />
            ))}
          </PhotosContainer>
        </>
      )}
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div`
  padding: 20px;
`;

const Message = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Video = styled.video`
  max-width: 100%;
`;

const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 10px;
`;

const Photo = styled.img`
  max-width: 100%;
  height: 100%;
`;

export default ProjectGallery;
