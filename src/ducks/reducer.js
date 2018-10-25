

const initialState={
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    imageUrl:'',
    mortgage:0,
    rent: 0,
}



const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "UPDATE_STEP_ONE":
        return {
            ...state,
            name: actions.payload.name,
            address: actions.payload.address,
            city: actions.payload.city,
            state: actions.payload.state,
            zip: actions.payload.zip

        };
        default: return state
    }
};

export default reducer;