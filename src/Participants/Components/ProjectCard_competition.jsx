import styled from "styled-components"

const ProjectCard_competition = ({data})=>{
    return(
        <ProjectCard>
            <div className="project">
        <div className="img">
          <img src={data.img} alt="" />
        </div>
        <div className="info">
          <div className="projectName">
            <h5>{data.name} </h5>
          </div>
          <div className="projectDescription">
            <p>{data.description}</p>{" "}
          </div>
          <div className="team">
            <div className="img-team">
            {data.team.map((img, index) => {
              return (
                <div
                className="circle"
                style={{position:"absolute",  left: index * 20 }}
                key={index}
              >
                <img src={img} alt={`Image ${index + 1}`} />
              </div>
              )
              
            })}
            </div>

            
            { window.location.href.includes("competition") &&
              <a href="#">Gérer l'équipe</a>
            }
          </div>
          
        </div>
      </div>
        </ProjectCard>
    )
}

const ProjectCard = styled.div`
     .project {
    width: 300px;
    border: 1px solid #b7c3c7;
    position: relative;
    .img img {
      height: 200px;
    }
    .info {
      padding: 10px;
      h5 {
        font-weight: 600;
      }
    }
    .team {
      /* display: flex; */
      position: relative;
      padding-bottom: 2em;
      a{
        text-align: end;
        display: flex;
        align-items: end;
        justify-content: end;
        z-index: 100;
      }
      .img-team{
        max-width: 60%;
        overflow: hidden;
        .circle{
            width: 40px;
            img{
                border-radius: 50%;

            }
        }
      }
        
      
    }
  }

`


export default ProjectCard_competition