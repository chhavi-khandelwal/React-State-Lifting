import React from 'react';
import logo from './logo.svg';
import Input from './Input.js';
import Result from './Result.js';
import Reducer from './Reducers.js';
import './App.css';
import { Provider } from "react-redux";
import {createStore} from "redux";
import {store} from "redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: [], result:""};
  }

  onChangeHandler = (e, index) => {
    if (isNaN(Number(e.target.value))) {
      this.setState({value:[]})
    }
    else {
      const f = this.state.value
      f[index] = e.target.value

      this.setState({value: f})
    }
  }
  const store = createStore(Reducer)

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Input value={this.state.value[0]} onChange={(e)=>this.onChangeHandler(e, 0)}/>
          <Input value={this.state.value[1]} onChange={(e)=>this.onChangeHandler(e, 1)}/>
          <Result res={this.state.value}/>
        </div>
      </Provider>
      
    )
  }
}

export default App;
