import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";

const App: React.FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    (async function login() {
      if (!isLoading && !isAuthenticated) {
        await loginWithRedirect();
      }
    })();
  }, [isLoading]);

  if (isLoading) {
    return <p>loading</p>;
  }

  return isAuthenticated ? (
    <Layout style={{ height: "100vh" }}>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/menu/:category" component={Menu} />
          <Route path="/orders" component={Orders} />
          <Route exact path="/">
            <Redirect to="/orders" />
          </Route>
        </Switch>
      </Router>
    </Layout>
  ) : null;
};

function Menu() {
  return <h2>Menu</h2>;
}

const Orders: React.FC = () => {
  const { logout } = useAuth0();
  return <h2 onClick={() => logout()}>Orders</h2>;
};

export default App;
