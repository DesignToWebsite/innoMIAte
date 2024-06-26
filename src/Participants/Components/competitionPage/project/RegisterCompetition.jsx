import styled from "styled-components";
import { PADDING_BIG_SCREEN, PADDING_SMALL_SCREEN } from "../../../../style/Padding";
import { useNavigate } from "react-router";

const RegisterCompetition = () => {
  const navigate = useNavigate()
  const handleSignUp = (e)=>{
    e.preventDefault()
    navigate("/login")
  }
  return (
    <Register>
      <div className="register">
        <h2>Inscrivez-vous à ce hackathon.</h2>
        <button onClick={handleSignUp} className="btn btn-red">Rejoignez le hackathon</button>
      </div>
    </Register>
  );
};

const Register = styled.div`
 padding:${PADDING_BIG_SCREEN};
    @media (max-width : 425px) {
      padding:${PADDING_SMALL_SCREEN};

    }
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #d9d9d9;
    width: fit-content;
    margin: auto;
    padding: 2em 4em;
    border-radius: 5px;
   
  }
`;

export default RegisterCompetition;
