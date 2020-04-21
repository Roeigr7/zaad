import React, { Component } from "react";

import { getReviewsLocal, addReview } from "../../Redux/actions/reviewActions";
import ReviewItem from "./ReviewItem";
import {  ReviewContainer, ButtonRev,  Button } from "../../style/style";
import { connect } from "react-redux";
import ReviewForm from "../../Form/ReviewForm";


class ReviewsContainer extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      write: false,
      key: 2,
      list: this.props.reviews,
      rev: "",
    };
  }
  async componentDidMount() {
    console.log("11112222------didmount ReviewsContainer");
    await this.props.getReviewsLocal();
    this.setState({
      list: this.props.reviews,
      rev: this.props.reviews[0],
    });
  }


  nextRev = () => {
    let newIndex = this.state.rev.key + 1;
    if (newIndex > this.state.list.length - 1) {
      newIndex = 0;
    }
    this.setState({
      rev: this.state.list[newIndex],
    });
  };

  prevRev = () => {
    let newIndex = this.state.rev.key - 1;
    if (newIndex < 0) {
      newIndex = this.state.list.length - 1;
    }
    this.setState({
      rev: this.state.list[newIndex],
    });
  };
writeFunc=()=>{
this.setState({
write: !this.state.write
})
  }
  render() {
    return (
      <>

            <ReviewContainer>
            {this.state.write ? (
        <ReviewForm cancel={this.writeFunc} addReview={addReview}/>
                ) : (
                  <>
              <ReviewItem rev={this.state.rev} />
              <ButtonRev onClick={() => this.nextRev()}>
              <i className='fas fa-backward'></i> הבא
              </ButtonRev>
                  <Button onClick={this.writeFunc}>הוסף ביקורת</Button>
                  <ButtonRev right onClick={() => this.prevRev()}>
            הקודם <i className='fas fa-forward'></i> 
              </ButtonRev>
              </>
            )}
            </ReviewContainer>
            {/* <Button onClick={this.writeFunc}>כתוב תגובה חדשה</Button> */}

    
      </>
    );
  }
}

const actions = {
  getReviewsLocal,
  addReview
};
const mapStateToProps = (state) => ({
  reviews: state.reviews,
});
export default connect(mapStateToProps, actions)(ReviewsContainer);
