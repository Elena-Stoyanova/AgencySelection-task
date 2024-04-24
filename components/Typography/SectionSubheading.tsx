/* eslint-disable react/display-name */
import { HTMLAttributes, forwardRef } from "react";
import { StyledSectionSubheading } from "./elements";

interface SectionSubheadingProps extends HTMLAttributes<HTMLHeadingElement> { }

export const SectionSubheading = forwardRef<HTMLHeadingElement, SectionSubheadingProps>(({ ...props }, ref) => {
  return <StyledSectionSubheading {...props} ref={ref} />;
});
