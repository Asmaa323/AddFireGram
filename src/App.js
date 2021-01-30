import { React, useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Model from "./comps/Model";
import Title from './comps/Title';
import UpLoadForm from './comps/UpLoadForm';

function App() {
  const [selectIng,setselectIning]=useState(null);
  return (
    <div>
     <Title/>
     <UpLoadForm />
     <ImageGrid setselectIning={setselectIning} />
    {selectIng&&<Model selectIng={selectIng} setselectIning={setselectIning}/>}
     </div>
  );
}

export default App;
