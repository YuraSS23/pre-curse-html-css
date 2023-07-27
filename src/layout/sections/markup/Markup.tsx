import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import image from "../../../assets/images/image.png"
import {StyledTitleText} from "../../../components/StyledTitleText";

export const Markup = () => {
    return (
        <StyledMarkup>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <StyledMarkup>
                    <StyledMarkupTitle>Markup achievement</StyledMarkupTitle>
                    <StyledTitleText>The harder you work for something, the greater you’ll feel when you achieve it.</StyledTitleText>
                    <StyledMarkupButton>
                        <a href="">Learn More</a>
                    </StyledMarkupButton>
                </StyledMarkup>
                <img src={image} alt=""/>
            </FlexWrapper>
        </StyledMarkup>
    );
};

const StyledMarkup = styled.section`
  min-height: 100vh;
  background-color: white;
`
const StyledMarkupTitle = styled.h1`
  color: #363940;
  font-size: 58px;
  font-weight: 500;
  font-height: 68px;
  margin-bottom: 30px;
`
const StyledMarkupButton = styled.button`
  width: 152px;
  height: 50px;
  border-radius: 4px;
  background: #0A61F7;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: 1.4px;
  text-transform: uppercase; 
  font-size: 14px;
  a{
    color: white;
  }
`