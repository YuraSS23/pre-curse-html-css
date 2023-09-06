import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    height?: string;
    gap?: string;
    minheight?: string;
    mediadirection?: string;
    mediadjustify?: string;
    overflowX?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  height: ${props => props.height};
  gap: ${props => props.gap || "0"};
  min-height: ${props => props.minheight || "none"};

  .markup-img {
    align-self: flex-end;
  }

  @media screen and (max-width: 1400px) {
    flex-direction: ${props => props.mediadirection || "row"};
    justify-content: ${props => props.mediadjustify || "center"};
    overflow-x: ${props => props.overflowX || "none"};
    .markup-img {
      align-self: center;
    }

    @media screen and (max-width: 768px) {
      .markup-img {
        width: 347px;
        height: 350px;
      }
    }
  }

`