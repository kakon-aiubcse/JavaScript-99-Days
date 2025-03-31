import "./App.css";
import Newcomponent from "./component/Click";
import "./component/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let name = "kakon";

  if (name) {
    return (
      <>
        
      <Newcomponent>
        <h1>Hello {name} Click here to check data. </h1>
      </Newcomponent>
      </>
    );
  } else {
    return <>Hello World;</>;
  }


}

export default App;
