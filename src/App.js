import React, { Component } from "react";
import axios from "axios";
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Models from "./components/Models";
import Loder from './components/Loder';
export default class App extends Component {
  state = {
    imges: [],
    isShow: false,
    url: "",
    count:10,
    start:0,
    isChange:false,
    isLoding :true,
colorchange:false,
    loading:'' ,
    allimgd:''
  };
  showModal = (img) => {
    this.setState({
      url: `${img.download_url}?grayscale`,
      url2:img.download_url,
      isShow: true, 
      allimgd:img
    });
  };
  closeModal = () => {
    this.setState({
      isShow: false,
    });
  };
  closeModal1 = (dataimg , col) => {
debugger;
const  imges= this.state.imges.map(item=>{
  if(item.id ===dataimg.id ){
item.color = col
  }
  return item;
})
  this.setState({
    imges:imges
  })  
  };
  componentDidMount() {
    const {count , start}=this.state;
    axios.get(`https://picsum.photos/v2/list?page=${start}&limit=${count}`).then(res=>this.setState({imges:res.data ,
  isLoding:false}))
  }
  getImage = () => {
    console.log('hi')
    const {count , start}=this.state;
    this.setState({start:this.state.start + count ,isLoding:true})
    
    axios.get(`https://picsum.photos/v2/list?page=${this.state.start}&limit=${this.state.count}`).then((res) => {
      const result = res.data;
    
      console.log(result);
     
     this.setState({
       imges:this.state.imges.concat(result) ,
       isLoding:false
     })
    });
  };
  render() {
    return (
      <div className="App">
       
       <div className="tbn"><button onClick={()=>{this.setState({isChange:!this.state.isChange})}} className="btn btn-dark">ChangeColor</button></div>
        {this.state.isShow && (
          <Models
            show={this.state.isShow}
            close={this.closeModal}
            url1={this.state.url}
            url2={this.state.url2}
            closeModal={this.closeModal1}
            allimgd ={this.state.allimgd}
          />
        )}
          <InfiniteScroll 
        dataLength={this.state.imges.length}
        next={this.getImage}
        hasMore={true}
        loder={<h4>Loding...</h4>}
        >
        <div className="container abc">
          <div>
            {this.state.imges.map((img, i) => (
              <div className="col-lg-2 col-6  five" key={img.id}>
                <img
                  src={img.color?( img.color==='color'?(img.download_url) : (img.download_url +"?grayscale")) : !this.state.isChange?(img.download_url) :(img.download_url +"?grayscale")}
                  onClick={() => this.showModal(img)}
                  className="img-siz"
                />
                <br />
                <p>{img.author}</p>
              </div>
            ))}
          </div>
        </div>
          </InfiniteScroll>
          <div>{this.state.isLoding && <Loder />}</div>
      </div>
    );
  }
}
