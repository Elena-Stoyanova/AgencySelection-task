import { ButtonHTMLAttributes, ReactNode, FC } from 'react'
import { StyledButton, StyledButtonText } from "./elements";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  props: any
}
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props as any}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};
