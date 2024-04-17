import styled from "styled-components";
import mia_header from "../../assets/mia_header.png";
import bg from "../../assets/bg_home.png";
import arrow from "../../assets/arrow.png";
const Header_Home = () => {
  return (
    <>
    <Bg>
        <img src={bg} alt="background" />
      </Bg>
      <Header>
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <div className="description">
              <h1>Welcome to InnoMIATé:</h1>
              <p>Your Ultimate Destination for Hackathons and Cometitions</p>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <button className="btn btn-green">
                    <p>For organizers</p>
                    <p className="icon">
                      <img src={arrow} alt="go to the organizers page" />
                    </p>
                  </button>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                <button className="btn btn-red">
                  <p>For participants</p>
                  <p className="icon">
                    <img src={arrow} alt="go to the participants page" />
                  </p>
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
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
    img{
      width: 100%;
    }
  
`
const Header = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  
  .description {

    h1 {
      font-size: 2.5em;
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding: 0; */
      width: 100%;
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
`;
export default Header_Home;