import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const LeaveGroup = ({participantId}) => {
  const navigate = useNavigate()
  const {id} = useParams()
    const handleDeleteParticipantFromGroup = async (e, idParticipant) => {
        // const url = "55"
        e.preventDefault()
        // console.log(idParticipant)
        try {
          const response = await axios.patch(
            `http://localhost:5299/api/groups/remove-participant-from-group/${idParticipant}`
          );
          if (response.data) {
            navigate(`/competition/${id}/myProject?projectDeleted`)
            // window.location.reload();
            alert("Le participant a quitté le groupe");
          }
        } catch (e) {
          console.log(e);
        }
      };
  return (
    <Leave>
  <button
      type="button"
      className="btn btn-red"
      onClick={(e) => handleDeleteParticipantFromGroup(e, participantId)}
    >
      Quitter le groupe
    </button>
    </Leave>
  
  );
};

const Leave = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-right: 15px; */
`
export default LeaveGroup;
