import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import baseroute from "../baseroute";

import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Footer from "./footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Header />
            <Router onChange={handleRoute}>
                <Route path={`${baseroute}/`} component={Home} />
                <Route
                    path={`${baseroute}/profile/`}
                    component={Profile}
                    user="me"
                />
                <Route
                    path={`${baseroute}/profile/:user`}
                    component={Profile}
                />
                <NotFoundPage default />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
