import {React, useState} from'react';
import ProgressBar from './ProgressBar';

const UpLoadForm =()=> {
    const [file , setfile]=useState(null);
    const [error , seterror]=useState(null);
    const type =["image/png","image/jpeg"];
    const changeHandle = (e)=> {
       let selected = e.target.files[0];
       
        if(selected && type.includes(selected.type))
        {
            setfile(selected);
            seterror("");
        }
        else
        {
            setfile(null);
            seterror("Please select png and jpeg");
        }
    }
    return(
        <form>
            <label>
            <input type="file" onChange={changeHandle} />
            <span>+</span>
            </label>
            <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setfile={setfile}/>}
            </div>
        </form>
    );
    
}
export default UpLoadForm;