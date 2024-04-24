import { HTMLAttributes } from "react";
import styled from "styled-components";

interface StyledSectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  topMargin?: number;
  bottomMargin?: number;
}

export const StyledSectionContainer = styled.div<StyledSectionContainerProps>`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
