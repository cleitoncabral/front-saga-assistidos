import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './Loading.module.css'

const Loading = () => {
  return (  
    
    <div className="flex justify-center align-middle h-full w-full">
      <AiOutlineLoading3Quarters className="loading-icon w-7 h-7" />
    </ div>
  );
}
 
export default Loading;