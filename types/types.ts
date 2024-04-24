export interface CardProps {
	id: number;
	image: ImageProps;
	title: string;
	description: string;
}

export interface ImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface MainProps {
	image: ImageProps;
	cardsData: CardProps[];
}

export interface HeroProps {
	image: ImageProps;
	title: string;
	description: string;
	ctaText: string;
}
