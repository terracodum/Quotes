import Header from "./Header.tsx";
import Page from "./Page.tsx";
import "./App.css"

const API = "https://api.quotable.io/"


function App() {

  return (
    <>
      <Header headling="Home"/>
      <Page  />
    </>
  )

}

export default App;