// Styled elements for the Card go here
import styled from 'styled-components';

import { SectionTinyHeading, SectionParagraph } from '~/components';

export const StyledSectionCard = styled(
  ({ backgroundColor, width, ...props }) => <div {...props} />
)`
  display: flex;
  width: ${(props) => props.width};
  align-item: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  padding: 10px;
  
  &:hover {
    border: 2px solid Blue;
  }
`;

export const StyledImgContainer = styled(({ ...props }) => <div {...props} />)`
  width: 70px;
`;

export const StyledSectionText = styled(({ ...props }) => <div {...props} />)`
  background-color: pink;
`;

export const StyledTitle = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  font-weight: bold;
  margin: 0;
`;

export const StyledSectionDescription = styled((props) => (
  <SectionTinyHeading {...props} />
))`
  margin: 0;
`;
