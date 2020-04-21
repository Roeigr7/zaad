import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

/////////FORM//////////////////////////

///////Form title///
export const FormTitle=styled.h2`
background: linear-gradient(180deg, rgba(250,250,250,1) 41%, rgba(238,238,238,1) 51%);
color:#183042;
font-weight:bold;
text-align:center;
padding:0;
margin:0;


`
///Form Container///
export const Form=styled.form`
background: linear-gradient(-120deg, rgba(59,113,137,1) 50%, rgba(59,113,137,0.98) 50%);
position:relative;
margin:${p=>p.modal? '100px auto':'10px auto'};
display:flex;
padding:1px;
border:none;
width:${p=>p.small? '30%' : p.big? '70%' :'50%'};
justify-content:center;
flex-direction:column;
@media(max-width: 768px){
width:90%;
}
&::before{
content:'';
position:absolute;
top:-3px;
left:-3px;
right:-3px;
bottom:-3px;
z-index:-2;
background: #fff;
}

&::after{
content:'';
position:absolute;
top:-3px;
left:-3px;
right:-3px;
bottom:-3px;
z-index:-3;
background: #fff;
filter:${p=>p.modal? 'blur(3px)':'blur(1px)'};

}

&::before,&::after {
background: linear-gradient(235deg,#f9f9f9,#f7f7f7,#f9f9f9);
transform: skew(1deg,1deg);
border-radius:4px;
}
`
////////-LABEL-///////////////
export const InputContainer = styled.div`
position:relative;
margin-top:10px;
padding:0;

`
export const Label = styled.label`
position:absolute;
top:0;
right:0;
padding:10px 0;

font-size:16px;
color:#efefef;
text-align:right;
pointer-events: none;
transition:0.5s;
`
///////////////////INPUT////////////////
export const Input = styled.input`
width:100%;
padding:8px 0;
font-size:16px;
color:#f4f4f4;
direction: rtl;
border:none;
border-bottom: 1px solid #e1e4ea;
outline:none;
background-color: transparent;
text-align:right;

&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:red;
    font-size:10px;
}

&:valid {
    background-color: #40748C;
}

&:valid  ~${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
   
}
`





////////////////////////////////TextArea//////////////////////////////////////////

export const TextArea = styled.textarea.attrs(()=>({
    rows: '1'
}))`
 direction: rtl;
background-color:#c7cad1;
width:100%;
padding:8px 0;
font-size:16px;
color:#f4f4f4;

border:none;
font-family: 'Heebo', sans-serif;
border-bottom: 1px solid #c7cad1;
outline:none;
background:transparent;
text-align:right;

&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:red;
    font-size:10px;
}
&:valid {
    background-color: rgba(255,255,255,0.05);
}

&:valid  ~ ${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
}
`
///////////DATE//////////////////////
export const StyledDatePicker = styled(ReactDatePicker)`
position:relative;
text-align:center;

background-color:#d6a549;
padding:8.2px 0;
margin:0;
font-size:16px;
color:#cfd1d6;
margin-bottom: 30px;
border:none;
border-bottom: 1px solid #dfc887;
outline:none;
background:transparent;
&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:red;
    font-size:10px;
}
&:valid {
    background-color: rgba(255,255,255,0.04);
}

&:valid  ~ ${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
}

`
//////SELECT////////////////

export const Select = styled.select`
box-sizing:border-box;

background-color:#c7cad1;
padding:8px 10px;
font-size:16px;
color:#c7cad1;
margin-bottom:${p => p.small ? '0px': p.big? '30px' : '10px'};
border: none;
border-bottom: 2px solid #dfc887;
outline:none;
background:transparent;
text-align:right;
border-radius:4px;
@media (max-width: 768px) {
   width:90%;
 }


&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:'#33627A';
    font-size:10px;
}
&:valid {
    background-color: rgba(255,255,255,0.05);
}

&:valid  ~ ${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
}

`
export const Option = styled.option`
color:${p => p.disabled? '#c7cad1' :'#E6E9F2'};
background:${p => p.disabled? '#b8bbc1' :'#33627A'};
max-width: 70%;

`

export const FlexFields = styled.div`
padding: 0;
flex-direction:row;
display:flex;
position:relative;
justify-content:space-between;
flex-wrap: wrap;
@media(max-width: 768px){
justify-content:center;

}
`

export const ErrorLabel= styled.label`
position:absolute;
margin-top:10px;
top:${p => p.tiny ? '29px' :'4px'};
border:0px solid #ff0000;
font-weight:bold;
left:${p => p.tiny ? '30%' :'0'};
color:red;
border-radius:4px;
text-align: right;
`
export const SelectWrapper = styled.div`
@media(max-width: 768px){
width:100%;
}
`




///////modalIcon///////////
export const ModalIcon=styled.span`
position:absolute;
right:13px;
top:9px;
cursor:pointer;
`

export const BoxContent=Form.withComponent('div')