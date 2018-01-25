import React, { Component } from 'react';


class Epilog extends Component {

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
            <h2>Epilogue</h2>
            
            {this.state.Sentences.map(sentence => 
            <p key={sentence.id}>{sentence.Epilog}</p>                
            )}
        </div>
    );
  }
}

export default Epilog;
