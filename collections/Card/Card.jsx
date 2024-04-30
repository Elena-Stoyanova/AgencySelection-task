// The Card to be exported goes here
import Image from 'next/image';
import Link from 'next/link';
import {
  StyledSectionCard,
  StyledSectionText,
  StyledImgContainer,
  StyledTitle,
  StyledSectionDescription,
} from './elements';
import parse from 'html-react-parser';

export const Card = ({ icon, title, description, link, ...props }) => {
  return (
    <StyledSectionCard {...props}>
      <StyledImgContainer>
        <Image
          objectFit='contain'
          layout='responsive'
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      </StyledImgContainer>
      <StyledSectionText>
        <Link href={link}>
          <StyledTitle>{title}</StyledTitle>
        </Link>
        <StyledSectionDescription>
          {parse(description)}
        </StyledSectionDescription>
      </StyledSectionText>
    </StyledSectionCard>
  );
};
