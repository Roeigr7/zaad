import React from "react";
import { ReviewContent,H4,P } from "../../style/style";
import { format } from "date-fns";

const ReviewItem = ({rev}) => {
    return(
<>
{rev?(
<ReviewContent>
 <H4 radius>חוות דעת</H4>
 <P white>{rev.content}</P>
 <P white left small>{rev.createdAt&& format (rev.createdAt.toDate(), 'dd/MM/yyyy')} {rev.name} </P>
 </ReviewContent>
):(<H4 radius>חוות דעת</H4>)
}
</>
    )

    }

export default ReviewItem;