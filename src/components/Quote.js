import React from "react";

function Quote({ quote, displayAuthor }) {
	return (
		<main>
			<p>{quote.text}</p>
			{displayAuthor && <p>--{quote.author}</p>}
		</main>
	);
}

export default Quote;
