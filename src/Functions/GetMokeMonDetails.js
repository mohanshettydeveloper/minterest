export const loadMokeMonsDetailArr = (allDetails, counter) => {
    // console.log('counter value from load function=', counter);
    let itemData = [];
    itemData.push({
        key: counter,
        name: allDetails.name,
        front: allDetails.sprites.front_default,
        weight: allDetails.weight,
        height: allDetails.height,
        base_experience: allDetails.base_experience,

    });
    return itemData;
};


;