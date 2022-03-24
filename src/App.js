import './App.css';
import Main from "./pages/Main/Main";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";

function App() {
    const rootElement = document.getElementById("root");
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/gallery" component={Gallery}/>
                </Switch>
            </BrowserRouter>
        </>
    )
        ;
}

export default App;
