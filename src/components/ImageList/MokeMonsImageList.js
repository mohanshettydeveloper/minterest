import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useEffect, useState} from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import makeStyles from "@mui/styles/makeStyles";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLikedMokeMons} from '../../selectedMokeMonsSlice';
import {Button} from "@mui/material";
import Modal from "@mui/material/Modal";
import BasicModal from "../Modal/BasicModal";

const useStyles = makeStyles({
    button: {
        background: 'yellow', textAlign: 'center', fontFamily: 'verdana', fontWeight: 'bolder',
    },
});
const MokeMonsImageList = ({allMokeMonsDetail, someKey}) => {

    const dispatch = useDispatch();

    const classes = useStyles();

    const [itemData, setItemData] = useState([]);

    let reload = false;

    let nineMokeMons = [];
    const [mokeMonsCounter, setMokeMonsCounter] = useState(0);

    const [selectedMokeMons, setselectedMokeMons] = useState([]);

    useEffect(() => {
        loadFirst9MokeMons();
    }, [someKey, reload, allMokeMonsDetail]);

    const handleInfo = (e) => {
        alert('I am clicked' + e.currentTarget.value);

    }

    const handleLike = (e) => {
        const mokeMonName = e.currentTarget.value;
        for (let i = 0; i < itemData.length; i++) {
            const tempItem = itemData[i];
            if (tempItem[0].name === mokeMonName) {
                selectedMokeMons.push(tempItem);
                setselectedMokeMons([...selectedMokeMons]);
            }
        }
        dispatch(setLikedMokeMons(selectedMokeMons));
    };


    const handleDislike = (e) => {
        const mokeMonName = e.currentTarget.value;
        for (let i = 0; i < itemData.length; i++) {
            const tempItem = itemData[i];
            if (tempItem[0].name === mokeMonName) {
                itemData.splice(i, 1);
                setItemData([...itemData]);
            }
        }
    };

    const loadNewMokeMons = (e) => {
        let tempMokeMonsCounter;
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
            console.log('When n mokeMonsCounter=', mokeMonsCounter)
            console.log('When n tempMokeMonsCounter=', tempMokeMonsCounter)
            nineMokeMons = allMokeMonsDetail.slice(mokeMonsCounter, tempMokeMonsCounter);
        } else {
            tempMokeMonsCounter = mokeMonsCounter - 9;
            if (tempMokeMonsCounter < 0) {
                tempMokeMonsCounter = 9;
                setMokeMonsCounter(0);
            }
            console.log('When p tempMokeMonsCounter=', tempMokeMonsCounter)
            console.log('When p mokeMonsCounter=', mokeMonsCounter)
            nineMokeMons = allMokeMonsDetail.slice(tempMokeMonsCounter, mokeMonsCounter);
        }

        setItemData([]);
        setItemData(nineMokeMons);
        setMokeMonsCounter(tempMokeMonsCounter);
        reload = !reload;

        // console.log('nineMokeMons=', nineMokeMons);
    };

    const loadFirst9MokeMons = () => {
        nineMokeMons = allMokeMonsDetail.slice(0, 9);
        setItemData(nineMokeMons);
        reload = !reload;
    };


    return (<div>
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

                        <BasicModal
                            name={item[0].name}
                        />


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
        <div style={{width: 400, display: 'flex', textAlign: 'center'}}>

            <Button variant="contained" type='button' className={classes.button} value='p' onClick={loadNewMokeMons}
                    disabled={allMokeMonsDetail.length <= 0}>
                Load Previous
            </Button>

            <Button variant="contained" type='button' className={classes.button} value='n' onClick={loadNewMokeMons}
                    disabled={allMokeMonsDetail.length <= 0}>
                Load Next
            </Button>
            <Button variant="contained" type='button' className={classes.button}
                    disabled={selectedMokeMons.length <= 0}>
                <Link to="/gallery">Gallery</Link>
            </Button>

        </div>
    </div>);
};

export default MokeMonsImageList;