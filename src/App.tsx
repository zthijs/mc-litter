import type { Component } from "solid-js";
import Lampjes from "./components/Lampjes";
import { toAppLink } from "./Link";


const App: Component = () => {
  return (<>
    <Lampjes/>
    <div style={{margin: "auto","text-align": "center", "justify-content" : "center"}}>
    <h1 style={{"margin-top" : "10vh", position : "absolute", width : "100vw", overflow : "hidden"}}>Waarom moeilijk doen als het makkelijk kan?</h1>
    <div style={{"margin-top" : "25vh", width : "100vw", position : "absolute" , "text-align" : "center"}} class="wrapper">
    {
      Array.apply(null, Array(23)).map((_,i)=>{
        return <div onClick={()=>{
          window.location.replace(toAppLink(i))
        }}>&#10052; Game {i + 1}</div>
      })
    }
    </div>

    <h1 style={{"margin-top" : "80vh", position : "absolute", width : "100vw", overflow : "hidden"}}>Super challenges</h1>
    <div style={{"margin-top" : "95vh", "padding-bottom" : "40px", width : "100vw", position : "absolute" , "text-align" : "center"}} class="wrapper">
    {
      Array.apply(null, Array(10)).map((_,i)=>{
        return <div onClick={()=>{
          window.location.replace(toAppLink(i + 24))
        }}>&#10052; Challenge {i + 1}</div>
      })
    }
    </div>
    </div>
    </>
  );
};

export default App;
