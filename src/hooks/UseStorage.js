import {useState,useEffect} from 'react';
import { ProjectStorage,ProjectFireStore,TimeStamp } from '../firebase/config';

const UseStorage=(file)=>
{
    const[progress,setprogress]=useState(0);
    const[error,seterror]=useState(null);
    const[url,seturl]=useState(null);

        useEffect(()=>
        {
            const storageRef = ProjectStorage.ref(file.name);
            const collectionRef = ProjectFireStore.collection("image");
            storageRef.put(file).on('state_change',(snap)=>
            {
                let prentage =(snap.bytesTransferred/snap.totalBytes)*100;
                setprogress(prentage);
            },
            (err)=>{seterror(err);
            },
            async()=>
            {
                const url= await storageRef.getDownloadURL();
                const CreateAt =TimeStamp();
                collectionRef.add({url,CreateAt});
                seturl(url);
            })
        },[file]);
        return {progress,error,url};
}

export default UseStorage;
