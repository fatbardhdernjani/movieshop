import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    lang: localStorage.getItem("lang") || "sq",
    token: localStorage.getItem("token"),
    basket: localStorage.getItem("basket") ? (
        JSON.parse(localStorage.getItem("basket"))
    ) : [],
};

const Products = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);

export default Products;