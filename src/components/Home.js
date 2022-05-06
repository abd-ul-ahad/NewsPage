import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import NewsCard from "./NewsCard"
import FakeApi from "./FakeApi.txt"

export default function Home() {
    const key = process.env.REACT_APP_API;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;
    // url = FakeApi;

    const [news, setNews] = useState([]);

    useEffect(() => {
        document.title = "News Page";
        try {
            fetch(url)
                .then(response => response.json())
                .then(data => setNews(data.articles))
        } catch (e) {
            console.log(`Error: ${e}`);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="news-cont">
            <NewsCard news={news} />
            <hr className="hr-dark-mode" />
        </Container>
    )
};
