import { React } from "react";
import { motion } from "framer-motion";

const Model=({selectIng,setselectIning})=>
{
    const HandClick=(e)=>
    {
        if(e.target.classList.contains("backdrop"))
        {
            setselectIning(null);
        }
    }
    return(
    <motion.div className="backdrop" onClick={HandClick}
    initial={{opacity:0}}
    animate={{opacity:1}}>
        <img src={selectIng} alt="enlarger pict"
         initial={{y:"-100vh"}}
         animate={{y:0}}/>

    </motion.div>
    );
}
export default Model;
