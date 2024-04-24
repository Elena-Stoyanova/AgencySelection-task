import { FC, HTMLAttributes } from "react";
import { StyledSectionBigHeading } from "./elements";

interface SectionBigHeadingProps extends HTMLAttributes<HTMLHeadingElement> { }

export const SectionBigHeading: FC<SectionBigHeadingProps> = ({ ...props }) => {
  return <StyledSectionBigHeading {...props} />;
};
