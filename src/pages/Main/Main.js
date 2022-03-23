import {useEffect, useState} from "react";
import MokeMonsImageList from "../../components/ImageList/MokeMonsImageList";
import {getMokeMonsByPage} from "../../Functions/GetMokeMonsByPage";
import {loadMokeMonsDetailArr} from "../../Functions/GetMokeMonDetails";

const Main = () => {
    const [allMokeMonsSummary, setAllMokeMonsSummary] = useState([]);
    const [allMokeMonsDetail, setAllMokeMonsDetail] = useState([]);
    // let allMokeMonsDetail = [];
    // let allMokeMonsSummary = [];

    const [state, setState] = useState(Date.now());

    useEffect(() => {
        loadAllMokeMonsSummary();
        // loadAllMokeMonsDetail();
    }, []);

    const loadAllMokeMonsSummary = () => {
        setState(Date.now())
        const allMokeMonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
        fetch(allMokeMonsUrl)
            .then(response => response.json())
            .then(results => {
                setAllMokeMonsSummary([]);
                setAllMokeMonsSummary(results.results);
                // allMokeMonsSummary = [...allMokeMonsSummary, results.results];
                // console.log(allMokeMonsSummary);
            });
        loadAllMokeMonsDetail();
    };

    const loadAllMokeMonsDetail = () => {
        allMokeMonsSummary.forEach(() => {
            counter++;
            fetchMokeMonsDetails(counter);
        });
    };

    let counter = 0;
    const fetchMokeMonsDetails = (counter) => {
        const eachMokeMonsUrl = `https://pokeapi.co/api/v2/pokemon/` + counter;
        fetch(eachMokeMonsUrl)
            .then(response => response.json())
            .then(allDetails => {
                setAllMokeMonsDetail(allMokeMonsDetail => [...allMokeMonsDetail, loadMokeMonsDetailArr(allDetails, counter)]);
                // allMokeMonsDetail = [...allMokeMonsDetail, loadMokeMonsDetailArr(allDetails, counter)];
            });
    };

    // console.log(allMokeMonsDetail);

    return (<div align='center'>
        <button type='submit' onClick={loadAllMokeMonsSummary}>Load Mokemons</button>
        <MokeMonsImageList allMokeMonsDetail={allMokeMonsDetail} someKey={state}/>
        {/*<button type='button' onClick={loadNewMokeMons('p')}>Load Previous</button>*/}

    </div>);
};

export default Main;