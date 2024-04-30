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
    image: { src: '/img/cardImg1.png', alt: '', width: 40, height: 40 },
    title: 'Brief',
    description:
      'Complete <b>brief writing or simple guidance</b> on what to include, we ve got you covered',
    backgroundColor: '#f9f9f9',
    width: '370px',
  },
  {
    id: 2,
    image: { src: '/img/cardImg2.png', alt: '', width: 40, height: 40 },
    title: 'Search',
    description:
      'In-depth agency search covering; <b>criteria matching, </b>door knocking and due-dilligence vetting.',
    backgroundColor: '#f5f5f5',
    width: '395px',
  },
  {
    id: 3,
    image: { src: '/img/cardImg3.png', alt: '', width: 40, height: 40 },
    title: 'Pitch',
    description:
      'Comprehensive <b>pitch management,</b> including cooms, diary management and pitch hosting.',
    backgroundColor: '#f1f1f1',
    width: '420px',
  },
];

export const AgencySelection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>parse{description}</StyledDescription>
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
