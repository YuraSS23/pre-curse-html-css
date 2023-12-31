import React, {useState} from 'react';
import styled from "styled-components";
import {StyledTitleText} from "../../../components/StyledTitleText";
import checkImg from "../../../assets/images/Check.svg";
import arrowImg from "../../../assets/images/Arrow-down.svg";
import calendarImg from "../../../assets/images/Calendar.svg";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Create = () => {
    const [technologies, setTechnologies] = useState([
        {id: 1, checked: true},
        {id: 2, checked: true},
        {id: 3, checked: false},
        {id: 4, checked: false}
    ])
    const setOnTechnologies = (taskId: number, checked: boolean)=>{
        setTechnologies(technologies.map(el=>el.id === taskId ? {...el, checked} : el))
    }

    return (
        <StyledCreate>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"70px"}>
                    <FlexWrapper direction={"column"} mediadirection={"column"}>
                        <CreateTitle>Create your free account</CreateTitle>
                        <StyledTitleTextCreate>Let us first talk about dreams. We all know that dreams do play a role in our daily
                            lives. The majority
                            of people pay little attention to dreams. Dreams can help us find solutions to our daily problems and
                            see things from a different perspective. Whenever we are dreaming, we can be who or what we want to be,
                            regardless of the fact that in real life.</StyledTitleTextCreate>
                        <List>
                            <ListItem>Easy setup, fast start</ListItem>
                            <ListItem>Free forever for core features</ListItem>
                            <ListItem>14-day trial of premium features</ListItem>
                        </List>
                    </FlexWrapper>
                    <CreateForm>
                        <input type={"text"} placeholder="Full Name*"/>
                        <FlexWrapper wrap={"wrap"} gap={"20px"}>
                            <input type={"email"} placeholder="Email"/>
                            <input type={"password"} placeholder="Password"/>
                            <input type={"date"}/>
                            <select>
                                <option selected disabled>Country</option>
                                <option>Belarus</option>
                                <option>China</option>
                                <option>USA</option>
                            </select>
                        </FlexWrapper>
                        <div>
                            <label htmlFor="front">
                                <input id="front" type="radio" name="stack" checked/>
                                Frontend
                            </label>
                            <label htmlFor="back">
                                <input id="back" type="radio" name="stack"/>
                                Backend
                            </label>
                        </div>
                        <fieldset>
                            <legend>Favorite Technologies</legend>
                            <label>
                                <input type="checkbox" name="html" checked={technologies[0].checked} onChange={(e)=>{setOnTechnologies(1, e.currentTarget.checked)}}/>
                                HTML
                            </label>
                            <label >
                                <input type="checkbox" name="css" checked={technologies[1].checked} onChange={(e)=>{setOnTechnologies(2, e.currentTarget.checked)}}/>
                                CSS
                            </label>
                            <label >
                                <input type="checkbox" name="react" checked={technologies[2].checked} onChange={(e)=>{setOnTechnologies(3, e.currentTarget.checked)}}/>
                                React
                            </label>
                            <label>
                                <input type="checkbox" name="sc" checked={technologies[3].checked} onChange={(e)=>{setOnTechnologies(4, e.currentTarget.checked)}}/>
                                Styled components
                            </label>
                        </fieldset>
                        <textarea placeholder="Something else about you..."></textarea>
                        <input type="submit" value="registration"/>
                    </CreateForm>
                </FlexWrapper>
            </Container>
        </StyledCreate>
    );
};

const StyledCreate = styled.section`
  background-color: white;
  padding: 100px 0;
`
const CreateTitle = styled.h2`
  color: #363940;
  font-size: 32px;
  font-weight: 500;
  line-height: 43px;
  margin-bottom: 50px;
`
const StyledTitleTextCreate = styled.p`
  color: #95A1BB;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 40px;
  max-width: 500px;
`

const ListItem = styled.li`
  margin-bottom: 15px;
  color: #363940;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(${checkImg});
  }
`
const List = styled.ul`
`
const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  border-radius: 4px;
  width: 100%;
  max-width: 500px;

  input, select, fieldset, textarea, label, legend, input::placeholder, select::placeholder, textarea::placeholder {
    color: #95A1BB;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    font-family: inherit;
    cursor: pointer;
  }

  input[type="text"] {
    width: 100%;
    height: 50px;
  }

  input[type="email"], input[type="password"], input[type="date"], select {
    width: 230px;
    height: 50px;
    flex-grow: 1;
  }

  fieldset {
    width: 100%;
    padding: 30px 15px;
    display: flex;
    column-gap: 30px;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    resize: none;
  }

  button {
    width: 100%;
  }
  select {
    background: url(${arrowImg}) no-repeat right 15px top 50%;
    appearance: none;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    content: "";
      width: 10px;
      height: 10px;
      display: inline-block;
      background-size: cover;
      background: url(${calendarImg}) no-repeat;
    cursor: pointer;
  }
  div {
      display: flex;
      gap: 30px
  }
  input[type="submit"] {
    width: 100%;
    height: 51px;
    padding: 8px 0;
    border-radius: 4px;
    border: 1px solid #0A61F7;
    font-size: 14px;
    font-weight: 500;
    line-height: 19.6px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    background-color: #0A61F7;
    color: #FFFFFF;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      transform: translateY(-5px);
    }
  }
`