import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Loginscreen from './components/Loginscreen';
import axios from 'axios';



import React, { Component } from 'react'
import Snakeplay from './components/Snakeplay';

const url = 'http://127.0.0.1:5000';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {date:new Date(),isloggedin:false};
  }

  checklogin=()=>{
    // axios.get(url+"/test").then((response)=>{
    //   console.log(response);
    // }).catch(error => console.error("error"+error));
  }

  componentDidMount(){
    this.checklogin();
  }

  render() {



    return (
      <div className="App">
      <div>
      </div>
      <div>
        <Loginscreen isloggedin = {this.state.isloggedin}></Loginscreen>
      </div>
      <div>
        {/* <Snakeplay></Snakeplay> */}
      </div>


    </div>
    )
  }
}

/*


  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.setState({date:new Date()});
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }


  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/