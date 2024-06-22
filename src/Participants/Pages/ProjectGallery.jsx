import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube'; // Import the react-youtube library
import data from '../../data/data.json'; // Import the data from data.json
import { PADDING_BIG_SCREEN, PADDING_SMALL_SCREEN } from '../../style/Padding';

const ProjectGallery = ({data}) => {

  // const [videos, setVideos] = useState([]);
  // const [photos, setPhotos] = useState([]);
  // const [isPublished, setIsPublished] = useState(false);

  // useEffect(() => {
  //   // Extract videos and photos from data.json
  //   const { videos, photos, galleryPublished } = data.competition[0];
  //   setVideos(videos);
  //   setPhotos(photos);
  //   setIsPublished(galleryPublished);
  // }, []);

  return (
    <GalleryContainer>
            <Title>Gallery</Title>

      {/* {!isPublished ? (
        <Message>The hackathon managers haven't published this gallery yet, but hang tight!</Message>
      ) : (
        <>
          <VideosContainer>
            {videos.map((video, index) => (
          <iframe width="560" height="315" key={index} src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            ))}
          </VideosContainer>
          <PhotosContainer>
            {photos.map((photo, index) => (
              <Photo key={index} src={photo.url} alt={photo.title} />
            ))}
          </PhotosContainer>
          <div>

          </div>
        </>
      )} */}
      {
        data.gallery ? 
        <div>
          {data.gallery?.map((item, key)=>{
            return(
              <img key={key} src={item} alt="" />
            )
          })}
        </div> : "empty"
      }
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
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
