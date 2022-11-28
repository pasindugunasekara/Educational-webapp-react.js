import "./App.css"
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Header from "./components/comom/heading/Header";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>

        </Switch>
      </Router>
    </>
  )
}
export default App