import React, { Component } from "react";
import {  ReviewContainer, ButtonRev,  Button, IconAct } from "../../style/style";
import ReviewItem from "./ReviewItem";
import ReviewForm from "../../forms/ReviewForm";
import { connect } from "react-redux";
import { getReviewsLocal, addReview,  deleteReview } from "../../Redux/actions/reviewActions";
import { toastr } from "react-redux-toastr";

class ReviewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      write: false,
      list: this.props.reviews,
      rev: "",
    };
  }
  async componentDidMount() {

    await this.props.getReviewsLocal();
    this.setState({
      list: this.props.reviews,
      rev: this.props.reviews[0],
    });
  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
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
    const {admin,addReview,deleteReview}=this.props
   const {write,rev}=this.state
    return (
      <>

            <ReviewContainer>
            {write ? (
        <ReviewForm cancel={this.writeFunc} addReview={addReview}/>
                ) : (
                  <>
             
              <ReviewItem rev={rev} />
              {admin&& (
 <>  
   {/* //////////Delete button///////   */}
          <IconAct bottom delete
        onClick={() => {

          if (window.confirm('אתה בטוח שתרצה למחוק את הביקורת?')){
          if(rev===undefined){
             toastr.error("אופס","לא נמצאה ביקורת למחיקה");
            }else deleteReview(rev.id)
             
            }
          }
        }
      > <i className='fa fa-trash'></i></IconAct>
        </>
      )}
              <ButtonRev onClick={() => this.nextRev()}>
              <i className='fas fa-backward'></i> הבא
              </ButtonRev>
                  <Button  onClick={this.writeFunc}>הוסף ביקורת</Button>
                  <ButtonRev right onClick={() => this.prevRev()}>
            הקודם <i className='fas fa-forward'></i> 
              </ButtonRev>
              </>
            )}
            </ReviewContainer>
    
      </>
    );
  }
}

const actions = {
  getReviewsLocal,
  addReview,
  deleteReview
};
const mapStateToProps = (state) => ({
  reviews: state.reviews,
  admin: state.firebase.profile.admin
});
export default connect(mapStateToProps, actions)(ReviewsContainer);
