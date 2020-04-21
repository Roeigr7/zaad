import styled from "styled-components"

////////container together////////////
export const ContainerTogether= styled.div`
margin-top:10px;
 display:flex;
 flex: 1 0 100%;
 box-sizing: border-box; 
flex-direction:row-reverse;
flex-wrap:wrap;
 @media (max-width: 768px) {
 
 }`

  export const ContainerRight= styled.div`
  flex: 1 1 50%;
  box-sizing: border-box; 
  border:2px solid grey;
  @media (max-width: 768px) {
    flex: 1 0 100%;
 
 }
 `

 export const ContainerLeft =styled.div`

 box-sizing: border-box; 
 flex: 1 1 50%;
 border:2px solid brown;
 @media (max-width: 768px) {

flex: 1 0 100%;
}
`