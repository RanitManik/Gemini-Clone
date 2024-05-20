import {createContext, useState} from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState("");
    const [prevPrompts, setPrevPrompts] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState({});

    const onSent = async () => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompts(input);
        const response = await run(input);
        setResultData(response);
        setLoading(false);
        setInput("");
    }

    // onSent("what is ReactJS")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompts,
        recentPrompts,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;