import React, { Component } from "react";
import ProjectsList from "../components/projects/projectsList";
import PortfolioFilter from "../components/portfolio/portfolioFilter";
import { connect } from "react-redux";
import { getProjectsFilter} from "../Redux/actions/projectsActions";

import { Button,PageLayout, ContainerUp, ContainerMid } from "../style/style";
import Spinner from "../components/Spinner";

class PortfolioPage extends Component {
state={
  moreProjects:false,
  loadingInitial:true,
  loadedProjects:[],
  category:null
}
  async componentDidMount(){
    console.log('3333333didmount')
    let next=await this.props.getProjectsFilter();
    console.log('bbbbb',next)

    if(next&&next.docs&&next.docs.length>1){
      this.setState({
        moreProjects:true,
        loadingInitial:false
      })
    }
  }

  getNextProjects=async()=>{

    const {projects}=this.props
    let lastProject=projects&&projects[projects.length-1];
    console.log(lastProject,'ccccc')
    let next=await this.props.getProjectsFilter(lastProject,this.state.category);
    console.log('nextttt',next.docs.length)
    if(next&&next.docs&&next.docs.length<=7){
      this.setState({
        moreProjects:false
      })
    }
  }
  componentDidUpdate=async(prevProps,prevState)=>{

    if(this.state.category!==prevState.category){
    let next=await this.props.getProjectsFilter(null,this.state.category);

    if(next&&next.docs&&next.docs.length<=7){
      this.setState({
        moreProjects:false
      })
    }
  }
  else if (this.props.projects!==prevProps.projects){
      this.setState({

        loadedProjects:[...this.state.loadedProjects, ...this.props.projects]
      })
    }
  }
  catFilter=(cat)=>{
    this.setState({
      moreProjects:true,
      loadedProjects:[],
      category:cat,
  })

}

  render() {

    if (this.state.loadingInitial) return <Spinner/>
    return (
      <PageLayout>
<ContainerUp>
 <PortfolioFilter catFilter={this.catFilter} />
    </ContainerUp>
<ContainerMid>
<ProjectsList 
projects={this.state.loadedProjects} />

</ContainerMid>
<Button onClick={this.getNextProjects}>הצג עוד</Button>
</PageLayout>
    );
  }
}

const actions={
  getProjectsFilter,

}
const mapStateToProps=(state)=>({
 projects: state.projects,
 loading: state.async.loading
})
export default connect(mapStateToProps,actions)(PortfolioPage);
