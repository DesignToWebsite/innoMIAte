import React from "react";
import "./HackathonInfo.css";
import { GREEN_COLOR } from "../../style/Colors";
function HackathonInfo() {
  const tags = [
    "AI",
    "Robotics",
    "Problem Solving",
    "CyberSecurity",
    "Entreprise",
    "Medecine",
    "Social Good",
    " Art",
    "Photography",
    "Public Speacking",
    "Web",
    "Education",
    "BlockChain",
    "IoT",
    "Animation",
    "Design",
  ];
  const rows = [...Array(Math.ceil(tags.length / 4))].map((_, index) =>
    tags.slice(index * 4, index * 4 + 4)
  );

  return (
    <div>
      <div className="form-container">
      <h4 style={{ color: GREEN_COLOR, textAlign: 'center', lineHeight: '4em', marginBottom:'1px'}}>Hackathon Steps\Hackathon Info:</h4>

        <form>
          <div className="form-group">
            <label className="bold-label" style={{ color: GREEN_COLOR }}>
              Nom:
            </label>
            <input
              type="text"
              placeholder="Entrez le nom de votre compétition"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="bold-label" style={{ color: GREEN_COLOR }}>
              Description:
            </label>
            <textarea
              placeholder="Entrez une description claire à propos de votre Hackathon"
              className="form-textarea"
            ></textarea>
          </div>

          <div className="form-group">
            <label className="bold-label" style={{ color: GREEN_COLOR }}>
              Contributeurs:
            </label>
            <input
              type="text"
              placeholder="Entrez le contributeur de Hackathon"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="bold-label" style={{ color: GREEN_COLOR }}>
              e-mail du responsable:
            </label>
            <input
              type="email"
              placeholder=" Entrez le nom de l'organisation hébergeant le Hackathon"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="bold-label" style={{ color: GREEN_COLOR }}>
              Tags du thème:
            </label>
            <div className="tags-container">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="tag-row">
                  {row.map((tag, tagIndex) => (
                    <div key={tagIndex} className="tag">
                      <input
                        type="checkbox"
                        id={`tag-${rowIndex}-${tagIndex}`}
                      />
                      <label htmlFor={`tag-${rowIndex}-${tagIndex}`}>
                        {tag}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <div className="inline-group">
              <label
                className="bold-label"
                style={{
                  color: GREEN_COLOR,
                  marginBottom: "1em",
                  marginLeft: "0em",
                  display: "block",
                  marginBottom: "1em",
                  marginRight: "25em",
                }}
              >
                Date:
              </label>
              <input
                type="date"
                className="form-input"
                style={{ marginLeft: "0em", width: "27em" }}
              />
            </div>
            <div className="inline-group">
              <label
                style={{
                  color: GREEN_COLOR,
                  marginBottom: "1em",
                  marginLeft: "0em",
                  display: "block",
                  marginBottom: "1em",
                }}
              >
                Timing:
              </label>
              <input
                type="time"
                className="form-input"
                style={{ mmarginLeft: "2em", width: "27em" }}
              />
            </div>
          </div>

          <div className="form-group">
            <label
              className="bold-label"
              style={{
                color: GREEN_COLOR,
                marginBottom: "1em",
                display: "block",
              }}
            >
              <b>Hackathon target:</b>
            </label>
            <div className="constraint-options">
              <input
                type="radio"
                id="student"
                name="background"
                style={{ margin: "12px" }}
              />
              <label htmlFor="student">University</label>

              <input
                type="radio"
                id="professional"
                name="background"
                style={{ margin: "12px" }}
              />
              <label htmlFor="professional"> High School</label>

              <input
                type="radio"
                id="everyone"
                name="background"
                style={{ margin: "12px" }}
              />
              <label htmlFor="everyone">Primary School </label>

              <input
                type="radio"
                id="everyone"
                name="background"
                style={{ margin: "12px" }}
              />
              <label htmlFor="everyone">Professionals </label>
              <br />
              <input
                type="radio"
                id="everyone"
                name="background"
                style={{ marginLeft: "11em", marginTop: "2em", margin: "12px" }}
              />
              <label htmlFor="everyone">Open For Everyone </label>
            </div>
          </div>

          <div className="form-group">
            <div className="inline-group">
              <label
                className="bold-label"
                style={{
                  color: GREEN_COLOR,
                  marginBottom: "1em",
                  display: "block",
                }}
              >
                URL:
              </label>
              <input
                placeholder="InnoMiate.ma/----"
                type="url"
                className="form-input"
                style={{ width: "27em" }}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="inline-group">
              <label
                className="bold-label"
                style={{
                  color: GREEN_COLOR,
                  marginLeft: "6em",
                  display: "block",
                  marginBottom: "1em",
                }}
              >
                Photo:
              </label>
              <input
                type="file"
                className="form-input"
                style={{ marginLeft: "6em", width: "20em" }}
              />
            </div>
            <div className="inline-group">
              <label
                className="bold-label"
                style={{
                  color: GREEN_COLOR,
                  marginLeft: "6em",
                  display: "block",
                  marginBottom: "1em",
                }}
              >
                Couverture:
              </label>
              <input
                type="file"
                className="form-input"
                style={{ marginLeft: "6em", width: "20em" }}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              type="button"
              className="btn"
              style={{ width: "6em", marginLeft: "11em" }}
            >
              Next
            </button>
            <button type="button" className="btn">
              Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HackathonInfo;
