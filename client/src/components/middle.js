import React, { Component } from 'react';


class Middle extends Component {

constructor(){
    super();
    this.state = {
        Sentences: []
    };
}

componentDidMount(){
    fetch('/api/storytime')
    .then(res => res.json())
    .then(Sentences => this.setState({Sentences}, () => console.log("Storytime was fetched...", Sentences)));
}

  render() {
    return (
     
        <div className="center blue-text lighten-3">
            <h2>Middle</h2>
            
            {this.state.Sentences.map(sentence => 
            <p key={sentence.id}>{sentence.Middle}</p>                
            )}
        </div>
    );
  }
}

export default Middle;
