// Styled elements for the Card go here
import styled from 'styled-components';

import { SectionTinyHeading, SectionParagraph } from '~/components';

export const StyledSectionCard = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: ${(props) => props.width};
  align-item: center;
  justify-content: center;
  gap: 30px;
  background-color: ${(props) => props.backgroundcolor};
  border: 2px solid transparent;
  border-radius: 7px;
  padding: 15px 30px;

  &:hover {
    border: 2px solid #0070f3;
  }

  @media (max-width: 500px) {
    width: 250px;
  }

  @media (max-width: 375px) {
    padding: 10px 20px;
    gap: 20px;
  }
`;

export const StyledImgContainer = styled(({ ...props }) => <div {...props} />)`
  width: 40px;
  margin: auto;
  display: block;
`;

export const StyledSectionText = styled(({ ...props }) => <div {...props} />)`
  flex: 1;
`;

export const StyledTitle = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  font-weight: 600;
  font-family: Poppins;
  margin: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #0070f3;
  }
`;

export const StyledSectionDescription = styled((props) => (
  <SectionTinyHeading {...props} />
))`
  margin: 0;
`;
