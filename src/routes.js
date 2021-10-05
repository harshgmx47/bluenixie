import React  from "react";
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import {Home} from './views/Home';
import {About} from './views/About';
import {Shop} from './views/Shop';
// import {Slider} from './views/Slider/Slider';
import {Slider} from './views/Slider';
import App from './App';
//import { NavBar } from "./NavBar";


 export const Routes = () => {
     return(
         <div>
             <Router>
             <Switch>
                 <Route exact path="/App" component ={App} />
                 <Route exact path="/Home" component={Home}/>
                 <Route exact path="/Slider"  component={Slider} />
                 { <Route exact path="/">
                     <Redirect to="/App" />
                 </Route> }
                 <Route exact path="/About" component={About} />
                 <Route exact path="/Shop" component={Shop} />
             </Switch>
             </Router>
         </div>
     );
 }

 export default Routes;