import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';

const App: React.FC = () => (
  <Layout style={{ height: "100vh"}}>
  <Router>
    <Sidebar />
    <Switch>
      <Route path="/menu/:category">
        <Menu />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="/">
        <Redirect to="/orders"/>
      </Route>
    </Switch>
  </Router>
  </Layout>
);

function Menu() {
  return <h2>Menu</h2>;
}

function Orders() {
  return <h2>Orders</h2>;
}

export default App;