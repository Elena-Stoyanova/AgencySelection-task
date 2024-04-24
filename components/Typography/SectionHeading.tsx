import { FC, HTMLAttributes } from "react";
import { StyledSectionHeading } from "./elements";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> { }

export const SectionHeading: FC<SectionHeadingProps> = ({ ...props }) => {
  return <StyledSectionHeading {...props} />;
};
