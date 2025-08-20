import clsx from 'clsx';
import { CSSProperties, ReactNode } from 'react';

type TextType = {
  size:
    | 's'
    | 'l'
    | 'xs'
    | 'xl'
    | 'xl2'
    | 'xl3'
    | 'xl4'
    | 'base'
    | 's_decimal'
    | 'xl_decimal'
    | 'xl2_decimal';
  color:
    | 'blue'
    | 'white'
    | 'primary'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800'
    | 'gray-900'
    | 'secondary'
    | 'purple-500'
    | 'purple-700'
    | 'purple-950'
    | 'accent_color'
    | 'secondary_light'
    | 'secondary_medium';
  underline?: boolean;
  headingText?: boolean;
  underlineInactive?: boolean;
  extraStyles?: CSSProperties;
  children: string | ReactNode;
  type: 'p' | 'span' | 'h1' | 'h2' | 'h3';
  weight: 'regular' | 'medium' | 'semi_bold' | 'bold';
};

export default function Text({
  size,
  type,
  color,
  weight,
  children,
  extraStyles,
  underline = false,
  headingText = false,
  underlineInactive = false,
}: TextType) {
  const textStyles = clsx(
    'transition ease-in duration-150',
    {
      regular: 'font-normal',
      medium: 'font-medium',
      semi_bold: 'font-semibold',
      bold: 'font-bold',
    }[weight],
    {
      primary: 'text-[var(--primary-color)]',
      secondary_light: 'text-[var(--secondary-color-light)]',
      secondary: 'text-[var(--secondary-color)]',
      secondary_medium: 'text-[var(--secondary-color-medium)]',
      accent_color: 'text-[var(--accent-color)]',
      white: 'text-white',
      blue: 'text-[var(--blue-color)]',
      'gray-500': 'text-gray-500',
      'gray-600': 'text-gray-600',
      'gray-700': 'text-gray-700',
      'gray-800': 'text-gray-800',
      'gray-900': 'text-gray-900',
      'purple-500': 'text-purple-500',
      'purple-700': 'text-purple-700',
      'purple-950': 'text-purple-950',
    }[color],
    underline && 'border-b-2 border-purple-700 pb-[6px] md:pb-[8px]',
    underlineInactive && 'border-b-2 border-transparent pb-[6px] md:pb-[8px]',
    headingText &&
      'hover:text-[#5925dcd8] hover:transition-colors hover:duration-150',
    {
      xs: 'text-[10px] leading-4 md:text-[12px] md:leading-[18px]',
      s: 'text-[12px] leading-[18px] md:text-[14px] md:leading-5',
      s_decimal:
        'text-[12px] leading-[18px] md:text-[14.4px] md:leading-[21.6px]',
      base: 'text-[14.4px] leading-[21.6px] md:text-[16px] md:leading-6',
      l: 'text-[16px] leading-6 md:text-[18px] md:leading-[29.98px]',
      xl: 'text-[16px] leading-6 md:text-[20px] md:leading-[30px]',
      xl_decimal:
        'text-[18px] leading-[29.98px] md:text-[20.45px] md:leading-[24.75px]',
      xl2: 'text-[18px] leading-[29.98px] md:text-[24px] md:leading-8',
      xl2_decimal:
        'text-[18px] leading-[29.98px] md:text-[24.61px] md:leading-[29.79px]',
      xl3: 'text-2xl leading-8 md:text-[28px] md:leading-[33.89px]',
      xl4: 'text-[28px] leading-[33.89px] md:text-[30px] md:leading-[38px]',
    }[size],
  );

  const Component = type;
  return (
    <Component className={textStyles} style={extraStyles}>
      {children}
    </Component>
  );
}
