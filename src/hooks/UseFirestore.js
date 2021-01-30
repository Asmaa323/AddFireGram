import { React, useEffect, useState } from "react";
import { ProjectFireStore } from '../firebase/config';


const UseFirestore =(collection)=>
{
    const [doc,setdoc]=useState([]);

    useEffect( () =>
    {
     const unsub=  ProjectFireStore.collection(collection)
            .orderBy('CreateAt','desc')
        .onSnapshot((snap)=>{
            let document = [];
            snap.forEach( doc=> { 
                document.push({...doc.data(),id: doc.id});
            });
            setdoc(document);
                
            });
            return()=>unsub();

    },[collection])

    return {doc};
}

export default UseFirestore;
