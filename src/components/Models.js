import React, { Component } from 'react';
import {Modal , Button} from 'react-bootstrap';
export default class Models extends Component {
  state={
    
    url:this.props.url1 ,
    url2:this.props.url2 ,
    sel:[1,2,3,4,5,6,7,8,9,10] ,
    sele:["grayscale" ,"color"] ,
    Width:["200*300","100*100","150*150","200*200","300*200"] ,
    setWidth:"img-siz"
  }
  imgBlur=()=>{
    this.setState({
      url:`${this.state.url2}/?blur`
    })
  }
  imgSelect=(s)=>{
   // debugger;
    this.setState({
      url:`${this.props.url2}/?blur=${s.target.value}`
    })
  }
  imgSelectColBlur=(cb)=>{
  debugger;
    if(cb.target.value==="color"){
      this.props.closeModal(this.props.allimgd , cb.target.value);
      this.setState({
        url:`${this.props.url2}`
      })}else{
        this.props.closeModal( this.props.allimgd , cb.target.value);
        this.setState({
          url:`${this.props.url2}?${cb.target.value}`
        })
      
    }
    
  }
  imgWidth=(w)=>{
    if(w.target.value==="200*300"){
      this.setState({
        setWidth:"imgwid1"
      })
    }
    if(w.target.value==="100*100"){
      this.setState({
        setWidth:"imgwid2"
      })
    }
    if(w.target.value==="150*150"){
      this.setState({
        setWidth:"imgwid3"
      })
    }
    if(w.target.value==="200*200"){
      this.setState({
        setWidth:"imgwid4"
      })
    }
    if(w.target.value==="300*200"){
      this.setState({
        setWidth:"imgwid5"
      })
    }
  }
  Hide=()=>{
    this.props.close();
  }
    render() {
        return (
            <Modal show={this.props.show}  onHide={this.props.close}>
            <Modal.Header closeButton onClick={this.props.close}>
              <Modal.Title>Modal heading</Modal.Title>
              
            </Modal.Header>
            <Modal.Body>
            
                <img src={this.state.url}  className={this.state.setWidth}/>
            </Modal.Body>
            <Modal.Footer>
              <select onChange={(item)=>this.imgSelectColBlur(item)}>
                {
                  this.state.sele.map((item , i)=>(
                  <option key={i} value={item}>{item}</option>

                  ))
                }
              </select>
              <span>Blur
              <select onChange={(sel)=>this.imgSelect(sel)} >
                {this.state.sel.map((sel ,i)=>(
                  <option key={i} value={sel} >{sel}</option>
                ))

                }
              </select>
              </span>
            <button onClick={this.imgBlur} className="btn btn-danger">blur</button>
              <Button variant="secondary" onClick={this.props.close}>
                Close
              </Button>
             <div>
               <span>Width </span>
               <span>
               <select onChange={(sel)=>this.imgWidth(sel)} >
                {this.state.Width.map((sel ,i)=>(
                  <option key={i} value={sel} >{sel}</option>
                ))

                }
              </select>
               </span>
             </div>
            </Modal.Footer>
          </Modal>
        )
    }
}
