import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var spdamage, damage, mod, fdamage, fspdamage, hit;
var lowerd, higherd, lowersd, highersd;

class App extends Component {

  constructor(){
    super();
    this.state={
    }
  }

level(event){
  this.setState({
    lv:event.target.value,
  })
}
power(event){
  this.setState({
    power:event.target.value,
  })
}
def(event){
  this.setState({
    def:event.target.value,
  })
}
at(event){
  this.setState({
    at:event.target.value,
  })
}
sat(event){
  this.setState({
    sat:event.target.value,
  })
}
sdef(event){
  this.setState({
    sdef:event.target.value,
  })
}

crit(event){
  this.setState({
    crit:event.target.value,
  })
}
weather(event){
  this.setState({
    weather:event.target.value,
  })
}
target(event){
  this.setState({
    target:event.target.value,
  })
}
stab(event){
  this.setState({
    stab:event.target.value,
  })
}
type(event){
  this.setState({
    type:event.target.value,
  })
}
burn(event){
  this.setState({
    burn:event.target.value,
  })
}
other(event){
  this.setState({
    other:event.target.value,
  })
}
accuracy(event){
  this.setState({
    accuracy:event.target.value,
  })
}
evasion(event){
  this.setState({
    evasion:event.target.value,
  })
}
baseacc(event){
  this.setState({
    baseacc:event.target.value,
  })
}

render(){

  function damagec(power, def, spdef, att, spatt, lv){
    var power = + power;
    var def = + def;
    var spdef = + spdef;
    var att = + att;
    var spatt = + spatt
    var lv = + lv;
    var dice = + dice;
    damage = (((((2*lv)/5)+2)*power*(att/def))/50)+2;
    damage = parseInt(damage);
  }
  function spdamagec(power, def, spdef, att, spatt, lv){
    var power = + power;
    var def = + def;
    var spdef = + spdef;
    var att = + att;
    var spatt = + spatt
    var lv = + lv;
    var dice = + dice;
    spdamage = (((((2*lv)/5)+2)*power*(spatt/spdef))/50)+2;
    spdamage = parseInt(spdamage);
  }

  function modc(other){
     var crit = document.getElementById("crit");
     var target = document.getElementById("target");
     var weather = document.getElementById("weather");
     var burn = document.getElementById("burn");
     var stab = document.getElementById("stab");
     var type = document.getElementById("type");

    if (crit != null) {crit = crit.value;}else {crit = null;}
    if (target != null) {target = target.value;}else {target = null;}
    if (weather != null) {weather = weather.value;}else {weather = null;}
    if (burn != null) {burn = burn.value;}else {burn = null;}
    if (stab != null) {stab = stab.value;}else {stab = null;}
    if (type != null) {type = type.value;}else {type = null;}

    crit= parseFloat(crit);
    target = parseFloat(target);
    weather = parseFloat(weather);
    burn = parseFloat(burn);
    stab = parseFloat(stab);
    type = parseFloat(type);
    var other = parseFloat(other);

    mod=crit*target*weather*burn*stab*type*other;
  }

  function random(min,max){return Math.floor(Math.random()*(max-min+1)+min);}

  function finaldamage(){
    lowerd=damage*mod*0.85;
    lowersd=spdamage*mod*0.85;
    higherd=damage*mod*1;
    highersd=spdamage*mod*1;
    damage=random(lowerd,higherd);
    spdamage=random(lowersd,highersd);
  }

  function hit(acc,eva,baseacc){
    var acc = + acc;
    var eva = + eva;
    var baseacc = + baseacc;
    hit = baseacc*(acc/eva);
    hit = 100-hit ;
    hit = parseInt(hit);
  }

  return(
    <div className="App">
      <div>

        <select id="crit" onChange={this.crit.bind(this)}>
        <option value="0" default>crit</option>
        <option value="1" default>no</option>
        <option value="1.5">yes</option>
        </select>
        <select id="target" onChange={this.target.bind(this)}>
        <option value="0" default>target</option>
        <option value="1" default>1</option>
        <option value="0.75">2 or more</option>
        </select>
        <select id="weather" onChange={this.weather.bind(this)}>
        <option value="0" default>weather</option>
        <option value="1" default>default</option>
        <option value="1.5">advantage</option>
        <option value="0.5">disadvantage</option>
        </select>
        <select id="stab" onChange={this.stab.bind(this)}>
        <option value="0" default>stab</option>
        <option value="1" default>default</option>
        <option value="1.5" default>match</option>
        <option value="2">adaptability</option>
        </select>
        <select id="type" onChange={this.type.bind(this)}>
        <option value="0" default>type</option>
        <option value="1" default>normal</option>
        <option value="2" default>super effective</option>
        <option value="4" default>super super effective</option>
        <option value="0.25">not very effective</option>
        <option value="0">ineffective</option>
        </select>
        <select id="burn" onChange={this.burn.bind(this)}>
        <option value="0" default>burn</option>
        <option value="1" default>no</option>
        <option value="0.5">yes</option>
        </select>
</div>
<div>
      Name:<input type="text"/>
      lv<input type="number" onChange={this.level.bind(this)}/>
      pwr<input type="number" onChange={this.power.bind(this)}/>
      def<input type="number" onChange={this.def.bind(this)}/>
      sp.def<input type="number" onChange={this.sdef.bind(this)}/>
      att<input type="number" onChange={this.at.bind(this)}/>
      sp.att<input type="number" onChange={this.sat.bind(this)}/>
      other<input type="number" onChange={this.other.bind(this)}/>
      accuracy<input type="number" onChange={this.accuracy.bind(this)}/>
      evasion<input type="number" onChange={this.evasion.bind(this)}/>
      base accuracy<input type="number" onChange={this.baseacc.bind(this)}/>
      </div>

      <p>
        {damagec(this.state.power,this.state.def,this.state.sdef,this.state.at,this.state.sat,this.state.lv)}
        {spdamagec(this.state.power,this.state.def,this.state.sdef,this.state.at,this.state.sat,this.state.lv)}
        {modc(this.state.other)}
        {finaldamage()}
        {hit(this.state.accuracy,this.state.evasion,this.state.baseacc)}
        Damage: {damage}
        Sp.Damage: {spdamage}
        Miss Percentage: {hit}
      </p>

    </div>
  );
}
}

export default App;
