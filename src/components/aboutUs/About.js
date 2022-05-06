import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";
import AboutUs from "./AboutUs.md";

export default function About() {
  const [content, setContent] = useState("");

  useEffect(() => {
    document.title = "News Page - About";

    fetch(AboutUs)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Container className="dark-mode-card w-100 news-cont">
      <ReactMarkdown children={content} />
    </Container>
  );
};
