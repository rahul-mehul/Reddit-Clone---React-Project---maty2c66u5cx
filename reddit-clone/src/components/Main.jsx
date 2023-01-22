import React from "react";
import '../styles/Main.css'
import Header from "./Header";
import Post from "./Post";

export const Main = () => {
    return (
        <div className="Main">
            <Header />
            <hr />
            <Post />
        </div>
    )
}