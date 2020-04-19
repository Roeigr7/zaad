import React, { Component } from "react";

import { Form } from "../../../style/style";

import { connect } from "react-redux";
import { getRequestLocal } from "../../../Redux/actions/requestsAction";
import styled, { css } from "styled-components";
import RequestsList from "../RequestsList";
import RequestItem from "../items/RequestItem";

class RequestsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      write: false,
      open: false,
      requestsTwo:[]
    };
  }
  async componentDidMount() {
    await this.props.getRequestLocal()
    this.setState({
      requestsTwo: this.props.requests
  })
}
toggleReq=index=>{
  console.log('2222222bbbbbbbbbs',this.state.requestsTwo)
  console.log('2222222sssssssss',index)
  this.setState({
 
requestsTwo:this.state.requestsTwo.map((req,i)=>{
  if(i===index){
    req.open=!req.open
  }else{
    req.open=false
  }
  return req
})
})}
render() {
const { requestsTwo } = this.state;
console.log(requestsTwo,'888lllllllllllll111')
 return (
  <Form>

{requestsTwo&&requestsTwo.map((requestsTwo, i) => {

return <RequestItem index={i} {...requestsTwo} toggleReq={this.toggleReq}/>;
          })}
     </Form>
    );
  }
}
const actions = {
  getRequestLocal,
};
const mapStateToProps = (state) => ({
  requests: state.requests,
});
export default connect(mapStateToProps, actions)(RequestsContainer);
