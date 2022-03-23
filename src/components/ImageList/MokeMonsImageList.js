import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useEffect, useState} from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const MokeMonsImageList = ({allMokeMonsDetail, someKey}) => {
    console.log('allMokeMonDetail',allMokeMonsDetail);
    const [itemData, setItemData] = useState([]);

    let reload = false;
    // let itemData = [];
    let nineMokeMons = [];
    const [mokeMonsCounter, setMokeMonsCounter] = useState(9);
    // console.log(allMokeMonsDetail)
    useEffect(() => {
        loadFirst9MokeMons();
    }, [someKey,reload]);

    // console.log(itemData);
    const handleInfo = (e) => {
        console.log('My info is=', e.currentTarget.value);
    }

    const handleLike = (e) => {
        console.log('I am liked=', e.currentTarget.value);
    }

    const handleDislike = (e) => {
        // console.log('I am Disliked=', e.currentTarget.value);
        const mokeMonName = e.currentTarget.value;
        for (let i = 0; i < itemData.length; i++) {
            const tempItem = itemData[i];
            if (tempItem[0].name == mokeMonName) {
                itemData.splice(i, 1);
                setItemData([...itemData]);
            }
        }
    };

    const loadNewMokeMons = (e) => {
        let tempMokeMonsCounter = 0;
        console.log('mokeMonsCounter=', mokeMonsCounter);
        if (mokeMonsCounter >= allMokeMonsDetail.length) {
            setMokeMonsCounter(0);
        }

        if (e.currentTarget.value === 'n') {
            tempMokeMonsCounter = mokeMonsCounter + 9;
            if (tempMokeMonsCounter >= allMokeMonsDetail.length) {
                tempMokeMonsCounter = 9;
                setMokeMonsCounter(0);
            }

            nineMokeMons = allMokeMonsDetail.slice(mokeMonsCounter, tempMokeMonsCounter);
        } else {
            tempMokeMonsCounter = mokeMonsCounter - 9;
            if (tempMokeMonsCounter < 0) {
                tempMokeMonsCounter = 9;
                setMokeMonsCounter(0);
            }
            nineMokeMons = allMokeMonsDetail.slice(tempMokeMonsCounter, mokeMonsCounter);
        }

        console.log('tempMokeMonsCounter=', tempMokeMonsCounter)

        console.log('nineMokeMons=', nineMokeMons);
        console.log(allMokeMonsDetail.length);
        setItemData([]);
        setItemData(nineMokeMons);
        setMokeMonsCounter(tempMokeMonsCounter);
        reload = !reload;
    };

    const loadFirst9MokeMons = () => {
        nineMokeMons = allMokeMonsDetail.slice(0, 9);
        setItemData(nineMokeMons);
        reload = !reload;
    };

    // console.log(itemData)
    return (<div>
{/*
            <div>
                <button type='submit' onClick={loadFirst9MokeMons}>Load Mokemons</button>
            </div>
*/}
            <ImageList sx={{width: 400, height: 500,}}>
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
                                value={item[0].name}
                                onClick={handleInfo}
                            >
                                <InfoIcon/>
                            </IconButton>
                            <IconButton
                                value={item[0].name}
                                onClick={handleDislike}
                            >
                                <ThumbDownIcon/>
                            </IconButton>
                            <IconButton
                                value={item[0].name}
                                onClick={handleLike}
                            >
                                <ThumbUpIcon/>
                            </IconButton>
                        </div>

                    </ImageListItem>

                ))}
            </ImageList>
            <div>
                <button type='button' value='p' onClick={loadNewMokeMons}>Load Previous</button>
                <button type='button' value='n' onClick={loadNewMokeMons}>Load Next</button>
            </div>
        </div>
    );
};

export default MokeMonsImageList;