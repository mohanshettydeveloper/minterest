import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useEffect, useState} from "react";


const MokeMonsImageList = ({itemData}) => {

    useEffect(() => {

    },[itemData]);
    return (
        <ImageList sx={{width: 400, height: 700,}}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div"><h2>Mokemons</h2></ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item[0].key}>
                    <img
                        src={`${item[0].front}?w=100&&auto=format`}
                        srcSet={`${item[0].front}?w=100&auto=format&dpr=2 4x`}
                        alt={item[0].name}
                        // loading="lazy"
                    />
                    <ImageListItemBar
                        style={{height:37}}
                        title={item[0].name.toUpperCase()}
                        subtitle={item[0].name}
                        actionIcon={
                            <IconButton
                                sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                aria-label={`info about ${item[0].name}`}
                            >
                                <InfoIcon/>
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default MokeMonsImageList;