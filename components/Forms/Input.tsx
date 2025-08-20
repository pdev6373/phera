'use client';
import {
  Dispatch,
  useState,
  useEffect,
  CSSProperties,
  SetStateAction,
  HTMLInputTypeAttribute,
} from 'react';
import Text from '../Text';
import Image from 'next/image';

type InputType = {
  value: string;
  label?: string;
  isBold?: boolean;
  disabled?: boolean;
  placeholder: string;
  textSmall?: boolean;
  errorMessage?: string;
  extraStyles?: CSSProperties;
  type?: HTMLInputTypeAttribute | 'search';
  setValue: Dispatch<SetStateAction<string>>;
  setErrorMessage?: Dispatch<SetStateAction<string>>;
};

export default function Input({
  label,
  value,
  setValue,
  placeholder,
  extraStyles,
  errorMessage,
  type = 'text',
  isBold = false,
  setErrorMessage,
  disabled = false,
  textSmall = false,
}: InputType) {
  const [isPassword, setIsPassword] = useState(type === 'password');

  useEffect(() => {
    setErrorMessage && setErrorMessage('');
  }, [value]);

  return type === 'search' ? (
    <div className="flex flex-1 items-center gap-[6px] md:gap-2 px-3 md:px-3.5 shadow-sm border border-[#d0d5dd] bg-[#f9fafb] rounded-full overflow-hidden">
      <Image
        src="/images/svgs/search.svg"
        alt="search"
        width={20}
        height={20}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={extraStyles}
        className={`flex-1 bg-inherit border-none outline-none placeholder-[#667085] text-[#667085] font-normal 
          ${
            textSmall
              ? 'text-[10px] leading-4 md:text-[12px] md:leading-[18px]'
              : 'text-sm md:text-base'
          } 
          py-[6px] md:py-2`}
      />
    </div>
  ) : (
    <div>
      <div className="flex flex-col gap-[10px] md:gap-3">
        {label && (
          <Text color="gray-700" size="s" type="p" weight="medium">
            {label}
          </Text>
        )}

        <div className="flex flex-1 justify-between gap-[10px] md:gap-3 px-5 md:px-6 shadow-sm border border-[#d0d5dd] bg-white rounded-full overflow-hidden">
          <input
            type={type === 'password' ? (isPassword ? type : 'text') : type}
            placeholder={placeholder}
            style={extraStyles}
            value={value}
            disabled={disabled}
            onChange={(e) => setValue(e.target.value)}
            className={`
              flex-1 bg-inherit border-none outline-none text-[#101828] 
              ${
                isBold
                  ? 'text-lg md:text-xl font-semibold leading-6 md:leading-[30px]'
                  : ''
              } 
              ${
                textSmall
                  ? 'text-[10px] leading-4 md:text-[12px] md:leading-[18px]'
                  : 'text-xs md:text-sm leading-[18px] md:leading-5'
              } 
              placeholder-[#98a2b3]
              ${disabled ? 'cursor-not-allowed' : ''} 
              py-3 md:py-[17.5px]
            `}
          />

          {type === 'password' && (
            <div
              onClick={() => setIsPassword((prev) => !prev)}
              className="flex justify-center items-center cursor-pointer"
            >
              <Image
                src={
                  isPassword
                    ? '/images/svgs/eye-off.svg'
                    : '/images/svgs/eye.svg'
                }
                alt="password icon"
                width={24}
                height={24}
                className="hidden md:block"
              />
              <Image
                src={
                  isPassword
                    ? '/images/svgs/eye-off.svg'
                    : '/images/svgs/eye.svg'
                }
                alt="password icon"
                width={20}
                height={20}
                className="md:hidden"
              />
            </div>
          )}
        </div>

        {errorMessage && (
          <Text
            color="accent_color"
            size="xs"
            type="p"
            weight="medium"
            extraStyles={{ color: 'brown' }}
          >
            {errorMessage}
          </Text>
        )}
      </div>
    </div>
  );
}
