import React from "react";

export default function Quote(props) {
  const { title, quote, author, background } = props.quoteData;

  return (
    <div className="quote">
      <h1 className="quote-title">{title}!</h1>
      <h2 className="quote-text">{quote}</h2>
      <h3 className="quote-author">-{author}</h3>
      <img className="quote-image" src={background} />
    </div>
  );
}
