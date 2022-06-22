import React from 'react';
import ReactDOM from 'react-dom/client';

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
        };
    }
    render() { 
      return (
        <button className="square" onClick={ () => { console.log('click') }}>
          {this.props.value}
        </button>
      );
    }
  }

  export default Square