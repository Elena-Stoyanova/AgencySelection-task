// The Card to be exported goes here
import Image from 'next/image';
import {
  StyledSectionCard,
  StyledSectionText,
  StyledImgContainer,
  StyledTitle,
  StyledSectionDescription,
} from './elements';
import parse from 'html-react-parser';

export const Card = ({ image, title, description, ...props }) => {

  return (
    <StyledSectionCard {...props}>
      <StyledImgContainer>
        <Image
          objectFit='contain'
          layout='responsive'
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImgContainer>
      <StyledSectionText>
        <StyledTitle>{title}</StyledTitle>
        <StyledSectionDescription>
       {parse(description)}
        </StyledSectionDescription>
      </StyledSectionText>
    </StyledSectionCard>
  );
};
