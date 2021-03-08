import React from "react";

import queryString from "query-string";
import { authApi } from "../../providers/api";

const AuthRoute = ({ children }) => {
    const qString = queryString.parse(window.location.search);

    if (qString.code) {
        authApi.getToken({
            code: qString.code,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        }).then(({ data }) => {
            window.location = `${(localStorage.getItem('REDIRECT_URL') || 'edit')}`
            if (data.token) {
                window.localStorage.setItem('accessToken', data.token)
            }
        });
    }

    if (!qString.code && !window.localStorage.getItem('accessToken')) {
        window.localStorage.setItem("REDIRECT_URL", "/edit");
        window.location.href = process.env.AUTH_HOST;
    };

    return <React.Fragment>{children}</React.Fragment>
};

export default AuthRoute;