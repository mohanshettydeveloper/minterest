import Header from "../../components/Header/Header";
import mokemon from "../../components/Mokemon/Mokemon";
import {useEffect, useState} from "react";
import MokeMonsImageList from "../../components/ImageList/MokeMonsImageList";
import {loadMokeMonsDetailArr} from "../../Functions/GetMokeMonDetails";


const Main = () => {

        const allMokeMonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

        const [mokeMonsResponse, setMokeMonsResponse] = useState([]);

        let itemData = [];

        useEffect(() => {

            fetch(allMokeMonsUrl)
                .then(response =>
                    response.json()
                )
                .then(results => {
                    setMokeMonsResponse(results.results);
                });

        }, []);

    const fetchMokeMonsDetails = () => {
        const eachMokeMonsUrl = `https://pokeapi.co/api/v2/pokemon/` + counter;
        fetch(eachMokeMonsUrl)
            .then(response =>
                response.json()
            )
            .then(async allDetails => {
                itemData.push(await loadMokeMonsDetailArr(allDetails, counter));
            });

    };

    let counter = 0;
        mokeMonsResponse.forEach((mokeMon) => {
                counter++;
                fetchMokeMonsDetails(counter);
            }
        )
        ;

        return (
            <div align='center'>
                <MokeMonsImageList itemData={itemData}/>
            </div>
        );
    }
;

export default Main;