import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <small>Copyright © 2023. All rights reserved.</small>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  background-color: #0A61F7;
  text-align: center;
  padding: 20px 0;
  small {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: white;
  }
`