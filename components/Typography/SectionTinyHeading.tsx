import { FC, HTMLAttributes } from "react";
import { StyledSectionTinyHeading } from "./elements";

interface SectionTinyHeadingProps extends HTMLAttributes<HTMLHeadingElement> { }

export const SectionTinyHeading: FC<SectionTinyHeadingProps> = ({ ...props }) => {
  return <StyledSectionTinyHeading {...props} />;
};
