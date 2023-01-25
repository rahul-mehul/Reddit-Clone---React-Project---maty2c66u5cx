import React from "react";
import { useState } from "react";
import '../styles/Main.css'
import Header from "./Header";
import Post from "./Post";

export const Main = () => {

    const [log, setLog] = useState({ auth: false })

    function loginHandler() {
        setLog({ auth: !log.auth })
    }
    return (
        <div className="Main">
            <Header login={loginHandler} status={log.auth} />
            {log.auth === false ? !(<Post />) : (<Post />)}
        </div>
    )
}