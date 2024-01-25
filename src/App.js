import React,{useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
const alankey='7446476298353e62bad05faab7ce37db2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App=()=>{
    const [newsArticles,setNewsArticles]=useState([]);
    useEffect(()=>{
     alanBtn({
        key:alankey,
        // onCommand:({command,name})=>{
        //     if(command==="testCommand"){
        //         console.log(name)
        //     }
        // },
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
            <h1>Alan ai Application</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}
export default App