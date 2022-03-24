import './App.css';
import Main from "./pages/Main/Main";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import {Provider} from "react-redux";
import store from "./store";
function App() {
    const rootElement = document.getElementById("root");
    return (
        <>
            <Provider store={store}>
            <BrowserRouter>
            <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/gallery" component={Gallery}/>
            </Switch>
            </BrowserRouter>
            </Provider>
        </>
    )
        ;
}

export default App;
