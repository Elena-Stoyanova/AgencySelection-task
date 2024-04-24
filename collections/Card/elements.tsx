import { HTMLAttributes } from 'react';
import styled from 'styled-components'

export const CardContainer = styled((props: HTMLAttributes<HTMLDivElement>) => <div {...props} />)`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 7rem;
  border-radius: 10px;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid #006EFD;
    color: #006EFD;
    cursor: pointer;
}
`;

export const CardInnerHeading = styled((props: HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} />)`
  font-family: Poppins;
  font-weight: 700;
  font-size: 1.20rem;
  margin-bottom: 0;

${CardContainer}:hover & {
	text-decoration: underline;
}
`;

export const CardInnerText = styled((props: HTMLAttributes<HTMLParagraphElement>) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: black;
	margin-top: 5px;

  b {
    font-weight: bold;
  }
`;

export const CardInfoContainer = styled((props: HTMLAttributes<HTMLDivElement>) => <div {...props} />)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`;

export const ImageContainer = styled((props: HTMLAttributes<HTMLDivElement>) => <div {...props} />)`
  display: flex;
  max-width: 5rem;
  max-height: 5rem;
  width: 75%;
  height: 75%;
  justify-content: center;
  align-self: center;
  padding: 2rem;
`;
