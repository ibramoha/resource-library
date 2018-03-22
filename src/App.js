import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <h1>Resource Library</h1>
        <Form />  
      </div>
      
    );
  };
};

export default App;