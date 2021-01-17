import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import AuthorizedApolloProvider from "./providers/authorization/AuthorizedApolloProvider";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
    redirectUri={`${window.location.origin}/orders`}
  >
    <AuthorizedApolloProvider>
      <App />
    </AuthorizedApolloProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

reportWebVitals();
