import styled from "styled-components";

const RegisterCompetition = () => {
  return (
    <Register>
      <div className="register">
        <h2>Inscrivez-vous à ce hackathon.</h2>
        <button className="btn btn-red">Rejoignez le hackathon</button>
      </div>
    </Register>
  );
};

const Register = styled.div`
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
