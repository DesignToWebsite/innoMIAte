import React, { useState } from "react";
import styled from "styled-components";
import { GREEN_COLOR, RED_COLOR } from "../../../style/Colors";
import deleteIcon from "../../../assets/dashboard_competition/delete.png"


const MAX_FILE_SIZE_MB = 5; // Max file size in MB
const ACCEPTED_FORMATS = ["image/jpeg", "image/png", "image/gif"]; // Accepted formats

const Image_drag_drop = () => {
    // State to store uploaded images
    const [uploadedImages, setUploadedImages] = useState([]);

    // Function to handle file drop
    const handleFileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        handleFiles(files);
    };

    // Function to handle file selection via input
    const handleFileSelect = (e) => {
        const files = e.target.files;
        handleFiles(files);
    };

    // Function to handle file validation and adding files to state
    const handleFiles = (files) => {
        const validImages = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            // Check file format and size
            if (
                ACCEPTED_FORMATS.includes(file.type) &&
                file.size <= MAX_FILE_SIZE_MB * 1024 * 1024
            ) {
                validImages.push(file);
            } else {
                // Display an error message for invalid files (optional)
                console.error(
                    `File ${file.name} is not an accepted format or is too large.`
                );
            }
        }
        if (validImages.length > 0) {
            setUploadedImages((prevImages) => [...prevImages, ...validImages]);
        }
    };

    // Function to handle image deletion
    const handleDeleteImage = (index) => {
        setUploadedImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    };

    // Render the component
    return (
        <DragAndDropContainer
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <p>Drag and drop your images here, or</p>
            <ChooseFileButton htmlFor="fileInput">Choose Files</ChooseFileButton>
            <input
                type="file"
                id="fileInput"
                accept={ACCEPTED_FORMATS.join(",")}
                onChange={handleFileSelect}
                multiple
                style={{ display: "none" }} // Hide the input
            />
            {uploadedImages.length > 0 && (
                <UploadedImagesContainer>
                    <h4>Uploaded Images:</h4>
                    <ImageList>
                        {uploadedImages.map((file, index) => (
                            <ImageItem key={index}>
                                {/* Display image name with ellipsis if too long */}
                                <ImageName title={file.name}>
                                    {file.name.length > 15
                                        ? file.name.slice(0, 15) + "..."
                                        : file.name}
                                </ImageName>
                                {/* Delete button */}
                                <DeleteButton onClick={() => handleDeleteImage(index)}>
                                    <img src={deleteIcon} alt="" />
                                </DeleteButton>
                            </ImageItem>
                        ))}
                    </ImageList>
                </UploadedImagesContainer>
            )}
        </DragAndDropContainer>
    );
};

const DragAndDropContainer = styled.div`
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    width: 100%;
    /* width: 300px; */
    margin: auto;
    margin-bottom: 2em;

    p {
        margin: 0;
        margin-bottom: 10px;
        font-size: 14px;
    }
`;

const ChooseFileButton = styled.label`
    display: inline-block;
    padding: 10px 15px;
    background-color: ${GREEN_COLOR}; 
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
`;

const UploadedImagesContainer = styled.div`
    margin-top: 10px;
`;

const ImageList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const ImageItem = styled.li`
    background-color: #f0f0f0; // Background color for the image item
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const ImageName = styled.span`
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DeleteButton = styled.button`
    /* background-color: ${RED_COLOR}; */
    color: white;
    
    border: none;
    /* border-radius: 50%; */
    cursor: pointer;
    padding: 4px 6px;
    font-size: 11px;
    img{
        width: 20px;
        /* height: 10px; */
    }
`;

export default Image_drag_drop;
