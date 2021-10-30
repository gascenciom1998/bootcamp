import React from 'react';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
      currentCardIndex: 0,
      showFront: true,
      currentDisplay: this.props.cards[0].front
    };
  }

  flipCard = () => {
    var flipShowFront = !this.state.showFront;
    this.setState({
      showFront: flipShowFront,
      currentDisplay: flipShowFront ? this.state.cards[this.state.currentCardIndex].front : this.state.cards[this.state.currentCardIndex].back
    });
  }

  previousCard = () => {
    if (this.state.currentCardIndex > 0) {
      var previousCardIndex = this.state.currentCardIndex - 1;
      this.setState({
        currentCardIndex: previousCardIndex,
        currentDisplay: this.state.cards[previousCardIndex].front
      });
    }
  }

  nextCard = () => {
    if (this.state.currentCardIndex < this.state.cards.length - 1) {
      var nextCardIndex = this.state.currentCardIndex + 1;
      this.setState({
        currentCardIndex: nextCardIndex,
        currentDisplay: this.state.cards[nextCardIndex].front
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Card Viewer</h2>
        <table>
          <tbody>
            {this.state.currentDisplay}
          </tbody>
        </table>
        <br/>
        <p> Cards {this.state.currentCardIndex + 1} / {this.state.cards.length}</p>
        <button onClick={this.previousCard}> Previous Card </button>
        <button onClick={this.nextCard}> Next Card </button>
        <button onClick={this.flipCard}>Flip Card</button>
        <hr/>
        <button onClick={this.props.switchMode}>Got to card editor</button>
      </div>
    );
  }
}

export default CardViewer;