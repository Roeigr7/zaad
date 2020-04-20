import React, { Component } from "react";

import { BoxContent, Button} from "../../../style/style";

import { connect } from "react-redux";
import { getRequestLocal,transferToArchive } from "../../../Redux/actions/requestsAction";
import styled, { css } from "styled-components";
import RequestsList from "../RequestsList";
import RequestItem from "../items/RequestItem";

class RequestsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      requestsList:[]
    };
  }
  async componentDidMount() {
    await this.props.getRequestLocal();
    console.log('qqqqqqqq')
    this.setState({
      requestsList: this.props.requests.filter((req) => !req.read)
    });
  }
  toggleReq = (index) => {
    console.log('777torlgereqinside ',index)
 this.setState({
          requestsList: this.state.requestsList.map((req, i) => {
            if (i === index) {
              req.open = !req.open;
            } else {
              req.open = false;
            }
            return req;
          }),
        })
      }

      onClickf=async(id,read)=>{
        console.log('OOOOOOONBEFORECLICKF1111athala',id,read,this.state.requestsList)
        this.props.transferToArchive(id,read)
        await this.props.getRequestLocal();
        console.log('OOOOOONCLICKFAFTERACTION',this.props.requests)
    
        console.log('OOOOOOOOOONCLICKFsof',this.state.requestsList)
      }
  render() {

console.log('4444444list',this.state.requestsList)
console.log('4444444act',this.props.requests)
const { requestsList} = this.state;
const{requests}=this.props;
    return (
      <>
   
        <Button style={{flex:'1 1 45%'}} onClick={() => this.setState({  requestsList: requests.filter((req) => req.read) })}>
    ארכיון
        </Button>
        <Button style={{flex:'1 1 45%'}}  onClick={() => this.setState({  requestsList: requests.filter((req) => !req.read) })}>
בקשות חדשות
        </Button>
        <BoxContent>
{requestsList && requestsList.map((req, i) => {
                return (
                  <RequestItem key={req.id} index={i} {...req} toggleReq={this.toggleReq} onClickParent={this.onClickf}/>
                );
              })}

        </BoxContent>
      </>
    );
  }
}
const actions = {
  getRequestLocal,
  transferToArchive
};
const mapStateToProps = (state) => ({
  requests: state.requests,

});
export default connect(mapStateToProps, actions)(RequestsContainer);
