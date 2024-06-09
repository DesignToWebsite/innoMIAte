import styled from "styled-components";
import { GREEN_COLOR, RED_COLOR } from "../../style/Colors";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import InProgress from "../All/InProgress";

const LogIn = () => {
  const navigate = useNavigate();
  const [inProgress, setInProgress] = useState(false);
  const [error, setError] = useState(null)
  const handleLogin = async (e) => {
    e.preventDefault();
    setInProgress(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const credential = {
      email,
      password,
    };

    const url = `http://localhost:5299/api/Auth/login?email=${encodeURIComponent(
      email
    )}&password=${encodeURIComponent(password)}`;
    // console.log(url);
    try {
      const response = await axios.post(
        "http://localhost:5299/api/User/login",
        credential
      );
      // console.log(response.data);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      setInProgress(false);
      console.error(error);
      setError("Erreur");
    }
  };

  return (
    <SignUp>
      <div className="desc">
        <h1>
          Connectez-vous à{" "}
          <span className="logo">
            Inno<span className="red">MIA</span>té
          </span>
        </h1>

        <form onSubmit={handleLogin}>
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
              Se connecter
            </button>
          )}
          {
            error && <p className="error">{error}</p>
          }
        </form>
        <div className="terms">
          <p>
            Nouveau sur InnoMIAté ? <Link to="/signUp">Créer un compte</Link>
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

export default LogIn;
