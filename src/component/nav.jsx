import styled from "styled-components";
import searchIcon from "../icons/search_icon.png";
import { RED_COLOR, GREEN_COLOR } from "../style/Colors";
// const Nav = ()=>{
//     return(
//         <NavStyle className="container">
//             <div className="logo">
//                 inna<span>MIA</span>te
//             </div>
//             <div className="nav-links">
//                 <ul>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">Hackathons</a></li>
//                     <li><a href="#">Create Hackathons</a></li>
//                     <li><a href="#">About Us</a></li>
//                 </ul>
//             </div>
//             <div className="btns">
//                 <button className="search"><img src={searchIcon} alt="search icon" /></button>
//                 <button className="login">Log In</button>
//                 <button className="signUp">Sign Up</button>
//             </div>
//         </NavStyle>
//     )
// }

const Nav = () => {
  return (
    <NavStyle>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <div className="logo">
              inno<span>MIA</span>te
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse m-auto " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Hackathons
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Create Hackathons
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div className="btns">
              <button className="search">
                <img src={searchIcon} alt="search icon" />
              </button>
              <button className="login">Log In</button>
              <button className="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </NavStyle>
  );
};

const NavStyle = styled.div`

  .logo {
    font-weight: 600;
    font-size: 19px;
    color: ${GREEN_COLOR};
    span {
      color: ${RED_COLOR};
      font-weight: 600;
    }
  }
   
        a {
          color: ${RED_COLOR};
          font-weight: 600;
        }
  
  
  .btns {
    button {
      border: none;
      background-color: transparent;
      color: ${RED_COLOR};
      margin-left: 10px;
      padding: 5px 10px;
      font-weight: 600;
      &.signUp {
        background-color: ${RED_COLOR};
        color: white;
      }
    }
  }
  button.navbar-toggler{
    box-shadow: none;
  }
`;

export default Nav;
