import styled from "styled-components";
import mia_header from "../../../assets/mia_header.png";
import bg from "../../../assets/bg_home.png";
import arrow from "../../../assets/arrow.png";
import { Link } from 'react-router-dom';

const Header_Home = () => {
  return (
    <>
    <Bg>
        <img src={bg} alt="background" />
      </Bg>
      <Header>
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-md-7 my-5 my-md-1 order-2 order-md-1">
            <div className="description">
              <h1>Bienvenue chez InnoMIATe :</h1>
              <p>Votre destination ultime pour les hackathons et les compétitions</p>
              <p className="loi">
              Nous collectons les informations dans le respect de la loi 09-08  { }
                <a href="https://www.dgssi.gov.ma/sites/default/files/legislative/brochure/2023-07/loi%2009-08.pdf">
                 Notre politique de données</a>
              </p>
              <div className="btns">
                <Link to="./index" className="btn btn-green">
                  <p>Pour les organisateurs</p>
                  <p className="icon">
                    <img src={arrow} alt="go to the organizers page" />
                  </p>
                </Link>
                <Link to="/competitions" className="btn btn-red">
                  <p>Pour les participants</p>
                  <p className="icon">
                    <img src={arrow} alt="go to the participants page" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-md-5 order-1 order-md-2">
            <div className="image">
              <img src={mia_header} alt="MIA" />
            </div>
          </div>
        </div>
      </div>
    </Header>
    </>
   
  );
};
const Bg = styled.div`
    position: absolute;
    width: 100vw ;
    height: 70vh;
    /* top: 0; */
    right: 0;
    left: 0;
    z-index: -1;
    img{
      width: 100%;
    }
  
`
const Header = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  .loi{
    color: rgb(58, 58, 58);
  }
  .description {
   
    h1 {
      font-size: 2.5em;
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding: 0; */
      /* width: 100%; */
      padding: 15px;
      min-width: 250px;
      margin-bottom: 15px;
      @media  (max-width: 555px) {
        width: 100%;
    }
      p{
        padding: 0;
        margin: 0;
      }
      
    }
  }
  .image{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btns{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;
export default Header_Home;
