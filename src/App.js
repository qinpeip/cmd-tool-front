import React from 'react';
import './App.css';

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        this is an app page;
        <button onClick={() => this.pageChange()}> go login page</button>
      </div>
    )
  }
  pageChange() {
    this.props.history.push('login');
  }
}
