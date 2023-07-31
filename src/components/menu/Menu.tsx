import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
a{
  color: white;
}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  padding: 14px 0; 
`
