import { FC, HTMLAttributes } from "react";
import { StyledSectionInnerHeading } from "./elements";

interface SectionInnerHeadingProps extends HTMLAttributes<HTMLHeadingElement> { };

export const SectionInnerHeading: FC<SectionInnerHeadingProps> = ({ ...props }) => {
  return <StyledSectionInnerHeading {...props} />;
};
