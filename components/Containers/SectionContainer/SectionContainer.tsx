import { FC, HTMLAttributes } from "react";
import { StyledSectionContainer } from "./elements";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> { }

export const SectionContainer: FC<SectionContainerProps> = ({ ...props }) => {
  return <StyledSectionContainer {...props} />;
};
