export const loadMokeMonsDetailArr = (allDetails, counter) => {
    let itemData = [];
    itemData.push({
        key: allDetails.name,
        name: allDetails.name,
        front: allDetails.sprites.front_default,
    });
    return itemData;
};


;