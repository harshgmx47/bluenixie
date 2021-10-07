import React  from "react";
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import {Home} from './views/Home';
import {About} from './views/About';
import {Shop} from './views/Shop';
import {Offer} from './views/Offer';
import {Contact} from './views/Contact';
import {SignIn} from './views/SignIn';
import { SignUp } from "./views/SignUp";
import { ShoppingCart } from "./views/ShoppingCart";



 export const Routes = () => {
     return(
         <div>
             <Router>
             <Switch>
                 <Route exact path="/Home" component={Home}/>
                 <Route exact path="/About" component={About} />
                 <Route exact path="/Shop" component={Shop} />
                 <Route exact path="/Offer" component={Offer} />
                 <Route exact path="/Contact" component={Contact} />
                 <Route exact path="/SignIn" component={SignIn} />
                 <Route exact path="/SignUp" component={SignUp} />
                 <Route exact path="/ShoppingCart" component={ShoppingCart} />
                 { <Route exact path="/">
                     <Redirect to="/Home" />
                 </Route> }
             </Switch>
             </Router>
         </div>
     );
 }

 export default Routes;