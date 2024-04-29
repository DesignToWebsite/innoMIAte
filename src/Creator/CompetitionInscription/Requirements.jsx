import React from "react";
import "./HackathonRequirements.css";
import { GREEN_COLOR } from "../../style/Colors";

function Requirements() {
  return (
    <div className="requirements-container">
            <h4 style={{ color: GREEN_COLOR, textAlign: 'center', lineHeight: '4em',  marginBottom:'1px'}}>Hackathon Steps\Hackathon Requirments:</h4>

      <div className="form-group">
        <label
          style={{ color: GREEN_COLOR, marginBottom: "1em", display: "block" }}
        >
          <b>Age de Participant:</b>
        </label>
        <div className="inline-group">
          <label> min: </label>
          <input type="number" className="age-input" />
          <label> max: </label>
          <input type="number" className="age-input" />
        </div>
      </div>

      <div className="form-group">
        <label
          style={{ color: GREEN_COLOR, marginBottom: "1em", display: "block" }}
        >
          <b>Background Constraints:</b>
        </label>
        <div className="constraint-options">
          <input type="radio" id="student" name="background" />
          <label htmlFor="student">Only for students</label>

          <input type="radio" id="professional" name="background" />
          <label htmlFor="professional">Only for professionals</label>

          <input type="radio" id="everyone" name="background" />
          <label htmlFor="everyone">For everyone</label>
        </div>
      </div>

      <div className="form-group">
        <label style={{ color: GREEN_COLOR }}>
          <b>Geographic Constraints</b>:
        </label>
        <div className="constraint-options">
          <input
            type="radio"
            id="online"
            name="geographic"
            style={{ marginLeft: "5em" }}
          />
          <label htmlFor="online" style={{ color: GREEN_COLOR }}>
            Online
          </label>

          <input type="radio" id="inMorocco" name="geographic" />
          <label htmlFor="inMorocco">In Morocco</label>

          <input type="radio" id="global" name="geographic" />
          <label htmlFor="global" style={{ color: GREEN_COLOR }}>
            Global
          </label>
        </div>
      </div>

      <div className="form-group">
        <label
          style={{ color: GREEN_COLOR, marginBottom: "0em", marginTop: "1em" }}
        >
          <b>Local in specific Country:</b>
        </label>
        <select className="country-select">
          <option value="USA">USA</option>
        </select>
      </div>

      <div className="form-group">
        <label style={{ color: GREEN_COLOR, marginBottom: "1em" }}>
          <b>Local in specific City:</b>
        </label>
        <select className="city-select">
          <option value="Casablanca">Casablanca</option>
        </select>
      </div>

      <div className="form-group">
        <label
          style={{ color: GREEN_COLOR, marginBottom: "1em", display: "block" }}
        >
          <b>Restricted Material:</b>
        </label>
        <input
          type="text"
          placeholder="Entrez les matériaux nécessaires..."
          className="material-input"
        />
        <button className="add-button" style={{ marginLeft: "1em" }}>
          Ajouter
        </button>
      </div>

      <div className="form-group">
        <label
          style={{ color: GREEN_COLOR, marginBottom: "1em", display: "block" }}
        >
          <b>Inclusion Specifications:</b>
        </label>
        <div className="constraint-options">
          <input type="radio" id="context" name="inclusion" />
          <label htmlFor="context">Context for girls talents</label>

          <input type="radio" id="noGender" name="inclusion" />
          <label htmlFor="noGender">No gender specification</label>
        </div>
      </div>

      <div className="form-groups">
        <button className="save-button">Save</button>
        <button className="preview-button">Preview</button>
      </div>
    </div>
  );
}

export default Requirements;
