import { React } from "react";
import  UseFirestore  from "../hooks/UseFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({setselectIning}) =>
{
    const { doc } = UseFirestore('image');
    console.log(doc);

    return(

        <div className="Image-grid">
        {doc && doc.map(doc=>(
                      <motion.div className="imag-warp" key={doc.id}
                      layout
                      whileHover={{opacity:1}}
                onClick={()=>setselectIning(doc.url)}
                >
                <img src={doc.url} alt="Uploaded pic"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{opacity:1}} />
            
                    </motion.div>
                    ))}
        </div>
    );
}
export default ImageGrid;
