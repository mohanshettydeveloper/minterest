import {useEffect, useState} from "react";
import MokeMonsImageList from "../../components/ImageList/MokeMonsImageList";
import {getMokeMonsByPage} from "../../Functions/GetMokeMonsByPage";

const Main = () => {
    const [allMokeMons, setAllMokeMons] = useState([]);
    const [state, setState] = useState(Date.now());
    useEffect(() => {


        loadMokeMons();
    }, []);
    const loadMokeMons = () => {
        setState(Date.now())
        const allMokeMonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=9';
        fetch(allMokeMonsUrl)
            .then(response => response.json())
            .then(results => {
                setAllMokeMons([]);
                setAllMokeMons(results.results);
            });
    };

    return (<div align='center'>
        <button type='submit' onClick={loadMokeMons}>Load Mokemons</button>
        <MokeMonsImageList allMokeMons={allMokeMons} someKey={state}/>
    </div>);
};

export default Main;