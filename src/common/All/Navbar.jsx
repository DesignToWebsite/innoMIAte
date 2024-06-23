import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { RED_COLOR, GREEN_COLOR } from '../../style/Colors';

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // State for navbar collapse

  const connectedUser = JSON.parse(localStorage.getItem('user'));
  const [isLogged, setIsLogged] = useState(connectedUser);

  // Function to toggle navbar collapse
  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const logout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    toggleNavCollapse()
    navigate('/login');
  };

  return (
    <NavStyle className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <div className="logo">
            inno<span>MIA</span>te{' '}
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavCollapse} // Toggle collapse on button click
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={toggleNavCollapse}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={toggleNavCollapse}>
                Hackathons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={toggleNavCollapse}>
                Create Hackathons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={toggleNavCollapse}>
                About Us
              </a>
            </li>
            {connectedUser?.isAcceuil && (
              <li className="nav-item">
                <a className="nav-link" href="/confirmation/1" onClick={toggleNavCollapse}>
                  Confirmation
                </a>
              </li>
            )}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="btns">
              {isLogged ? (
                <>
                  <button className="btn">
                    <Link to="/profile" onClick={toggleNavCollapse}>
                      Profile
                    </Link>
                  </button>
                  <button onClick={logout} className="login">
                    Se déconnecter
                  </button>
                </>
              ) : (
                <>
                  <button className="login">
                    <Link to="logIn" onClick={toggleNavCollapse}>
                      SE CONNECTER
                    </Link>{' '}
                  </button>
                  <button className="signUp">
                    <Link to="/signUp" onClick={toggleNavCollapse}>
                      S'INSCRIRE
                    </Link>
                  </button>
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
          color: white !important;
        }
      }
    }
  }

  .navbar-toggler {
    box-shadow: none;
  }

  /* Ensure space between navbar items */
  #navbarSupportedContent {
    justify-content: space-between;
  }
`;

export default Navbar;
