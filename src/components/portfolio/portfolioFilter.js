import React from "react";

import './inputContainer.css'

import { Select,Option } from "../../style/style";
import { categories } from "../../Redux/actions/CategoryList";


const PortfolioFilter = ({catFilter}) => (

<Select small dir="rtl" 
        onChange={(e)=>{
          return catFilter(e.target.value)
          }}>

  <Option key='' value=''>הכל</Option>;
{categories&&categories.map((opt, key) => {
        return <Option key={key} value={opt.id}>{opt.fullName}</Option>;
  
      })}
    
      </Select>
);




export default PortfolioFilter;
