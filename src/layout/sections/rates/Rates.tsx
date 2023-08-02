import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {StyledTitleText} from "../../../components/StyledTitleText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Rates = () => {
    return (
        <StyledRates>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <RatesTitle>Rates</RatesTitle>
                    <StyledTitleText>Failure will never overtake me if my determination to succeed is strong enough.</StyledTitleText>
                    <RatesStyledTable>
                        <tr>
                            <TableTitle>Features</TableTitle>
                            <th>Standart</th>
                            <th>Plus</th>
                            <th>PRQ</th>
                        </tr>
                        <tr>
                            <TableSubTitle>Theory</TableSubTitle>
                            <td><Icon iconId={"check"}/></td>
                            <td><Icon iconId={"check"}/></td>
                            <td><Icon iconId={"check"}/></td>
                        </tr>
                        <tr>
                            <TableSubTitle>Practice</TableSubTitle>
                            <td><Icon iconId={"close"}/></td>
                            <td><Icon iconId={"check"}/></td>
                            <td><Icon iconId={"check"}/></td>
                        </tr>
                        <tr>
                            <TableSubTitle>Code review</TableSubTitle>
                            <td><Icon iconId={"close"}/></td>
                            <td><Icon iconId={"close"}/></td>
                            <td><Icon iconId={"check"}/></td>
                        </tr>
                        <TableFooter>
                            <TableSubTitle>
                                <a href="">Have questions?</a>
                            </TableSubTitle>
                            <td>
                                <RatesButton>
                                    <a href="">GET NOW</a>
                                </RatesButton>
                            </td>
                            <td>
                                <RatesButton color={"#0A61F7"} textcolor={"#FFF"}>
                                    <a href="">GET NOW</a>
                                </RatesButton>
                            </td>
                            <td>
                                <RatesButton>
                                    <a href="">GET NOW</a>
                                </RatesButton>
                            </td>
                        </TableFooter>
                    </RatesStyledTable>
                </FlexWrapper>
            </Container>
        </StyledRates>
    );
};

const StyledRates = styled.section`
  min-height: 80vh;
  background-color: #F9FAFC;
  padding: 100px;
`
const RatesTitle = styled.h2`
  color: #363940;
  font-size: 32px;
  font-weight: 500;
  font-height: 43px;
  margin-bottom: 20px;
`

const RatesStyledTable = styled.table`
  background-color: #f9fafc;
  th,td {
    border: 1px solid #95A1BB;
    width: 240px;
    padding: 15px 0;
    text-align: center;
  }
`
const TableTitle = styled.th`
  color: #95A1BB;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`
const TableSubTitle = styled.th`
  color: #363940;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  padding-left: 20px;
  a{
    color: #0A61F7;
  }
`
type RatesButtonPropsType = {
    color?: string;
    textcolor?: string;
}
 const RatesButton = styled.button<RatesButtonPropsType>`
    width: 140px;
    padding: 8px 0;
    border-radius: 4px;
    border: 1px solid #0A61F7;
    font-size: 12px;
    font-weight: 500;
    line-height: 19.6px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    background-color: ${props => props.color || "#F9FAFC"};
   a{
     color: ${props => props.textcolor || "#0A61F7"};
   }
`
const TableFooter = styled.tr`
td {
  padding: 30px 0;
}
`

