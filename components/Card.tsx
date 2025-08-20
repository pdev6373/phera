import clsx from 'clsx';
import Text from './Text';
import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '@/types';

export default function Card({
  text,
  image,
  route,
  bottomData,
  extraDataRoute,
  imageWrapperClassName,
}: CardProps) {
  return (
    <div
      className="
        border border-[#d0d5dd] rounded-[10.37px] bg-white
        p-3 md:p-4 md:pb-5 flex flex-col gap-2 md:gap-[13.62px]
      "
    >
      <div
        className="
        flex flex-col justify-between gap-4 md:gap-[21.62px] h-full
      "
      >
        {image ? (
          <div
            className={clsx(
              'relative w-full aspect-square overflow-hidden',
              imageWrapperClassName,
            )}
          >
            <Image
              src={image}
              alt="article image"
              fill
              className="absolute w-full h-full object-cover rounded-[5.185px]"
            />
          </div>
        ) : null}

        <div
          className="
          flex justify-between items-center gap-[10px] md:gap-4
        "
        >
          <Text
            color="gray-900"
            size="base"
            type="span"
            weight="semi_bold"
            extraStyles={{ textTransform: 'capitalize' }}
          >
            {text}
          </Text>

          <Link href={extraDataRoute || route}>
            <div className="flex items-center justify-center gap-1 px-4 py-1 shadow-[0px_1px_2px_0px_#1018280d] border border-[#d0d5dd] rounded-full [@media(min-width:850px)]:px-[19.5px] [@media(min-width:850px)]:py-[6px]">
              <Text color="gray-600" size="s" type="p" weight="medium">
                Visit
              </Text>
              <Image
                src="/images/svgs/arrow-narrow-up-right.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </div>
          </Link>
        </div>

        {bottomData && (
          <div className="-mt-3 md:-mt-[17.62px]">
            <Text color="gray-600" size="s" type="p" weight="regular">
              {bottomData}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}
