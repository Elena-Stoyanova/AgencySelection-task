import styled from 'styled-components';

import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from '~/components';

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 5px;
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
  max-width: 300px;
`;

export const StyledWrapperContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 20px
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-image: url('/img/background.png');
  background-size: 900px;
  background-repeat: no-repeat;
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  padding: 20px
  align-items: center;
  justify-content: center;
  gap: 30px;
`;