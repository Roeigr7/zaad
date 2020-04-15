
import React from "react";
import ReactPlayer from "react-player";

import { Content, Icon, HoverWrapper} from "../../../style/style";
import { format } from "date-fns";

const ProjUserItem = ({proj }) => {
  return(
<HoverWrapper>
<>
   {/* //////////////Edit button/////////// */}
  {/* <Link to={`/edit/${proj.id}`}>
      <Icon edit>
        <i class='fa fa-edit'></i>    
      </Icon>  </Link> */}
{/* //////////Delete button///////   */}
      <Icon delete
    onClick={() => {
    //  deleteProject(proj.id);
    }}
  >
<i class='fa fa-trash'></i></Icon>
  </>
<div className='player-wrapper'>
<ReactPlayer

className='react-player'
        width="100%"
        height="100%"
        playIcon={true}
        controls={false}
        url={proj.videoUrl}
      />
</div>
<Content>{format(proj.date.toDate(), 'dd/MM/yyyy')}</Content>
  </HoverWrapper>
)}

export default ProjUserItem;
