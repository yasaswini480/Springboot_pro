import './App.css';
import React  from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeesList from './components/EmployeesList';
import { BrowserRouter as Router ,Route, Switch } from "react-router-dom";
import CreateEmp from './components/CreateEmp';
import Updateempcomp from './components/Updateempcomp';
import Viewemp from './components/Viewemp';

function App() 
{
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component = {EmployeesList}></Route>
          <Route path="/employees" component = {EmployeesList}></Route>
          <Route path="/add-emp/:id" component = {CreateEmp}></Route>     
          <Route path="/view-emp/:id" component = {Viewemp}></Route>          
             
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
