import React, { Component } from 'react';
import {type1st} from './Enemy.js';
import {type2nd} from './Enemy.js';
import {player} from './Enemy.js';
import {opt} from './Enemy.js';
import {ans} from './Enemy.js';
import {playerans} from './player.js';
import {playeropt} from './player.js';
import {key} from '../App.js';

var d1 = 0;
var d2 = 0;
var typeout = 0;

class Type extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  attack(event){
    this.setState({
      attack:event.target.value,
    })
  }
  type1(event){
    this.setState({
      type1:event.target.value,
    })
  }
  type2(event){
    this.setState({
      type2:event.target.value,
    })
  }
render(){

  function typec(){
    var att = document.getElementById("attack");
    var type1 = document.getElementById("type1");
    var type2 = document.getElementById("type2");

    if (player == 0 && opt == 0){
    if (att != null) {att = att.value;}else {att = 0;}
    if (type1 != null) {type1 = type1.value;}else {type1 = 0;}
    if (type2 != null) {type2 = type2.value;}else {type2 = 0;}}
    else if (player == 0 && opt != 0 && key == true){
      if (att != null) {att = att.value;}else {att = 0;}
      type1 = ans.type1;
      type2 = ans.type2;
    }else if (player == 1 && playeropt != 0){
      if (att != null) {att = att.value;}else {att = 0;}
      type1 = playerans.type1;
      type2 = playerans.type2;
    }else{
      if (att != null) {att = att.value;}else {att = 0;}
      if (type1 != null) {type1 = type1.value;}else {type1 = 0;}
      if (type2 != null) {type2 = type2.value;}else {type2 = 0;}}


    if (att == "normal"){
      if (type1=="rock" || type1=="steel"){d1=0.5;}
      else if (type1=="ghost"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "fighting"){
      if (type1=="flying" || type1=="posion" || type1=="bug" || type1=="psychic" || type1=="fairy"){d1=0.5;}
      else if (type1=="normal"  || type1=="rock" || type1=="steel" || type1=="ice" || type1=="dark"){d1=2;}
      else if (type1=="ghost"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "flying"){
      if (type1=="rock" || type1=="steel" || type1=="electric"){d1=0.5;}
      else if (type1=="fighting"  || type1=="bug" || type1=="grass"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "poison"){
      if (type1=="poison" || type1=="ground" || type1=="rock" || type1=="ghost"){d1=0.5;}
      else if (type1=="grass"  || type1=="fairy"){d1=2;}
      else if (type1=="steel"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "ground"){
      if (type1=="bug" || type1=="grass"){d1=0.5;}
      else if (type1=="poison"  || type1=="rock" || type1=="steel" || type1=="fire" || type1=="electric"){d1=2;}
      else if (type1=="flying"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "rock"){
      if (type1=="fighting" || type1=="ground" || type1=="steel"){d1=0.5;}
      else if (type1=="flying"  || type1=="bug" || type1=="fire" || type1=="ice"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "bug"){
      if (type1=="flying" || type1=="posion" || type1=="ghost" || type1=="fighting" || type1=="steel" || type1=="fire" || type1=="fairy"){d1=0.5;}
      else if (type1=="grass"  || type1=="psychic" || type1=="dark"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "ghost"){
      if (type1=="dark"){d1=0.5;}
      else if (type1=="ghost"  || type1=="psychic"){d1=2;}
      else if (type1=="normal"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "steel"){
      if (type1=="steel" || type1=="fire" || type1=="water" || type1=="electric"){d1=0.5;}
      else if (type1=="rock"  || type1=="ice" || type1=="fairy"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "fire"){
      if (type1=="rock" || type1=="fire" || type1=="water" || type1=="dragon"){d1=0.5;}
      else if (type1=="bug"  || type1=="steel" || type1=="grass" || type1=="ice"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "water"){
      if (type1=="water" || type1=="grass" || type1=="dragon"){d1=0.5;}
      else if (type1=="ground"  || type1=="rock" || type1=="fire"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "grass"){
      if (type1=="flying" || type1=="posion" || type1=="bug" || type1=="dragon" || type1=="steel" || type1=="fire" || type1=="grass"){d1=0.5;}
      else if (type1=="ground"  || type1=="rock" || type1=="water"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "electric"){
      if (type1=="grass" || type1=="electric" || type1=="dragon"){d1=0.5;}
      else if (type1=="water"  || type1=="flying"){d1=2;}
      else if (type1=="ground"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "psychic"){
      if (type1=="steel" || type1=="psychic"){d1=0.5;}
      else if (type1=="fighting"  || type1=="posion"){d1=2;}
      else if (type1=="dark"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "ice"){
      if (type1=="steel" || type1=="fire" || type1=="water" || type1=="ice"){d1=0.5;}
      else if (type1=="flying"  || type1=="ground" || type1=="grass" || type1=="dragon"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "dragon"){
      if (type1=="steel"){d1=0.5;}
      else if (type1=="ndragon"){d1=2;}
      else if (type1=="fairy"){d1=0;}
      else {d1 = 1;}
    }
    else if (att == "dark"){
      if (type1=="fighting" || type1=="dark" || type1=="fairy"){d1=0.5;}
      else if (type1=="ghost"  || type1=="psychic"){d1=2;}
      else {d1 = 1;}
    }
    else if (att == "fairy"){
      if (type1=="posion" || type1=="fire" || type1=="steel"){d1=0.5;}
      else if (type1=="fighting" || type1=="dark" || type1=="dragon"){d1=2;}
      else {d1 = 1;}
    }
    else {d1 = 1;}
//////////////////////////////////
    if (att == "normal"){
      if (type2=="rock" || type2=="steel"){d2=0.5;}
      else if (type2=="ghost"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "fighting"){
      if (type2=="flying" || type2=="posion" || type2=="bug" || type2=="psychic" || type2=="fairy"){d2=0.5;}
      else if (type2=="normal"  || type2=="rock" || type2=="steel" || type2=="ice" || type2=="dark"){d2=2;}
      else if (type2=="ghost"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "flying"){
      if (type2=="rock" || type2=="steel" || type2=="electric"){d2=0.5;}
      else if (type2=="fighting"  || type2=="bug" || type2=="grass"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "poison"){
      if (type2=="poison" || type2=="ground" || type2=="rock" || type2=="ghost"){d2=0.5;}
      else if (type2=="grass"  || type2=="fairy"){d2=2;}
      else if (type2=="steel"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "ground"){
      if (type2=="bug" || type2=="grass"){d2=0.5;}
      else if (type2=="poison"  || type2=="rock" || type2=="steel" || type2=="fire" || type2=="electric"){d2=2;}
      else if (type2=="flying"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "rock"){
      if (type2=="fighting" || type2=="ground" || type2=="steel"){d2=0.5;}
      else if (type2=="flying"  || type2=="bug" || type2=="fire" || type2=="ice"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "bug"){
      if (type2=="flying" || type2=="posion" || type2=="ghost" || type2=="fighting" || type2=="steel" || type2=="fire" || type2=="fairy"){d2=0.5;}
      else if (type2=="grass"  || type2=="psychic" || type2=="dark"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "ghost"){
      if (type2=="dark"){d2=0.5;}
      else if (type2=="ghost"  || type2=="psychic"){d2=2;}
      else if (type2=="normal"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "steel"){
      if (type2=="steel" || type2=="fire" || type2=="water" || type2=="electric"){d2=0.5;}
      else if (type2=="rock"  || type2=="ice" || type2=="fairy"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "fire"){
      if (type2=="rock" || type2=="fire" || type2=="water" || type2=="dragon"){d2=0.5;}
      else if (type2=="bug"  || type2=="steel" || type2=="grass" || type2=="ice"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "water"){
      if (type2=="water" || type2=="grass" || type2=="dragon"){d2=0.5;}
      else if (type2=="ground"  || type2=="rock" || type2=="fire"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "grass"){
      if (type2=="flying" || type2=="posion" || type2=="bug" || type2=="dragon" || type2=="steel" || type2=="fire" || type2=="grass"){d2=0.5;}
      else if (type2=="ground"  || type2=="rock" || type2=="water"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "electric"){
      if (type2=="grass" || type2=="electric" || type2=="dragon"){d2=0.5;}
      else if (type2=="water"  || type2=="flying"){d2=2;}
      else if (type2=="ground"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "psychic"){
      if (type2=="steel" || type2=="psychic"){d2=0.5;}
      else if (type2=="fighting"  || type2=="posion"){d2=2;}
      else if (type2=="dark"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "ice"){
      if (type2=="steel" || type2=="fire" || type2=="water" || type2=="ice"){d2=0.5;}
      else if (type2=="flying"  || type2=="ground" || type2=="grass" || type2=="dragon"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "dragon"){
      if (type2=="steel"){d2=0.5;}
      else if (type2=="ndragon"){d2=2;}
      else if (type2=="fairy"){d2=0;}
      else {d2 = 1;}
    }
    else if (att == "dark"){
      if (type2=="fighting" || type2=="dark" || type2=="fairy"){d2=0.5;}
      else if (type2=="ghost"  || type2=="psychic"){d2=2;}
      else {d2 = 1;}
    }
    else if (att == "fairy"){
      if (type2=="posion" || type2=="fire" || type2=="steel"){d2=0.5;}
      else if (type2=="fighting" || type2=="dark" || type2=="dragon"){d2=2;}
      else {d2 = 1;}
    }
    else {d2 = 1;}

    typeout = d1*d2;

  }

  return(<div>
<div>
    <select id="attack" value={this.state.attack} onChange={this.attack.bind(this)}>
    <option value="0">attack</option>
    <option value="normal">normal</option>
    <option value="fighting">fighting</option>
    <option value="flying">flying</option>
    <option value="poison">poison</option>
    <option value="ground">ground</option>
    <option value="rock">rock</option>
    <option value="bug">bug</option>
    <option value="ghost">ghost</option>
    <option value="steel">steel</option>
    <option value="fire">fire</option>
    <option value="water">water</option>
    <option value="grass">grass</option>
    <option value="electric">electric</option>
    <option value="psychic">psychic</option>
    <option value="ice">ice</option>
    <option value="dragon">dragon</option>
    <option value="dark">dark</option>
    <option value="fairy">fairy</option>
    </select>

    <select id="type1" value={this.state.type1} onChange={this.type1.bind(this)}>
    <option value="1">EnemyType 1 / Default</option>
    <option value="normal">normal</option>
    <option value="fighting">fighting</option>
    <option value="flying">flying</option>
    <option value="poison">poison</option>
    <option value="ground">ground</option>
    <option value="rock">rock</option>
    <option value="bug">bug</option>
    <option value="ghost">ghost</option>
    <option value="steel">steel</option>
    <option value="fire">fire</option>
    <option value="water">water</option>
    <option value="grass">grass</option>
    <option value="electric">electric</option>
    <option value="psychic">psychic</option>
    <option value="ice">ice</option>
    <option value="dragon">dragon</option>
    <option value="dark">dark</option>
    <option value="fairy">fairy</option>
    </select>

    <select id="type2" value={this.state.type2} onChange={this.type2.bind(this)}>
    <option value="1">EnemyType 2 / Default</option>
    <option value="normal">normal</option>
    <option value="fighting">fighting</option>
    <option value="flying">flying</option>
    <option value="poison">poison</option>
    <option value="ground">ground</option>
    <option value="rock">rock</option>
    <option value="bug">bug</option>
    <option value="ghost">ghost</option>
    <option value="steel">steel</option>
    <option value="fire">fire</option>
    <option value="water">water</option>
    <option value="grass">grass</option>
    <option value="electric">electric</option>
    <option value="psychic">psychic</option>
    <option value="ice">ice</option>
    <option value="dragon">dragon</option>
    <option value="dark">dark</option>
    <option value="fairy">fairy</option>
    </select>
</div>
    {typec()}

    </div>);
  }
}

export {typeout};
export default Type;
