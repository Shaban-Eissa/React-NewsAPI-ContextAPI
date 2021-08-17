import React,{useContext} from 'react'
import NewArticle from './NewArticle';
import {NewsContext} from '../NewsContext'

function News(props) {
    const {data} = useContext(NewsContext);
    return (
        
        <div>
            <h1 className="head__text">News App 👋</h1>
            <div className="all__news">
            {data ? data.articles.map(news => (
                <NewArticle data={news} key={news.url}  />
            )) : ""}
        </div>
        </div>
    )
}

export default News
