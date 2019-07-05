import React from "react";
import "./App.css";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Button from "./components/Button";

class App extends React.Component {
	state = {
		quoteIndex: 1,
		displayAuthorValue: true
	};
	quotes = [
		{
			text:
				"It is our choices, Harry, that show what we truly are, far more than our abilities.",
			author: "Albus Dumbledore"
		},
		{
			text: "Harry -- yer a wizard.",
			author: "Hagrid"
		},
		{
			text:
				"But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
			author: "Albus Dumbledore"
		},
		{
			text: "We could have been killed - or worse, expelled!",
			author: "Hermione Granger"
		},
		{
			text: "NOT MY DAUGHTER, YOU ......",
			author: "Molly Weasley"
		},
		{
			text: "What exactly is the function of a rubber duck?",
			author: "Arthur Weasley"
		},
		{
			text: "Bad Dobby! Bad Dobby!",
			author: "Dobby"
		},
		{
			text: "It’s Wing-gar-dium Levi-o-sa, make the ‘gar’ nice and long.",
			author: "Hermione Granger"
		},
		{
			text:
				"After all, to the well-organised mind, death is but the next great adventure.",
			author: "Albus Dumbledore"
		},
		{
			text: "DON'D GIB ID DO DEM! DON'D GIB ID DO DEM, HARRY!",
			author: "Neville Longbottom"
		},
		{
			text: "There's no such thing as magic!",
			author: "Vernon Dursley"
		}
	];

	render() {
		return (
			<div>
				<Header title="Quote Gen" />
				<Quote
					quote={this.quotes[this.state.quoteIndex]}
					displayAuthor={this.state.displayAuthorValue}
				/>
				<Button onClick={this.changeQuoteIndex} text="New Quote" />
				<br />
				<Button onClick={this.toggleAuthor} text="Toggle Author" />
			</div>
		);
	}

	changeQuoteIndex = () => {
		this.setState({
			quoteIndex: Math.floor(Math.random() * this.quotes.length)
		});
	};
	toggleAuthor = () => {
		this.setState(state => {
			return { displayAuthorValue: !state.displayAuthorValue };
		});
	};
}

export default App;
