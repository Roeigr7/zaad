import React, { Component } from "react";
import { BookContainer } from "../../../style/style";
import { connect } from "react-redux";
import { getUserProjects} from '../../../Redux/actions/projectsActions';
import styled, { css } from "styled-components";
import ProjUserItem from "../items/ProjUserItem";
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

class ProjectsContainer extends Component {

  constructor(props){
    console.log('1111------ctor projprojContainer')
    super(props);
    this.state={
    key:2,
    list:[],
    proj:''
    }
  }
  async componentDidMount(){
    console.log('11118888------didmount PROJPROJContainer',this.props.user.uid)
   await this.props.getUserProjects(this.props.user.uid)
   console.log('11112222------didmount PROJPOROJContainer',this.props.projects)
   this.setState({
    list: this.props.projects,
    proj: this.props.projects[0]
    })

     }

nextproj=()=>{
      let newIndex=this.state.proj.key+1;
      if (newIndex>this.state.list.length-1){
      newIndex=0
      }
      this.setState({
        proj:this.state.list[newIndex]
      })
  }

prevproj=()=>{
  let newIndex=this.state.proj.key-1;
  if (newIndex<0){
    newIndex=this.state.list.length-1
    }
  this.setState({
    proj:this.state.list[newIndex]
  })
}

render(){

  return (
  <>
<BookContainer>
<ButtonNB next onClick={()=>this.nextproj()}><i class="fas fa-backward"></i>הבא</ButtonNB>
<ProjUserItem proj={this.state.proj}/>
<ButtonNB onClick={()=>this.prevproj()}>הקודם<i class="fas fa-forward"></i></ButtonNB>
</BookContainer>
</>

  );
};
}
   const actions={
    getUserProjects
  }
  const mapStateToProps=(state)=>({
   projects: state.projects
  })
  export default connect(mapStateToProps,actions)(ProjectsContainer);