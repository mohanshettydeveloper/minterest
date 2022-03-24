import React from 'react'
import {useSelector} from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";

const SelectedMokeMonsGallery = () => {
    const likedMokeMons = useSelector((state) => state.selectedMokeMons);
    let itemData = [];
    itemData = likedMokeMons.likedMokeMons;
    console.log('selectedMokeMons from SelectedMokeMonsGallery=', likedMokeMons.likedMokeMons);
    return (
        <div>
            <ImageList sx={{width: 400, height: 500,}}>
                <ImageListItem key="Subheader" cols={3}>
                    <ListSubheader component="div"><h2>Liked Mokemons</h2></ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (<ImageListItem key={item[0].key}>
                        <img
                            src={`${item[0].front}?w=100&&auto=format`}
                            srcSet={`${item[0].front}?w=100&auto=format`}
                            alt={item[0].name}
                            loading="lazy"
                        />
                        <h4>{item[0].name.toUpperCase()}</h4>
                    </ImageListItem>

                ))}
            </ImageList>
        </div>
    )
}

export default SelectedMokeMonsGallery;