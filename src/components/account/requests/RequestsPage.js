import React, { Component } from "react";
import { BoxContent, Button,FormButtons} from "../../../style/style";
import RequestItem from "./RequestItem";
import { connect } from "react-redux";
import { getRequestLocal,transferToArchive } from "../../../Redux/actions/requestsAction";

class RequestsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:true, 
      requestsList:[]
    };
  }
  async componentDidMount() {
    await this.props.getRequestLocal();
    this.setState({
      requestsList: this.props.requests.filter((req) => !req.read)
    });
  }
  toggleReq = (index) => {
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

      onClickfunc=async(id,read)=>{
        this.props.transferToArchive(id,read)
        await this.props.getRequestLocal();
        this.setState({
          requestsList: this.props.requests.filter((req) => req.read===read),
        });
      }
      render() {
const { active,requestsList} = this.state;
const{requests}=this.props;
    
return (
           <BoxContent>
           <FormButtons>
        <Button active={!active}  onClick={() => this.setState({  active:!active, requestsList: requests.filter((req) => req.read) })}>
    ארכיון
        </Button>
        <Button active={active} onClick={() => this.setState({  active:!active,requestsList: requests.filter((req) => !req.read) })}>
בקשות חדשות
        </Button>
        </FormButtons>
{requestsList && requestsList.map((req, i) => {
                return (
                  <RequestItem key={req.id} index={i} {...req} toggleReq={this.toggleReq} onClickParent={this.onClickfunc}/>
                );
              })}

        </BoxContent>
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
