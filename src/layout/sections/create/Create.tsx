import React from 'react';
import styled from "styled-components";
import {StyledTitleText} from "../../../components/StyledTitleText";

export const Create = () => {
    return (
        <StyledCreate>
            <CreateTitle>Create your free account</CreateTitle>
            <StyledTitleText>Let us first talk about dreams. We all know that dreams do play a role in our daily lives. The majority
                of people pay little attention to dreams. Dreams can help us find solutions to our daily problems and
                see things from a different perspective. Whenever we are dreaming, we can be who or what we want to be,
                regardless of the fact that in real life.</StyledTitleText>
            <List>
                <ListItem>Easy setup, fast start</ListItem>
                <ListItem>Free forever for core features</ListItem>
                <ListItem>14-day trial of premium features</ListItem>
            </List>
            <form>
                <input type={"text"} placeholder="Full Name*"/>
                <input type={"email"} placeholder="Email"/>
                <input type={"password"} placeholder="Password"/>
                <input type={"date"}/>
                <select>
                    <option selected disabled>Country</option>
                    <option>Belarus</option>
                    <option>China</option>
                    <option>USA</option>
                </select>
                <fieldset>
                    <legend>Favorite Technologies</legend>
                    <label htmlFor="front">
                        <input id="front" type="radio" name="stack" checked/>
                        Frontend
                    </label>
                    <label htmlFor="back">
                        <input id="back" type="radio" name="stack"/>
                        Backend
                    </label>
                    <label htmlFor="html">
                        <input id="html" type="checkbox" name="html" checked/>
                        HTML
                    </label>
                    <label htmlFor="css">
                        <input id="css" type="checkbox" name="css" checked/>
                        CSS
                    </label>
                    <label htmlFor="react">
                        <input id="react" type="checkbox" name="react"/>
                        React
                    </label>
                    <label htmlFor="sc">
                        <input id="sc" type="checkbox" name="sc"/>
                        Styled components
                    </label>
                </fieldset>
                <textarea placeholder="Something else about you..."></textarea>
                <input type="submit"/>
            </form>
        </StyledCreate>
    );
};

const StyledCreate = styled.section`
  min-height: 100vh;
  background-color: white;
padding: 100px 0;
`
const CreateTitle = styled.h2`
  color: #363940;
  font-size: 32px;
  font-weight: 500;
  font-height: 43px;
  margin-bottom: 50px;
`
const ListItem = styled.li`
  margin-left: 30px;
  margin-bottom: 15px;
  color: #363940;
`
const List = styled.ul`
`