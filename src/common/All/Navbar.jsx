import styled from "styled-components";
import searchIcon from "../../assets/icons/search_icon.png";
import { RED_COLOR, GREEN_COLOR } from "../../style/Colors";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// const Navbar = () => {
//   const navigate = useNavigate()
//   const [isLogged, setIsLogged] = useState(false);
//   const connectedUser = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     setIsLogged(localStorage.getItem("user"));
//   }, [navigate]);
//   const logout = async (e)=>{
//     e.preventDefault()
//     localStorage.clear()
//     // alert("Log out successfully")
//     navigate("/login")
//   }
//   // console.log(connectedUser)
//   return (
//     <NavStyle>
//       <nav class="navbar  navbar-light navbar-expand-md">
//         <div class="container">
//           <Link to="/" class="navbar-brand" href="#">
//             <div className="logo">
//               inno<span>MIA</span>te
//             </div>
//           </Link>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div
//             class="collapse navbar-collapse m-auto "
//             id="navbarSupportedContent"
//           >
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <Link
//                   to="/"
//                   class="nav-link active"
//                   aria-current="page"
//                   href="#"
//                 >
//                   Home
//                 </Link>
//               </li>
//               {/* <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Hackathons
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Create Hackathons
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   About Us
//                 </a>
//               </li> */}
//               {connectedUser?.isAcceuil &&
//                 <li class="nav-item">
//                 <a class="nav-link" href="/confirmation/1">
//                   Confirmation
//                 </a>
//               </li> }
//             </ul>
//             <div className="btns">
//               <button className="search">
//                 <img src={searchIcon} alt="search icon" />
//               </button>
//               {isLogged ? (
//                 <>

//                 <button  className="btn">
//                   <Link to="/profile">Profile</Link>
//                 </button>
//                   <button onClick={logout} className="login">
//                    Se déconnecter
//                 </button>
//                 </>

//               ) : (
//                 <>
//                   <button  className="login">
//                     <Link to="logIn">SE CONNECTER</Link>{" "}
//                   </button>
//                   {/* <button className="signUp">
//                     <Link to="/signUp">S'INSCRIRE</Link>
//                   </button> */}
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//     </NavStyle>
//   );
// };

const Navbar = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const connectedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLogged(localStorage.getItem("user"));
  }, [navigate]);
  const logout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    // alert("Log out successfully")
    navigate("/login");
  };
  // console.log(connectedUser)
  return (
    <NavStyle className="container">
      <nav class="navbar navbar-expand-md navbar-light ">
        <Link class="navbar-brand" to="/">
          <div className="logo">
            inno<span>MIA</span>te{" "}
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            {connectedUser?.isAcceuil && (
              <li class="nav-item">
                <a class="nav-link" href="/confirmation/1">
                  Confirmation
                </a>
              </li>
            )}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div className="btns">
              
              {isLogged ? (
                <>
                  <button className="btn">
                    <Link to="/profile">Profile</Link>
                  </button>
                  <button onClick={logout} className="login">
                    Se déconnecter
                  </button>
                </>
              ) : (
                <>
                  <button className="login">
                    <Link to="logIn">SE CONNECTER</Link>{" "}
                  </button>
                  {/* <button className="signUp">
                     <Link to="/signUp">S'INSCRIRE</Link>
                   </button> */}
                </>
              )}
            </div>
          </form>
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
    color: ${RED_COLOR} !important;
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
        a {
          color: white;
        }
      }
    }
  }
  button.navbar-toggler {
    box-shadow: none;
  }
  div#navbarSupportedContent {
    justify-content: space-between;
  }
`;

export default Navbar;
