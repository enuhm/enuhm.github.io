import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class ENetwork extends React.Component {

  render() {
    return (
        <h1>Engineering Network!</h1>
    );
  }
}

ReactDOM.render(<ENetwork />, document.getElementById('root'));