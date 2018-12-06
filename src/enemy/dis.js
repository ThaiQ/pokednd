import React, { Component } from 'react';
import {key} from '../App.js';
import {ans} from './Enemy.js';
import {opt} from './Enemy.js';
import {player} from './Enemy.js';

var name, lv, hp, att, def, spatt, spdef, spd, type1, type2;

class Dis extends Component {

render(){
  function displace(){
    if (player == 1 && opt != 0 && key==true){
      name="name: "+ans.name;
      lv="lv: "+ans.lv;
      hp="hp: "+ans.hp;
      att="att: "+ans.att;
      spatt="sp.att: "+ans.spatt;
      def="def: "+ans.def;
      spdef="sp.def: "+ans.spdef;
      spd="spd: "+ans.spd;
      type1="type1: "+ans.type1st;
      type2="type2: "+ans.type2nd;
    }
    else if (player == 1 && opt == 0 && key==true){name="wild"}
    else{}
  }

  return(<div>

    {displace()}
    <p>{name}</p>
    <p>{lv}</p>
    <p>{hp}</p>
    <p>{att}</p>
    <p>{spatt}</p>
    <p>{def}</p>
    <p>{spdef}</p>
    <p>{spd}</p>
    <p>{type1}</p>
    <p>{type2}</p>

    </div>);
  }
}

export default Dis;
