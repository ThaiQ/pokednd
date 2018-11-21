import React, { Component } from 'react';
var opt,name;
var ans=0;
var player = 0;

var e={
  e1:{
    name:"null",
    lv:50,
    def:30,
    spdef:20,
    att:10,
    spatt:40,
  },

  e2:{
    name:"y",
    lv:30,
    def:10,
    spdef:20,
    att:30,
    spatt:40,
  },

}







class Enemy extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  e(event){
    this.setState({
      e:event.target.value,
    })
  }
  player(event){
    this.setState({
      player:event.target.value,
    })
  }
render(){
  function select(option){
    opt = document.getElementById("enemy");
    if (opt != null) {opt = opt.value;}else {opt = 0;}
    opt = +option;
    if (opt==0){ans=0;}
    else if (opt!=1){ans=e.e1;}
    else if (opt!=2){ans=e.e2;}
    else if (opt!=3){ans=e.e3;}
    else if (opt!=4){ans=e.e4;}
    else if (opt!=5){ans=e.e5;}
    else if (opt!=6){ans=e.e6;}
    else if (opt!=7){ans=e.e7;}
    else if (opt!=8){ans=e.e8;}
    else if (opt!=9){ans=e.e9;}
    else if (opt!=10){ans=e.e10;}
    else{}
  }

  function which(playersl){
    player = + playersl;
  }

  function name(){
    if (player == 1){name=ans.name;}
    else{name="";}
  }

  return(<div>

    <select id="player" onChange={this.player.bind(this)}>
    <option value="0">player</option>
    <option value="1">host</option>
    </select>

    <select id="enemy" onChange={this.e.bind(this)}>
    <option value="0">default</option>
    <option value="1">enemy 1</option>
    <option value="2">enemy 2</option>
    <option value="3">enemy 3</option>
    <option value="4">enemy 4</option>
    <option value="5">enemy 5</option>
    <option value="6">enemy 6</option>
    <option value="7">enemy 7</option>
    <option value="8">enemy 8</option>
    <option value="9">enemy 9</option>
    <option value="10">enemy 10</option>
    </select>

    {select(this.state.e)}
    {which(this.state.player)}
    {name()}
    <p>{name}</p>

    </div>);
  }
}

export {player};
export {ans};
export default Enemy;
