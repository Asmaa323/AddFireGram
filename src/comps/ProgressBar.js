import {React} from 'react';
import UseStorage from '../hooks/UseStorage';
import { motion } from "framer-motion";
const ProgressBar =({file , setfile})=>
{
    const {url,progress}=UseStorage(file);
    console.log(progress,url);
    return(
        <div className="progress-bar" initial={{width:0}} animate= {{width:progress + "%"}}>
            
        </div>
        
        
    );
}

export default ProgressBar;