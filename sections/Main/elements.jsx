import styled from 'styled-components';

import {
  SectionContainer,
  SectionHeading,
  SectionInnerHeading,
} from "../../components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 2rem;
  line-height: 3rem;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionInnerHeading {...props} />
))`
  margin: 0;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: inline-block;
  max-width: 270px;
`;

export const StyledWrapperContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 30px 0px;
  align-items: center;
  justify-content: center;
  gap: 60px;
  background-image: url('/img/background.png');
  background-size: 800px;
  background-position-x: 23%;
  background-position-y: 50px;
  background-repeat: no-repeat;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  padding: 20px
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
