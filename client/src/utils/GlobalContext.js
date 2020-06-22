import React, { createContext, useReducer, useContext } from "react";

const GlobalContext = createContext();
const { Providor } = GlobalContext;

const reducer = (state, action) => {

}

const GlobalProvidor = ({...props}) => {
    const [state, dispatch] = useReducer(reducer, {...props});


    return <Providor value={[state, dispatch]} {...props} />;
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export { GlobalProvidor, useGlobalContext };