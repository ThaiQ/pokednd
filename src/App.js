import React, { Component } from 'react';
import "./App.css"

var imageToSlices = require('image-to-slices');
var image = require("./img/kanto.png");

class App extends Component {

  constructor(){
    super();
    this.state={
    }
  }

  cut()
  {
    imageToSlices(image, [20], [20], {
      saveToDataUrl: true
    }, function(dataUrlList) {
      console.log('sliced!', dataUrlList);
    });
  }

  render(){

    return(
      <div className="main">
        {this.cut()}
      </div>
    );
  }
}

export default App;
