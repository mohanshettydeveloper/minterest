const INITIAL_STATE = {
    name: '',
    selectedMokeMons: []
}

export default (state = INITIAL_STATE, action={}) => {
    switch(action.type) {
        case "SET_DATA":
            return {
                ...state,
                ...action.content
            };
        default:
            return state;
    }
};