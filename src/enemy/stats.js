import React, { Component } from 'react';

var result = 0;
var opt;

class Stats extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  which(event){
    this.setState({
      which:event.target.value,
    })
  }
  inp(event){
    this.setState({
      inp:event.target.value,
    })
  }
  lv(event){
    this.setState({
      lv:event.target.value,
    })
  }
  i(event){
    this.setState({
      i:event.target.value,
    })
  }
render(){

  function statsc(stats,lv,i){
    var i = + i;
    var stats = + stats;
    var lv = + lv;
    opt = document.getElementById("which");
    if (opt != null) {opt = opt.value;}else {opt = "hp";}
    if (opt == "hp"){
      result=((2 * stats) * lv * (i+1) / 100 + lv + 10)
    }else{
      result=((3*stats+((lv))))+5;
    }
    result = Math.round(result);
  }

  return(<div>

    <select id="which" value={this.state.which} onChange={this.which.bind(this)}>
    <option value="hp">hp</option>
    <option value="other">other</option>
    </select>

    <p className="head">stats</p><input type="number" onChange={this.inp.bind(this)}/>
    <p className="head">bonus</p><input type="number" onChange={this.i.bind(this)}/>
    <p className="head">lv</p><input type="number" onChange={this.lv.bind(this)}/>

    {statsc(this.state.inp, this.state.lv, this.state.i)}
    {result}
    {opt}
    </div>);
  }
}

export default Stats;
