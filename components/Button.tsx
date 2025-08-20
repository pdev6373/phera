import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';

type ButtonType = {
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
  isSubmit?: boolean;
  extraStyles?: CSSProperties;
  children: string | ReactNode;
  type?: 'fill' | 'outline' | 'light';
};

export default function Button({
  onClick,
  children,
  extraStyles,
  loading = false,
  disabled = false,
  type = 'outline',
  isSubmit = false,
}: ButtonType) {
  const base =
    'w-full flex justify-center items-center flex-wrap cursor-pointer transition-all duration-200 ease-in rounded-full font-medium shadow-sm';
  const size = 'px-4 py-3 md:px-[18px] md:py-[15.5px]';
  const disabledStyle = 'disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    fill: `
      bg-[#6938ef] border border-[#6938ef] text-white
      hover:bg-[#6938efcf] hover:border-[#6938efcf]
      disabled:bg-[#d9d6fe] disabled:border-[#d9d6fe]
    `,
    outline: `
      bg-white border border-[#d0d5dd] text-[#344054]
      hover:bg-white hover:border-[#d0d5dd] hover:text-[#344054]
      disabled:bg-[#d9d6fe] disabled:border-[#d9d6fe] disabled:text-white
    `,
    light: `
      bg-[#f4f3ff] border border-[#d9d6fe] text-[#5925dc]
      hover:bg-[#f4f3ff] hover:border-[#d9d6fe] hover:text-[#5925dc]
      disabled:bg-[#d9d6fe] disabled:border-[#d9d6fe] disabled:text-white
    `,
  };

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${size} ${disabledStyle} ${variants[type]}`}
      style={extraStyles}
    >
      {loading ? (
        <div className="flex justify-center items-center m-[2px]">
          <Image
            src={'/images/svgs/spinner.svg'}
            alt="spinner"
            width={20}
            height={20}
            className="hidden md:block"
          />
          <Image
            src={'/images/svgs/spinner.svg'}
            alt="spinner"
            width={18}
            height={18}
            className="block md:hidden"
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
