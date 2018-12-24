import React, { Component } from 'react';
import Dis from './dis.js';
import {key} from '../App.js';
import {player} from './Enemy.js';

var playeropt=0;
var lv ="";
var name = "";
var playerans=0;

var nulls="null";
var none="none";
var normal = "normal";
var fighting = "fighting";
var flying = "flying";
var poison = "poison";
var rock = "rock";
var bug = "bug";
var ghost = "ghost";
var steel = "steel";
var fire = "fire";
var water = "water";
var grass = "grass";
var electric = "electric";
var ice = "ice";
var dragon = "dragon";
var dark = "dark";
var fairy = "fairy";

var e={
  e1:{
    name:	"mienshao"	,
lv:	40	,
hp:	12	,
att:	33	,
def:	11	,
spatt:	15	,
spdef:	6	,
spd: 	16	,
type1:	fighting	,
type2:	none	,
},e2:{
    name:	"sceptile"	,
lv:	40	,
hp:	13	,
att:	17	,
def:	13	,
spatt:	17	,
spdef:	15	,
spd: 	20	,
type1:	grass	,
type2:	none	,
},e3:{
  name:	"metang"	,
lv:	40	,
hp:	11	,
att:	18	,
def: 6	,
spatt:	30	,
spdef:	13	,
spd: 	5	,
type1:	steel	,
type2:	none	,
},e4:{
  name:	"sceptile H."	,
lv:	40	,
hp:	7	,
att:	9	,
def: 7	,
spatt:	11	,
spdef:	9	,
spd: 	52	,
type1:	grass	,
type2:	none	,
},
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
    else if (playeropt==2){playerans=e.e2;}
    else if (playeropt==3){playerans=e.e3;}
    else if (playeropt==4){playerans=e.e4;}

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
    <option value="1">mimikyu</option>
    <option value="2">septile</option>
    <option value="3">metang</option>
    <option value="4">septile H.</option>

    </select>

    {select(this.state.e)}
    {name()}

    <p>{name} {lv}</p>

    </div>);
  }
}

export {playeropt}
export {playerans};
export default Player;
