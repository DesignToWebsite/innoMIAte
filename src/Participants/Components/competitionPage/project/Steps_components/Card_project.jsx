import styled from "styled-components";
import no_image from "../../../../../assets/no_image.png";

const Card_project = ({ dataCard, setDataCard, setSelectedFile = null }) => {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (setSelectedFile) setSelectedFile(file);
    if (file) {
      setDataCard((prevData) => ({
        ...prevData,
        img_save : file
     }))
      const reader = new FileReader();
      reader.onloadend = () => {
        setDataCard((prevData) => ({
          ...prevData,
          img: reader.result, // Stocker l'image encodée en base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <div className="cardInfo">
        <div className="card">
          <div className="img">
            <img src={dataCard.img ? dataCard.img : no_image} alt="" />
          </div>
          <div className="info">
            <div className="projectName">
              <h5>{dataCard.name} </h5>
            </div>

            <div className="projectDescription">
              <p>{dataCard.description}</p>{" "}
            </div>
            
          </div>
        </div>

        <label className="btn btn-green" htmlFor="uploadImage">
          Modifier la miniature
        </label>
        <input
          type="file"
          id="uploadImage"
          name="uploadImage"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }} // Caché mais associé au label
        />
        <p className="rules">
          Format JPG, PNG ou GIF, taille de fichier maximale de 5 Mo. Pour de
          meilleurs résultats, utilisez un rapport de 3:2.
        </p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  max-width: 400px;
  .cardInfo {
    display: flex;
    flex-direction: column;
    .img img {
      height: 200px;
      width: 100%;
      border-bottom: 2px solid #dadadab5;
    }
    .projectName {
     margin-bottom: 0;
     padding-bottom: 0;
     
      border-bottom: 2px solid #dadadab5;
      h5 {
        font-weight: bold;
        margin: 1em 0.5em;
        margin-bottom: .2em;
      }
    }
    .projectDescription {
      font-size: 17px;
      font-weight: 500;
      margin: .8em .5em;
    }
    .btn {
      width: fit-content;
      margin: 1em auto;
    }
    p.rules {
      font-size: 15px;
      padding: 10px;
      max-width: 300px;
      color: #969696;
    }
  }
`;

export default Card_project;
