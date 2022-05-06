import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Button } from "react-bootstrap";

export default function NewsCard({ news }) {
    const searchText = useSelector((state) => state.changeSearch);

    return (
        <Row className="my-3 mx-3">
            {news.filter(e => {
                if (searchText !== "") {
                    if (e.title.toLowerCase().includes(searchText.toLowerCase())) return e;
                } else {
                    return e;
                }
                return null;
            }).map((e, i) => {
                return (
                    <NewsItem
                        key={i}
                        title={e.title}
                        url={e.url}
                        urlToImage={e.urlToImage}
                    />
                );
            })}
        </Row>
    );
};

const NewsItem = ({ url, urlToImage, title }) => {
    return (
        <Col>
            <Card className="dark-mode-card" style={{ width: '18rem' }}>
                <a href={urlToImage}><Card.Img variant="top" src={urlToImage} /></a>
                <Card.Body className="dark-mode-card">
                    <a className="text-dark text-decoration-none " href={url} target="_blank" rel="noreferrer">
                        <Card.Title className="dark-mode-card" >{title}</Card.Title>
                    </a>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
