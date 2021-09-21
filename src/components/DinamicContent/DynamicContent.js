import React from "react";
import Spinner from "../Spinner/Spinner";

export default function DynamicContent({isLoading, children}) {

    return (
        <>
            {isLoading
                ? <Spinner />
                : [children]
            }
        </>
    );
}
