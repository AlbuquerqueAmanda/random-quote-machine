import React, { useState, useEffect } from "react";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const colors = ['#D80032', '#004225', '#FFB000', '#451952', '#8ECDDD', '#EDB7ED', '#A6FF96', '#952323'];


function App() {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    
    const changeBackgroundColor = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };
  
    const bodyStyle = {
      backgroundColor: colors[currentColorIndex],
      transition: 'background-color 0.5s ease', 
    };

const apiUrl = "https://api.quotable.io/random";
const fetchRandomQuote = () => {
fetch(apiUrl)
.then((response) => response.json())
.then((data) => {
    setQuote(data.content);
    setAuthor(data.author);
})
};

useEffect(() => {
    fetchRandomQuote();
}, []);

const handleNewQuoteClick = () => {
    changeBackgroundColor();
    fetchRandomQuote();
  };
  
    return (
        <div id="body" style={bodyStyle}>
            <div id="quote-box">
            <div id="text"><p id="quote">{quote}</p></div>
            <div id="author">{author}</div>
            <a id="tweet-quote" className="twitter-share-button" href="https://twitter.com/intent/tweet">
<FontAwesomeIcon id="twitter" icon={faTwitter} />
</a>
            <button onClick={() => { changeBackgroundColor(); handleNewQuoteClick()}} id="new-quote">New Quote</button>
        </div>
        </div>
    );
}

export default App;
