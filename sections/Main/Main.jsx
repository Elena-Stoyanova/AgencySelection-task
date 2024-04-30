import Image from 'next/image';
import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledWrapperContainer,
  StyledCardContainer,
} from './elements';
import { Card } from '../../collections/Card/Card';

const cardProps = [
  {
    id: 1,
    icon: { src: '/img/iconCard1.png', alt: '', width: 64, height: 64 },
    title: 'Brief',
    description:
      'Complete <span style="font-weight: 600" >brief writing or simple guidance</span> on what to include, we ve got you covered.',
    backgroundcolor: '#f9f9f9',
    width: '260px',
    link: '',
  },
  {
    id: 2,
    icon: { src: '/img/iconCard2.png', alt: '', width: 64, height: 64 },
    title: 'Search',
    description:
      'In-depth agency search covering; <span style="font-weight: 600" >criteria matching, </span>door knocking and due-dilligence vetting.',
    backgroundcolor: '#f5f5f5',
    width: '285px',
    link: '',
  },
  {
    id: 3,
    icon: { src: '/img/iconCard3.png', alt: '', width: 64, height: 64 },
    title: 'Pitch',
    description:
      'Comprehensive <span style="font-weight: 600" >pitch management,</span> including cooms, diary management and pitch hosting.',
    backgroundcolor: '#f1f1f1',
    width: '310px',
    link: '',
  },
];

export const Main = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledWrapperContainer>
        <StyledImageContainer>
          <Image
            objectFit='contain'
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledCardContainer>
          {cardProps.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </StyledCardContainer>
      </StyledWrapperContainer>
    </StyledContainer>
  );
};
