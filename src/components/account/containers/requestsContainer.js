import React, { Component } from "react";

import { BookContainer } from "../../../style/style";

import { connect } from "react-redux";
import {getRequestLocal} from '../../../Redux/actions/requestsAction';
import RequestItem from "../items/RequestItem";
import styled, { css } from "styled-components";

export const ButtonNB=styled.button`
position:absolute;
height:30px;
background:transparent;
border:none;
box-sizing: border-box;
top:15px;
${p =>p.next &&
    css`
      left:0;

    `};
    right:0;


&:hover{   
    color:blue;
    transition:color 1s;
}
`;

class RequestsContainer extends Component {

  constructor(props){
    console.log('1111------ctor RequestsContainer')
    super(props);
    this.state={
    key:2,
    list:[],
    req:''
    }
  }
  async componentDidMount(){
    console.log('1111------didmount RequestsContainer')
   await this.props.getRequestLocal()
   this.setState({
    list: this.props.requests,
    req: this.props.requests[0]
    })

     }
  

nextReq=()=>{
      let newIndex=this.state.req.key+1;
      if (newIndex>this.state.list.length-1){
      newIndex=0
      }
      this.setState({
        req:this.state.list[newIndex]
      })
  }

prevReq=()=>{
  let newIndex=this.state.req.key-1;
  if (newIndex<0){
    newIndex=this.state.list.length-1
    }
  this.setState({
    req:this.state.list[newIndex]
  })
}

render(){
  return (
  <>
<BookContainer>
<ButtonNB next onClick={()=>this.nextReq()}><i className="fas fa-backward"></i>הבא</ButtonNB>
<RequestItem req={this.state.req}/>
<ButtonNB onClick={()=>this.prevReq()}>הקודם<i className="fas fa-forward"></i></ButtonNB>
</BookContainer>
</>

  );
};
}
   const actions={
    getRequestLocal
  }
  const mapStateToProps=(state)=>({
   requests: state.requests
  })
  export default connect(mapStateToProps,actions)(RequestsContainer);