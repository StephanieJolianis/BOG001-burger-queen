import '../src/css/styles.css';
// import "../src/sass/styles.scss";
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from "react";
// ----- Componentes --------
import Table from "./components/Table";
import TakingOrder from "./components/TakingOrder";
import Status from "./components/OrderStatus";
import Stock from "./components/Stock";
import Bill from "./components/Bill";
import SelectTable from "./components/SelectTable";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

const App = () => {
// const [user, setUser]= useState("");
  return (
            <div className="App">
              {/* <div>{user}</div>
              <NotFound cualquiercosa={setUser} /> */}
              <Router>
                <Switch>
                <Route path="/login" component={Login} />
                <Route path="/">
                  <Layout>
                    <Route exact path="/table" component={Table} />
                    <Route exact path="/order/:id" component={TakingOrder} />
                    <Route exact path="/status" component={Status} />
                    <Route exact path="/bill" component={Bill} />
                    <Route exact path="/selecttable" component={SelectTable} />
                    <Route exact path="/stock" component={Stock} />
                  </Layout>
                  </Route>
                  <Route path="*" component={NotFound} />
                </Switch>

              </Router> 
            </div>
  )
}

export default App;