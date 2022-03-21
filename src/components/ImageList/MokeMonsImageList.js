import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useEffect, useState} from "react";
import {loadMokeMonsDetailArr} from "../../Functions/GetMokeMonDetails";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Grid} from "@mui/material";

const MokeMonsImageList = ({allMokeMons, someKey}) => {
    const [itemData, setItemData] = useState([])

    let counter = 0;

    useEffect(() => {
        setItemData([]);
        allMokeMons.forEach(() => {
            counter++;
            fetchMokeMonsDetails(counter);
        });

    }, [someKey]);
    const fetchMokeMonsDetails = (counter) => {
        const eachMokeMonsUrl = `https://pokeapi.co/api/v2/pokemon/` + counter;
        fetch(eachMokeMonsUrl)
            .then(response => response.json())
            .then(allDetails => {

                setItemData(itemData => [...itemData, loadMokeMonsDetailArr(allDetails, counter)]);
            });
    };
    const handleLike = () => {
        console.log('I am liked');
    }

    const handleDisLike = () => {
        console.log('I am Disliked');
    }


    return (<ImageList sx={{width: 400, height: 500,}}>
        <ImageListItem key="Subheader" cols={3}>
            <ListSubheader component="div"><h2>Mokemons</h2></ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (<ImageListItem key={item[0].key}>
                <img
                    src={`${item[0].front}?w=100&&auto=format`}
                    srcSet={`${item[0].front}?w=100&auto=format`}
                    alt={item[0].name}
                    loading="lazy"
                />

                <h4>{item[0].name.toUpperCase()}</h4>
                <div>
                    <IconButton
                        onClick={handleDisLike}
                    >
                        <InfoIcon/>
                    </IconButton>
                    <IconButton
                        onClick={handleLike}
                    >
                        <ThumbUpIcon/>
                    </IconButton>
                </div>


            </ImageListItem>

        ))}
    </ImageList>);
};

export default MokeMonsImageList;