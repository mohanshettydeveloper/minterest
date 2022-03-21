export const loadMokeMonsDetailArr = (allDetails, counter) => {
    // console.log('counter value from load function=', counter);
    let itemData = [];
    itemData.push({
        key: counter,
        name: allDetails.name,
        front: allDetails.sprites.front_default,
    });
    return itemData;
};


;