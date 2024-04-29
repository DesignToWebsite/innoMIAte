import { Link } from "react-router-dom";
import Nav from "../../common/All/nav";
import HeaderBack from "../HeaderBack";
import Footer from "../../common/All/Footer";
import creator from '../../assets/icons/creator.png'
import ImageComponent from "./icon1";
import "./requestForm.css";
import AnimatedHeadings from "./effectRequest";
import { GREEN_COLOR } from "../../style/Colors";
import MyButton from "./requestButton";


const RequestForm = () => {
    
  return (
     
    <div className="tw-relative">
    {/*<HeaderBack />*/}
    <img src="/src/assets/bg_home.png" alt="background"></img>
    <img src="/src/assets/mia_header.png" alt="MIA">
        
    </img>  
    {/*<Nav />*/}
        <div className="tw-hidden md:tw-block">
        <AnimatedHeadings />
      </div>

    <div className="tw-flex tw-h-screen">
        <div className="tw-w-0 sm:tw-w-2/3"> 
            <div className="div-empty"></div>
        </div>
        <div className="tw-w-1/3 tw-pt-1 tw-bg-blue tw-flex tw-flex-col tw-justify-center">
            <div className="options-wrapper tw-px-0">
              <form id="form" className="tw-flex tw-flex-col tw-gap-0" position="absolute">
                <div >
                 <ImageComponent  src={creator} width={85} height={85} x={1060} y={208} position="relative"/>
                </div>

                <h5 id="MotivText" style={{ fontSize: '15px', top: '20px', left: '60px' }} className="text-xl mb-4" >Get ready to innovate and inspire - create your hackathon now!</h5>

                <div className="tw-flex tw-flex-col">
                    <label className="mb-1">Name:</label>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full py-2 mb-1 rounded-md border focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div className="tw-flex tw-flex-col">
                    <label className="mb-1">Host:</label>
                    <input 
                        type="text" 
                        placeholder="Host" 
                        className="w-full py-2 mb-1 rounded-md border focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div className="a tw-flex tw-flex-col">
                    <label className="mb-1">Request:</label>
                    <input 
                        type="text" 
                        placeholder="write a clear request in which you describe the Hackathon, its aim and its details"
                        className="w-full py-2 rounded-md border focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div >
                
                
                <Link to="/card0" >
                    <MyButton color={GREEN_COLOR} />
                </Link>
                
               
                </div>
              </form>
            </div>
        </div>
    </div>
    

    {/*<Footer/>*/}
</div>

 );
}
export default RequestForm;

