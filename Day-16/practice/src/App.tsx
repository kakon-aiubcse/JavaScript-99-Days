
import './App.css'

function App() {
  let name = "";

  if(name){
    return(
      <>
      
        <h1>
          Welcome {name}
        </h1>
      </>
    )
  }else{
    return (<>
    Hello World;
    </>)
  }

 
}

export default App
