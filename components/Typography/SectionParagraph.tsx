import { FC, HtmlHTMLAttributes } from "react";
import { StyledSectionParagraph } from "./elements";

interface SectionParagraphProps extends HtmlHTMLAttributes<HTMLParagraphElement> { };

export const SectionParagraph: FC<SectionParagraphProps> = ({ ...props }) => {
  return <StyledSectionParagraph {...props} />;
};
