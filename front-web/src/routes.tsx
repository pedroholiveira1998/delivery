import { BrowserRouter, Route, Switch } from "react-router-dom";
import Orders from './pages/Orders/index';
import Home from './pages/Home/index';
import Navbar from './components/Navbar/Navbar'

function Routes() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Switch>
                <Route exact path ="/" component = { Home }/>
                <Route path ="/orders" component = { Orders }/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;