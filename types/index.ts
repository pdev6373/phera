import { ReactNode } from 'react';

export type CardProps = {
  text: string;
  route: string;
  image: string;
  extraInfo?: string;
  noOfScreens?: string;
  bottomData?: ReactNode;
  extraDataRoute?: string;
  imageWrapperClassName?: string;
};
