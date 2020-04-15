import React, { useState } from 'react'
import { ButtonSlider, Slide, Slider } from '../../style/style'
import ReviewItem from './ReviewItem'
import a from '../../utilities/arrow.png'
import ReviewForm from '../../Form/ReviewForm'






const ReviewsSlider = ({reviews,addReview}) => {

    const [x,setX]=useState(0)

let arrReviews=reviews&&reviews.map(review => {
    return <ReviewItem key={review.id} {...review} />;
  })
    const goLeft=()=>{
x===0? setX(-100*(arrReviews.length-1)) : setX(x+100)

    }
    const goRight=()=>{

  (x===-100*(arrReviews.length-1)   ?   setX(0) :  setX(x-100)); 
    }
    return (
<>
<Slider>
{arrReviews.map((item,index)=>{
    return(
        <Slide key={index} style={{transform:`translateX(${x}%)`}}>{item}</Slide>
    )
})}

<ButtonSlider onClick={goLeft} src={a}/>
<ButtonSlider right onClick={goRight} src={a}/>
</Slider>

<div style={{width:'200px', height:'300px' ,position:'relative'}}>
<ReviewForm addReview={addReview}/>
</div>
</>
    )
}
export default  ReviewsSlider;