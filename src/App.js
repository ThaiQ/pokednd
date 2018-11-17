import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var spdamage, damage, mod, fdamage, fspdamage, hit;
var lowerd, higherd, lowersd, highersd, stage, hp;

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
stage(event){
  this.setState({
    stage:event.target.value,
  })
}
stageui(event){
  this.setState({
    stageui:event.target.value,
  })
}
health(event){
  this.setState({
    health:event.target.value,
  })
}
hin(event){
  this.setState({
    hin:event.target.value,
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

  function stagec(number){
    var num = + number;
    var stagein = document.getElementById("stage");
    if (stagein != null) {stagein = stagein.value;}else {stagein = null;}
    stagein = parseFloat(stagein);
    stage = stagein * number / 100;
    stage = Math.round(stage);
  }

  function healthc(health,input){
    var health = + health;
    var input = + input;
    hp = health - input;
  }

  return(
    <div className="App">
      <div className="option">

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

        <div className="acc">
        accuracy<input type="number" onChange={this.accuracy.bind(this)}/>
        evasion<input type="number" onChange={this.evasion.bind(this)}/>
        base accuracy<input type="number" onChange={this.baseacc.bind(this)}/>
        </div>

        <div className="stage">
        {stagec(this.state.stageui)}
        stage<input type="number" onChange={this.stageui.bind(this)}/>
        <select id="stage" onChange={this.stage.bind(this)}>
        <option value="1" default>stage 0</option>
        <option value="133.33" default>1</option>
        <option value="166.67" default>2</option>
        <option value="200" default>3</option>
        <option value="233.33" default>4</option>
        <option value="266.67" default>5</option>
        <option value="300" default>6</option>
        <option value="75" default>-1</option>
        <option value="60" default>-2</option>
        <option value="50" default>-3</option>
        <option value="43" default>-4</option>
        <option value="37.5" default>-5</option>
        <option value="33.3" default>-6</option>
        </select>
        {stage}
        </div>

        <div className="health">
        health:{healthc(this.state.health, this.state.hin)} {hp}<input type="number" onChange={this.health.bind(this)}/>
        <input type="number" onChange={this.hin.bind(this)}/>
        </div>
      </div>

      <div className="input">
      Name:<input type="text"/>
      lv<input type="number" onChange={this.level.bind(this)}/>
      Target def<input type="number" onChange={this.def.bind(this)}/>
      Target sp.def<input type="number" onChange={this.sdef.bind(this)}/>
      att<input type="number" onChange={this.at.bind(this)}/>
      sp.att<input type="number" onChange={this.sat.bind(this)}/>
      other<input type="number" onChange={this.other.bind(this)}/>
      pwr<input type="number" onChange={this.power.bind(this)}/>
      </div>

      <div className="output">
        {damagec(this.state.power,this.state.def,this.state.sdef,this.state.at,this.state.sat,this.state.lv)}
        {spdamagec(this.state.power,this.state.def,this.state.sdef,this.state.at,this.state.sat,this.state.lv)}
        {modc(this.state.other)}
        {finaldamage()}
        {hit(this.state.accuracy,this.state.evasion,this.state.baseacc)}
        <h1>Damage: {damage}</h1>
        <h1>Sp. Damage: {spdamage}</h1>
        <h1>Miss Percentage: {hit}</h1>
      </div>


    </div>
  );
}
}

export default App;
