import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

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
            <div>
                <Icon iconId={"menu-burger"} width={"46px"} height={"36px"}></Icon>
            </div>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  a {
    color: white;
  }

  ul {
    display: flex;
    gap: 24px;
  }
  
  div {
    display: none;

  }
  
  padding: 14px 0;
  
  @media screen and (max-width: 576px) {
    padding: 0;
    ul {
      display: none;
    }

   div {
      display: block;
    }
  }
`
