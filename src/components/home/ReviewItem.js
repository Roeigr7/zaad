import React from "react";
import { format } from "date-fns";
import { ReviewContent,H4,PP } from "../../style/style";


const ReviewItem = ({rev}) => {
    
    return(
<>
<ReviewContent>
 <H4>חוות דעת</H4>
 <PP>{rev.content} </PP>
 <PP details>{rev.createdAt&& format (rev.createdAt.toDate(), 'dd/MM/yyyy')} {rev.name} </PP>
 </ReviewContent></>
    )

    }

export default ReviewItem;