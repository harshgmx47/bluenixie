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
import { WishList } from "./views/WishList";
import { Product } from "./views/Product";
import MiddleBanner from "./views/Slider/MiddleBanner";
import Order from "./views/Order/Order";



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
                 <Route exact path="/WishList" component={WishList} />
                 <Route exact path="/Product" component={Product} />
                 <Route exact path="/MiddleBanner" component={MiddleBanner} />
                 <Route exact path="/Order" component={Order} />
                 
                 { <Route exact path="/">
                     <Redirect to="/Home" />
                 </Route> }
             </Switch>
             </Router>
         </div>
     );
 }

 export default Routes;