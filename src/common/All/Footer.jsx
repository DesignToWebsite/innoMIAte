import styled from "styled-components";

import { RED_COLOR, GREEN_COLOR } from "../../style/Colors";
import Twitter from "../../assets/icons/Twitter.png";
import Facebook from "../../assets/icons/Facebook.png";
import Linkedln from "../../assets/icons/Linkedln.png";
import Discord from "../../assets/icons/Discord.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footerItems ">
          <div className="item">
            <div className="logo title">
              <p>
                {" "}
                inno<span>MIA</span>te{" "}
              </p>
            </div>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="title">
              <p>Hackathons</p>
            </div>
            <ul>
              <li>
                <a href="#">Browse hackathons</a>
              </li>
              <li>
                <a href="#">Explore projects</a>
              </li>
              <li>
                <a href="#">Host a hackathon</a>
              </li>
              <li>
                <a href="#">Hackathon guides</a>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="title">
              <p>Portfolio</p>
            </div>
            <ul>
              <li>
                <a href="#">Your projects</a>
              </li>
              <li>
                <a href="#">Your hackathons</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="title">
              <p>Connect</p>
            </div>
            <ul>
              <li className="social-media">
                <a href="#">
                  <img src={Twitter} alt="twitter" />
                  Twitter
                </a>
              </li>
              <li className="social-media">
                <a href="#">
                  <img src={Discord} alt="Discord" />
                  Discord
                </a>
              </li>

              <li className="social-media">
                <a href="#">
                  <img src={Facebook} alt="Facebook" />
                  Facebook
                </a>
              </li>
              <li className="social-media">
                <a href="#">
                  <img src={Linkedln} alt="Linkedlin" />
                  Linkedlin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rights">
          <p>© {new Date().getFullYear()} MIA, Inc. All rights reserved.</p>
        </div>
      </div>
    </FooterStyle>
  );
};
const FooterStyle = styled.div`
  padding: 2em 0;
  /* position: absolute;
bottom: 0; */
  /* width: 100%; */

  background: linear-gradient(to right, ${GREEN_COLOR} 20%, ${RED_COLOR});
  color: white;

  .footerItems {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    gap: 20px;
    .item {
        
      .title {
        p {
          margin-bottom: 0;
          font-weight: 500;
        }
      }
      .logo {
        font-weight: 600;
        font-size: 19px;
        color: white;
        span {
          font-weight: 600;
        }
      }
      ul {
        padding: 0;
        li {
          &.social-media{
            a{
              display: grid;
              grid-template-columns: 1fr 2fr;
            }
          }
          a {
            color: white;
            img {
              margin-right: 15px;
              height: 15px;
            }
          }
        }
      }
    }
  }

  .rights {
    p {
      text-align: center;
      padding: 20px auto;
      font-weight: 400;
    }
  }
`;
export default Footer;
