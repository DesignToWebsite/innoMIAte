import styled from "styled-components"



const CompInfoOverview = ({data})=>{
    return(
        <Info>
             <div className="info">
            <h1>{data.title}</h1>
            <h3>{data.smallDescription}</h3>
            <div className="whoCanParticipate">
              <p>Qui peut participer</p>
              <div className="items">
                <ul>
                  <li>- 18 ans et plus seulement</li>
                  <li>- Tous les pays/territoires</li>
                </ul>
              </div>
              <a  href="#">Voir le règlement complet</a>
            </div>
            <button className="btn btn-red">Rejoignez le hackathon</button>
          </div>
        </Info>
    )
}

const Info = styled.div`
    .info {
    /* padding: 2em 1em; */
    h3 {
      font-size: 1.4em;
    }
    .whoCanParticipate {
        padding-top: 15px;
      p {
        font-size: 15px;
      }
      .items {
        /* width: 80%; */
        ul {
          font-size: 15px;
          display: flex;
          flex-wrap: wrap;
          li{
            margin-right: 5em;
          }
          /* justify-content: space-around; */
        }
      }
      
    }
    .btn{
        margin-top: 1.5em;
        margin-bottom: 2em;
      }
  }
`

export default CompInfoOverview