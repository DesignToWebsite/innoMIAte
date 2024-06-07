import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ModelCreateParticipant from "../components/ModelCreateParticipant";
import axios from "axios";

const Confirmation = () => {
  const [isConfirmed, setIsConfirmed] = useState(true);
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const handleConfirmation = async (e) => {
    e.preventDefault();
  };
  const handleEdit = async (e) => {
    e.preventDefault();
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    // navigate("/confirmation/addParticipant")
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const url = `http://localhost:5299/api/User`;
      try {
        const response = await axios.get(url);
        if (response?.data) setUsers(response.data.$values);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUsers();
  }, []);
  console.log(users)
  return (
    <ConfirmationStyle className="container">
      <div className="title">
        <h2>Reception</h2>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add participant
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>University</th>
            <th>Leader</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users ?
            users.map((user) => {
              return (
                <tr>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>....</td>
                  <td>
                    <input type="checkbox" name="leader" id="leader" />
                  </td>
                  <td>
                    {!isConfirmed && (
                      <button
                        onClick={handleConfirmation}
                        className="btn btn-green"
                      >
                        Confirmation
                      </button>
                    )}
                    {isConfirmed && (
                      <button onClick={handleEdit} className="btn btn-green">
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              );
            }) : 
            <p>no user exist</p>
        }
        </tbody>
      </table>
      <ModelCreateParticipant />
    </ConfirmationStyle>
  );
};

const ConfirmationStyle = styled.div`
  table {
    width: 100%;
    margin: 2em 0;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  tr:hover {
    background-color: #ddd;
  }
  .title {
    caption-side: top;
    font-size: 1.5em;
    margin: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Confirmation;
