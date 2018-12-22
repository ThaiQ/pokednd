import React, { Component } from 'react';
import Dis from './dis.js';
import {key} from '../App.js';

var opt=0;
var lv ="";
var name = "";
var ans=0;
var player = 0;

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
  e011:{
    name:	"36 - balance"	,
lv:	36	,
hp:	14	,
att:	17	,
def:	16	,
spatt:	17	,
spdef:	16	,
spd: 	14	,
type1:	nulls	,
type2:	nulls	,
},e012:{
  name:	"36 - physical"	,
lv:	36	,
hp:	14	,
att:	19	,
def:	18	,
spatt:	15	,
spdef:	14	,
spd: 	14	,
type1:	nulls	,
type2:	nulls	,
},e013:{
  name:	"36 - special"	,
lv:	36	,
hp:	14	,
att:	15	,
def:	14	,
spatt:	19	,
spdef:	18	,
spd: 	14	,
type1:	nulls	,
type2:	nulls	,
},e014:{
  name:	"36 - offensive"	,
lv:	36	,
hp:	14	,
att:	19	,
def:	14	,
spatt:	19	,
spdef:	14	,
spd: 	14	,
type1:	nulls	,
type2:	nulls	,
},e015:{
  name:	"36 - defensive"	,
lv:	36	,
hp:	16	,
att:	14	,
def:	19	,
spatt:	14	,
spdef:	19	,
spd: 	14	,
type1:	nulls	,
type2:	nulls	,
},e016:{
  name:	"36 - fast"	,
lv:	36	,
hp:	14	,
att:	18	,
def:	14	,
spatt:	18	,
spdef:	14	,
spd: 	18	,
type1:	nulls	,
type2:	nulls	,
},

e021:{
  name:	"42 - balance"	,
lv:	42	,
hp:	15	,
att:	18	,
def:	17	,
spatt:	18	,
spdef:	17	,
spd: 	15	,
type1:	nulls	,
type2:	nulls	,
},e022:{
  name:	"42 - physical"	,
lv:	42	,
hp:	15	,
att:	20	,
def:	19	,
spatt:	16	,
spdef:	15	,
spd: 	15	,
type1:	nulls	,
type2:	nulls	,
},e023:{
  name:	"42 - special"	,
lv:	42	,
hp:	15	,
att:	16	,
def:	15	,
spatt:	20	,
spdef:	19	,
spd: 	15	,
type1:	nulls	,
type2:	nulls	,
},e024:{
  name:	"42 - offensive"	,
lv:	42	,
hp:	15	,
att:	20	,
def:	15	,
spatt:	20	,
spdef:	15	,
spd: 	15	,
type1:	nulls	,
type2:	nulls	,
},e025:{
  name:	"42 - defensive"	,
lv:	42	,
hp:	17	,
att:	14	,
def:	20	,
spatt:	14	,
spdef:	20	,
spd: 	15	,
type1:	nulls	,
type2:	nulls	,
},e026:{
  name:	"42 - fast"	,
lv:	42	,
hp:	14	,
att:	19	,
def:	15	,
spatt:	19	,
spdef:	15	,
spd: 	19	,
type1:	nulls	,
type2:	nulls	,
},

e031:{
  name:	"58 - balance"	,
lv:	48	,
hp:	16	,
att:	19	,
def:	18	,
spatt:	19	,
spdef:	18	,
spd: 	16	,
type1:	nulls	,
type2:	nulls	,
},e032:{
  name:	"58 - physical"	,
lv:	48	,
hp:	16	,
att:	21	,
def:	20	,
spatt:	17	,
spdef:	16	,
spd: 	16	,
type1:	nulls	,
type2:	nulls	,
},e033:{
  name:	"58 - special"	,
lv:	48	,
hp:	16	,
att:	17	,
def:	16	,
spatt:	21	,
spdef:	20	,
spd: 	16	,
type1:	nulls	,
type2:	nulls	,
},e034:{
  name:	"58 - offensive"	,
lv:	48	,
hp:	16	,
att:	21	,
def:	16	,
spatt:	21	,
spdef:	16	,
spd: 	16	,
type1:	nulls	,
type2:	nulls	,
},e035:{
  name:	"58 - defensive"	,
lv:	48	,
hp:	18	,
att:	15	,
def:	21	,
spatt:	15	,
spdef:	21	,
spd: 	16	,
type1:	nulls	,
type2:	nulls	,
},e036:{
  name:	"58 - fast"	,
lv:	48	,
hp:	15	,
att:	20	,
def:	16	,
spatt:	20	,
spdef:	16	,
spd: 	20	,
type1:	nulls	,
type2:	nulls	,
},

  e1:{
name:	"Arcanine"	,
lv:	42	,
hp:	16	,
att:	18	,
def:	15	,
spatt:	17	,
spdef:	15	,
spd: 	17	,
type1:	fire	,
type2:	none	,
  },
  e2:{
    name:	"pikachu"	,
    lv:	36	,
    hp:	10	,
    att:	12	,
    def:	10	,
    spatt:	11	,
    spdef:	11	,
    spd: 	15	,
    type1:	electric	,
    type2:	none	,
  },
  e3:{
    name:	"squirtle"	,
    lv:	30	,
    hp:	9	,
    att:	10	,
    def:	12	,
    spatt:	10	,
    spdef:	11	,
    spd: 	9	,
    type1:	water	,
    type2:	none	,
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
    else if (opt==0.11){ans=e.e011;}
    else if (opt==0.12){ans=e.e012;}
    else if (opt==0.13){ans=e.e013;}
    else if (opt==0.14){ans=e.e014;}
    else if (opt==0.15){ans=e.e015;}
    else if (opt==0.16){ans=e.e016;}
    else if (opt==0.21){ans=e.e021;}
    else if (opt==0.22){ans=e.e022;}
    else if (opt==0.23){ans=e.e023;}
    else if (opt==0.24){ans=e.e024;}
    else if (opt==0.25){ans=e.e025;}
    else if (opt==0.26){ans=e.e026;}
    else if (opt==0.31){ans=e.e031;}
    else if (opt==0.32){ans=e.e032;}
    else if (opt==0.33){ans=e.e033;}
    else if (opt==0.34){ans=e.e034;}
    else if (opt==0.35){ans=e.e035;}
    else if (opt==0.36){ans=e.e036;}
    else if (opt==1){ans=e.e1;}
    else if (opt==2){ans=e.e2;}
    else if (opt==3){ans=e.e3;}
    else if (opt==4){ans=e.e4;}
    else if (opt==5){ans=e.e5;}
    else if (opt==6){ans=e.e6;}
    else if (opt==7){ans=e.e7;}
    else if (opt==8){ans=e.e8;}
    else if (opt==9){ans=e.e9;}
    else if (opt==10){ans=e.e10;}
    else if (opt==11){ans=e.e11;}
    else if (opt==12){ans=e.e12;}
    else if (opt==13){ans=e.e13;}
    else if (opt==14){ans=e.e14;}
    else{ans=0;}
  }

  function which(playersl){
    player = 0;
    if (playersl != null) {player = playersl.value;}else {player = 0;}
    player = + playersl;
  }

  function name(){
    if (player == 1 && opt != 0 && key==true){name=ans.name; lv=ans.lv;}
    else if (player == 1 && opt == 0 && key==true){name="wild"}
    else{}
  }

  return(<div>
    <select id="player" value={this.value} onChange={this.player.bind(this)}>
    <option value="NaN">Play?</option>
    <option value="0">player</option>
    <option value="1">host</option>
    </select>

    <select id="enemy" value={this.state.e} onChange={this.e.bind(this)}>
    <option value="NaN">Enemy?</option>
    <option value="0">Enemy: manual</option>
    <option value="0.11">Enemy: 1.1</option>
    <option value="0.12">Enemy: 1.2</option>
    <option value="0.13">Enemy: 1.3</option>
    <option value="0.14">Enemy: 1.4</option>
    <option value="0.15">Enemy: 1.5</option>
    <option value="0.16">Enemy: 1.6</option>
    <option value="0.21">Enemy: 2.1</option>
    <option value="0.22">Enemy: 2.2</option>
    <option value="0.23">Enemy: 2.3</option>
    <option value="0.24">Enemy: 2.4</option>
    <option value="0.25">Enemy: 2.5</option>
    <option value="0.26">Enemy: 2.6</option>
    <option value="0.31">Enemy: 3.1</option>
    <option value="0.32">Enemy: 3.2</option>
    <option value="0.33">Enemy: 3.3</option>
    <option value="0.34">Enemy: 3.4</option>
    <option value="0.35">Enemy: 3.5</option>
    <option value="0.36">Enemy: 3.6</option>
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
    <option value="11">enemy 11</option>
    <option value="12">enemy 12</option>
    <option value="13">enemy 13</option>
    <option value="14">enemy 14</option>
    </select>

    {select(this.state.e)}
    {which(this.state.player)}
    {name()}

    {player}
    {opt} -- 00
    <p>{name} {lv}</p>

    </div>);
  }
}

export {opt};
export {player};
export {ans};
export default Enemy;
