import React,{useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import Data from "./data.json"
const alankey='7446476298353e62bad05faab7ce37db2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App=()=>{
    const [newsArticles,setNewsArticles]=useState([]);
    useEffect(()=>{
     alanBtn({
        key:alankey,
        onCommand:({command,articles})=>{
            if(command==='newHeadLines'){
                 console.log(articles)
                 setNewsArticles(articles)
            }
        }
     })
    },[])
    return(
        <div>
            <div style={{textAlign:"center",padding:"5rem"}}>
            <img style={{width:"15rem",margin:"auto"}} src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64f5aad0cbdbf0b7d248f4aa_alan%20ai_1.webp"  alt="logo" />
            </div>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}
export default App