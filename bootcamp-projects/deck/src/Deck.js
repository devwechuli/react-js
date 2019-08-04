import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import './Deck.css';

const apiBaseUrl = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${apiBaseUrl}/new/shuffle/?deck_count=1`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    let id = this.state.deck.deck_id;
    try {
      let cardUrl = `${apiBaseUrl}/${id}/draw/`;
      // make request using deck id
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("No card remaining!");
      }

      // set state using
      console.log(cardRes.data);
      let card = cardRes.data.cards[0];
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`
          }
        ]
      }));
    } catch (error) {
      alert(error);
    }
  }
  render() {
    const cards = this.state.drawn.map(c => {
      return <Card key={c.id} name={c.name} image={c.image} />;
    });
    return (
      <div>
        <h1 className="title">Card Dealer</h1>
        <h2 className="subtitle">A little demo made with React</h2>
        <button onClick={this.getCard}>Get Card!</button>
        <div className="Deck-cardarea">
{cards}
        </div>
        
      </div>
    );
  }
}

export default Deck;
