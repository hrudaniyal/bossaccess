import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bossdashbord from "./components/boss/Bossdashbord";
import Employeesdashbord from "./components/employees/Employeesdashbord";
import "./app.css";
import Employeelogin from "./components/employees/Employeelogin";
import Bosslogin from "./components/boss/Bosslogin";
import Employeedetails from "./components/boss/Employeedetails";
import { AuthContextProvider } from "./components/AuthContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./Notfound";
import Home from "./components/Home";
import palette from "./components/Palette";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route path="/bossdashbord/overview/:id" component={Employeedetails} />
            <Route path="/employeesdashbord" component={Employeesdashbord} />
            <Route path="/employeeslogin" component={Employeelogin} />
            <Route path="/bosslogin" component={Bosslogin} />
            <Route path="/bossdashbord" component={Bossdashbord} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/palette' component={palette}/>
            <Route exact path="/" component={Home} />
            <Route exact path='/*' component={Notfound} />
            
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
