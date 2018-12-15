import React, { Component } from 'react';
import Dis from './dis.js';
import {key} from '../App.js';
import {player} from './Enemy.js';

var playeropt=0;
var lv ="";
var name = "";
var playerans=0;

var e={
  e1:{
    name:"salamence",
    lv:35,
    hp:108,
    att:82,
    def:61,
    spatt:75,
    spdef:61,
    spd: 71,
    type1:"fire",
    type2:"none",
  }
}






class Player extends Component {
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
render(){
  function select(option){
    playeropt = document.getElementById("enemy");
    if (playeropt != null) {playeropt = playeropt.value;}else {playeropt = 0;}
    playeropt = +option;
    if (playeropt==0){playerans=0;}
    else if (playeropt==1){playerans=e.e1;}

    else{playerans=0;}
  }

  function name(){
    if (player == 0 && playeropt != 0 && key==false){name=playerans.name; lv=playerans.lv;}
    else if (player == 0 && playeropt == 0 && key==false){name="Choose Pokemon"; lv="";}
    else{}
  }

  return(<div>

    <select id="enemy" value={this.state.e} onChange={this.e.bind(this)}>
    <option value="NaN">Player's Poke</option>
    <option value="0">NotInData</option>
    <option value="1">salamence</option>

    </select>

    {select(this.state.e)}
    {name()}

    {playeropt}
    <p>{name} {lv}</p>

    </div>);
  }
}

export {playeropt}
export {playerans};
export default Player;
