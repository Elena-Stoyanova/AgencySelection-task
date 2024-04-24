import { FC } from 'react';
import Image from 'next/image'
import { CardContainer, CardInfoContainer, CardInnerHeading, CardInnerText, ImageContainer } from "./elements"
import { CardProps } from '../../types/types';

export const Card: FC<{ card: CardProps }> = ({ card }) => {
	const { image, title, description } = card;
	const boldedDescription = description.replace(
		/<b>(.*?)<\/b>/g,
		"<b>$1</b>"
	);
	return (
		<CardContainer >
			<ImageContainer>
				<Image src={image.src} alt={title} width={image.width} height={image.height} />
			</ImageContainer>
			<CardInfoContainer>
				<CardInnerHeading>{card.title}</CardInnerHeading>
				<CardInnerText dangerouslySetInnerHTML={{ __html: boldedDescription }} />
			</CardInfoContainer>
		</CardContainer>
	);
};