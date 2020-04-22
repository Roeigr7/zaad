import React from "react";
import styled from "styled-components";

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
