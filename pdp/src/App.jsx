import React, {Suspense} from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./pdpContent";

const App = () => (
    <div className="text-3xl mx-auto max-w-6xl">
        <SafeComponent>
            <Header></Header>
        </SafeComponent>
        <div className="my-10"><PDPContent></PDPContent></div>
        <Footer></Footer>
    </div>
);
ReactDOM.render(<App/>, document.getElementById("app"));
