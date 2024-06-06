import styled from "styled-components";
import { GREEN_COLOR, RED_COLOR } from "../../style/Colors";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import InProgress from "../All/InProgress";

const SignIn = () => {
  const navigate = useNavigate();
  const [inProgress, setInProgress] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    setInProgress(true);
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userName = firstName + "_" + lastName;
    const user = {
      firstName,
      lastName,
      userName,
      email,
      password,
    };

    const url = "http://localhost:5299/api/User";
    try {
      const response = await axios.post(url, user);
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      setInProgress(false);
      console.error(error);
    }

    // }, []);
  };

  return (
    <SignUp>
      <div className="desc">
        <h1>
          Rejoindre{" "}
          <span className="logo">
            Inno<span className="red">MIA</span>té
          </span>
        </h1>
        <p>
          Rejoignez Trouvez et participez à des hackathons pour améliorer vos
          compétences et gagner des prix
        </p>
        <form onSubmit={handleSignUp}>
          <div className="item">
            <label htmlFor="firstName">Nom</label>
            <input
              placeholder="Nom"
              type="text"
              name="firstName"
              id="firstName"
              required
            />
          </div>
          <div className="item">
            <label htmlFor="lastName">Prenom</label>
            <input
              placeholder="Prenom"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="item">
            <label htmlFor="password">Mot de passe</label>
            <input
              placeholder="Mot de passe"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          {inProgress ? (
            <InProgress />
          ) : (
            <button type="submit" className="submit btn btn-red">
              Sign up
            </button>
          )}
        </form>
        <div className="terms">
          <p>
            Vous avez déjà un compte? <Link to="/login">Se connecter</Link>
          </p>
          <p>
            En créant un compte, vous acceptez{" "}
            <a href="#">nos conditions d'utilisation</a> et{" "}
            <a href="#">notre politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </SignUp>
  );
};

const SignUp = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin: 2em auto;
  
  .logo {
    font-weight: 600;
    color: ${GREEN_COLOR};
    span.red {
      color: ${RED_COLOR};
      font-weight: 600;
    }
  }
  h1 {
    margin: 1em 0;
    text-align: center;
  }
  p {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 2em auto;
    .item {
      display: grid;
      grid-template-columns: 1fr 3fr;
      margin: 10px 0;
      label {
        margin-right: 10px;
        padding: 5px;
      }
      input {
        padding: 5px 10px;
        border-radius: 5px;
        background: #eeeeee;
      }
    }
    .submit {
      margin: 2em 0 0 0;
    }
  }
  .terms p {
    font-size: 15px;
    color: #676767;
  }
`;

export default SignIn;
