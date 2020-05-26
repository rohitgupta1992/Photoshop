import React, { Component } from 'react'
import Models   from './Models';
export default class List extends Component {

    showMod=()=>{
        this.p
    }
    render() {
        return (
            <div>
                <div className="col-lg-2 col-6 col-sm-2" >
{ this.props.isShow && <Models  show={this.props.isShow}
 close={this.props.close } url1={this.props.url}/> }
  <img src={this.props.url} onClick={this.props.showModal}  className="img-siz"/><br/>
    <p>{this.props.img.author}</p> 
   
</div>
            </div>
        )
    }
}
