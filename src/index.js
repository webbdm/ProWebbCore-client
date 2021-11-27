import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";


import App from "./App";
import Store from "./Store";

ReactDOM.render(
  <Store>
    <Auth0Provider
      domain={`${process.env.AUTH_DOMAIN}`}
      clientId={`${process.env.AUTH_CLIENT_ID}`}
      redirectUri={`${window.location.origin}/edit`}
    >
      <App />
    </Auth0Provider>
  </Store>,
  document.getElementById("app")
);

module.hot.accept();
