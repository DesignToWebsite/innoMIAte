import SignIn from "../../common/login/SignIn";

const ModelCreateParticipant = () => {
  return (
    <div
      class="modal fade"
      id="addParticipantModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addParticipantModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Add participant
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <SignIn confirmation={true} />
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default ModelCreateParticipant