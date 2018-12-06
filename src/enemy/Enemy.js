import React, { Component } from 'react';
import Dis from './dis.js';
import {key} from '../App.js';

var opt=0;
var lv ="";
var name = "";
var ans=0;
var player = 0;

var e={
  e1:{
    name:"Arcanine",
    lv:35,
    hp:108,
    att:82,
    def:61,
    spatt:75,
    spdef:61,
    spd: 71,
    type1:"fire",
    type2:"none",
  },
  e2:{
    name:"Pikachu",
    lv:30,
    hp:61,
    att:38,
    def:29,
    spatt:35,
    spdef:35,
    spd: 59,
    type1:"electric",
    type2:"none",
  },
  e3:{
    name:"Golbat",
    lv:40,
    hp:110,
    att:69,
    def:61,
    spatt:57,
    spdef:65,
    spd: 77,
    type1:"poison",
    type2:"flying",
  },
  e4:{
    name:"Ponyta",
    lv:40,
    hp:90,
    att:73,
    def:49,
    spatt:57,
    spdef:57,
    spd: 77,
    type1:"fire",
    type2:"none",
  },
  e5:{
    name:"Magnemite",
    lv:40,
    hp:70,
    att:33,
    def:61,
    spatt:81,
    spdef:49,
    spd: 41,
    type1:"electric",
    type2:"steel",
  },
  e6:{
    name:"Electabuzz",
    lv:50,
    hp:125,
    att:88,
    def:62,
    spatt:100,
    spdef:90,
    spd: 110,
    type1:"electric",
    type2:"none",
  },
  e7:{
    name:"Magmar",
    lv:50,
    hp:125,
    att:100,
    def:62,
    spatt:105,
    spdef:90,
    spd: 98,
    type1:"fire",
    type2:"none",
  },
  e8:{
    name:"Wartortle",
    lv:40,
    hp:97,
    att:55,
    def:69,
    spatt:57,
    spdef:69,
    spd: 51,
    type1:"water",
    type2:"none",
  },
  e9:{
    name:"Sandslash",
    lv:40,
    hp:110,
    att:85,
    def:93,
    spatt:41,
    spdef:49,
    spd: 57,
    type1:"ground",
    type2:"none",
  },
  e10:{
    name:"Raichu",
    lv:40,
    hp:109,
    att:86,
    def:54,
    spatt:86,
    spdef:86,
    spd: 104,
    type1:"electric",
    type2:"none",
  },
  e11:{
    name:"Pinsir",
    lv:55,
    hp:136,
    att:142,
    def:115,
    spatt:65,
    spdef:82,
    spd: 98,
    type1:"bug",
    type2:"none",
  },
  e12:{
    name:"Jolteon",
    lv:55,
    hp:136,
    att:76,
    def:71,
    spatt:126,
    spdef:109,
    spd: 148,
    type1:"electric",
    type2:"none",
  },
  e13:{
    name:"Ray",
    lv:100,
    hp:11,
    att:45,
    def:45,
    spatt:29,
    spdef:29,
    spd: 10,
    type1:"flying",
    type2:"dragon",
  },
  e14:{
    name:"MRay",
    lv:100,
    hp:11,
    att:48,
    def:48,
    spatt:20,
    spdef:20,
    spd: 54,
    type1:"flying",
    type2:"dragon",
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
    <option value="0">Enemy: default</option>
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
