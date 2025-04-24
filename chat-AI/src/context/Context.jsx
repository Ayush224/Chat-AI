import { createContext, useState } from "react";
import getAnswer from "../API/GeminiAPI";



export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recPrompt, setRecPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const delay = (index, nextWord) => {
    setTimeout(function () {
        setData(prev => prev+nextWord)
    }, 75*index)
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {
    setData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
        response = await getAnswer(prompt);
        setRecPrompt(prompt);
    }else {
        setPrevPrompt(prev => [...prev, input]);
        setRecPrompt(input);
        response = await getAnswer(input);
    }

    let resArray = response.split("**");
    let newResponse = '';

    for (let i = 0; i < resArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += resArray[i];
      } else {
        newResponse += resArray[i];
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>")
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delay(i, nextWord+" ");        
    }

    setLoading(false);
    setInput("");
  };

  // onSent("what is javasript")

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecPrompt,
    recPrompt,
    showResult,
    loading,
    data,
    input,
    setInput,
    newChat,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
