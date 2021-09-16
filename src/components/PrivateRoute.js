import { Route, Redirect } from "react-router-dom";
import React from "react";

export default function PrivateRoute ({component: Component, isAuthorized, fallbackUrl, ...rest}) {
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    return isAuthorized
                        ? <Component {...props} />
                        : <Redirect to={{pathname: fallbackUrl, state: {from: props.location}}} />
                }
            }
        />
    )
}