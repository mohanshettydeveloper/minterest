import {useEffect, useState} from "react";
import MokeMonsImageList from "../../components/ImageList/MokeMonsImageList";
import {loadMokeMonsDetailArr} from "../../Functions/GetMokeMonDetails";
import makeStyles from "@mui/styles/makeStyles";
import Header from "../../components/Header/Header";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";

const useStyles = makeStyles({
    button: {
        background: 'yellow',
        textAlign: 'center',
        fontFamily: 'verdana',
        fontWeight: 'bolder',
    },

});
const Main = () => {
    const classes = useStyles();
    const [allMokeMonsSummary, setAllMokeMonsSummary] = useState([]);
    const [allMokeMonsDetail, setAllMokeMonsDetail] = useState([]);
    // let allMokeMonsDetail = [];
    // let allMokeMonsSummary = [];

    const [state, setState] = useState(Date.now());

    useEffect(() => {
        setAllMokeMonsSummary([]);
        setAllMokeMonsDetail([]);
        loadAllMokeMonsSummary();
    }, []);


    const loadAllMokeMonsSummary = () => {
        setState(Date.now())
        const allMokeMonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        fetch(allMokeMonsUrl)
            .then(response => response.json())
            .then(results => {
                setAllMokeMonsSummary([]);
                setAllMokeMonsSummary(results.results);
                // allMokeMonsSummary = [...allMokeMonsSummary, results.results];
                // console.log(allMokeMonsSummary);
            });
        setAllMokeMonsDetail([])
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

    return (<div align='center'>
        <div><Header/></div>
        <div>
            <Button variant="contained" type='submit' className={classes.button} onClick={loadAllMokeMonsSummary}>Load Mokemons</Button>
            <MokeMonsImageList allMokeMonsDetail={allMokeMonsDetail} someKey={state}/>
            {/*<button type='button' onClick={loadNewMokeMons('p')}>Load Previous</button>*/}
        </div>
    </div>);
};

export default Main;