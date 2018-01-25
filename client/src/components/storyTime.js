import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Beginning from './beginning';
import Middle from './middle';
import End from './end';
import Epilog from './epilog';


class StoryTime extends Component {



  render() {
    return (
       <main>
        <Switch>

            <Route exact path='/beginning' component={Beginning} />    
            <Route exact path='/middle' component={Middle} />
            <Route exact path='/end' component={End} />
            <Route exact path='/epilog' component={Epilog} />
        </Switch>

      </main> 
    );
  }
}

export default StoryTime;
