import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function PageLayout({ children }) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}

export const GlobalStyle = createGlobalStyle`
	body{
    background: linear-gradient(180deg, rgba(59, 113, 137,1) 0%, rgba(24, 48, 66,1) 85%);
    font-family: 'Heebo', sans-serif;
    background-repeat: no-repeat;
    background-size:cover;
 text-align: center;
height:100%;
		margin: 0;
    color: black;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
	}
`;
export const SiteContainer = styled.div`
min-height: calc(100vh - 122px);
`