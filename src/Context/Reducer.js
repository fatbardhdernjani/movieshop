const Reducer = (state, action) => {
    switch (action.type) {
        case "BASKET": 
            return {
                ...state,
                basket: action.payland.basket,
            };

        case "TOKEN": 
            return {
                ...state,
                token: action.payland.token,
            };
        case "LANG": 
            return {
                ...state,
                lang: action.payland.lang,
            };
            
        default:
            return state;
    }
};

export default Reducer;