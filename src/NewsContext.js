import React ,{createContext, useEffect, useState} from 'react'
import axios from 'axios'
export const NewsContext = createContext() ;

export const NewsContextProvider = (props) => {
    const [data , setData] = useState();
    const APIKey = '28d6580ec988458394f38a21a78c429c'

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-08-17&sortBy=popularity&apiKey=${APIKey}`)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    } ,[data])
    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
}

