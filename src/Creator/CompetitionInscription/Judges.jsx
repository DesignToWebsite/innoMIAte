import React, { useState } from "react";
import "./HackathonCoach.css";

const Judges = () => {
  const [requiredTags, setRequiredTags] = useState([
    "IT Experts",
    "Doctor",
    "Architects",
    "Inventor",
    "Communication Coach",
    "Socialists",
    "Artists",
    "Influencers",
    "Designers",
    "Speakers",
    "Teachers",
    "Agriculture Enginners",
  ]);

  const [pendingInvitations, setPendingInvitations] = useState([]);

  const [judgeEmail, setJudgeEmail] = useState("");

  const sendInvitation = () => {
    if (judgeEmail.trim() !== "") {
      setPendingInvitations([...pendingInvitations, judgeEmail]);
      setJudgeEmail("");
    }
  };

  const removeInvitation = (email) => {
    setPendingInvitations(
      pendingInvitations.filter((invitation) => invitation !== email)
    );
  };

  const editInvitation = (index, newEmail) => {
    const updatedInvitations = [...pendingInvitations];
    updatedInvitations[index] = newEmail;
    setPendingInvitations(updatedInvitations);
  };

  const handleEditInvitation = (index) => {
    const newEmail = prompt("Enter the new email:");
    if (newEmail !== null) {
      editInvitation(index, newEmail);
    }
  };

  return (
    <div className="coach-container">
      <div>
        <label className="bold-label" htmlFor="requiredTags">
          Required Profile Tags:
        </label>
        <div className="tags-container">
          {requiredTags.map((tag, index) => (
            <div key={index}>
              <input type="checkbox" id={`tag-${index}`} value={tag} />
              <label htmlFor={`tag-${index}`}>{tag}</label>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div>
        <label className="bold-label">Announce the need for a judge:</label>
        <div>
          <textarea
            className="announcement-textarea"
            rows="4"
            placeholder="Write a clear description for your announcement..."
          ></textarea>
        </div>
        <button
          className="announce-button"
          onClick={() => console.log("Announce button clicked")}
        >
          Announce
        </button>
      </div>

      <br />
      <br />
      <hr />

      <div>
        <label className="bold-label">Invite a Coach:</label>
        <div className="invite-coach-container">
          <input
            type="text"
            value={judgeEmail}
            onChange={(e) => setJudgeEmail(e.target.value)}
            placeholder="Enter Judge email or username"
          />
          <label className="bold-label">
            Add a comment to your invitation:
          </label>
          <input
            type="text"
            className="comment-input"
            placeholder="Add comment..."
          />
          <button className="add-button" onClick={sendInvitation}>
            Add
          </button>
        </div>
        <br />

        <div className="pending-invitations-container">
          <label className="bold-label">Pending Invitations:</label>
          {pendingInvitations.map((email, index) => (
            <div key={index} className="invitation-item">
              <span>{email}</span>
              <button
                className="edit-button"
                onClick={() => handleEditInvitation(index)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => removeInvitation(email)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div>
        <button className="save-button">Save</button>
        <button className="preview-button">Preview</button>
      </div>
    </div>
  );
};

export default Judges;
