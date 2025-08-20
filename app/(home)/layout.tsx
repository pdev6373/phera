'use client';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@/components/Text';
import { UserCategoryArray } from '@/api/users';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const textToSlug = (text: string) =>
  text.toLowerCase().split(' ').join('-');
export const capitalizeText = (text: string) =>
  text
    .split(' ')
    .map((text) => `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`);

const categories = Array.from(new Set(['all', ...UserCategoryArray])).map(
  (category) => ({
    route: textToSlug(category),
    name: capitalizeText(category),
  }),
);

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || 'all';

  return (
    <div className="flex flex-col gap-3 md:gap-4.5 overflow-x-hidden">
      <section className="flex flex-col gap-4.5 md:gap-7 bg-body-color pb-1.5 overflow-x-hidden">
        {pathname.split('/')?.length <= 2 ? (
          <Text color="gray-900" size="xl2_decimal" weight="bold" type="h3">
            Welcome
          </Text>
        ) : (
          <div
            onClick={router.back}
            className="flex items-center gap-1.5 md:gap-2 cursor-pointer opacity-100 hover:opacity-75 transition-opacity duration-150 ease-in"
          >
            <Image
              src="/images/svgs/arrow-narrow-left.svg"
              alt="back arrow"
              width={32}
              height={32}
            />
            <Text color="gray-600" size="xl" weight="semi_bold" type="h3">
              Back to Dashboard
            </Text>
          </div>
        )}

        <div
          className="overflow-x-hidden"
          style={{
            maxWidth: 'calc(100vw - 40px)',
          }}
        >
          <div className="flex gap-2 overflow-x-auto scroll-x hide-scrollbar">
            {categories.map((cat) => (
              <Link
                key={cat.route}
                href={cat.route === 'all' ? '/' : `/?category=${cat.route}`}
                className={`flex-shrink-0 px-6 py-2 border border-gray-300 shadow-sm rounded-full transition-all duration-100 ease-in-out ${
                  category === cat.route
                    ? 'bg-[#5925dc] border-[#5925dc] text-white'
                    : 'bg-white hover:bg-purple-50'
                }`}
              >
                <Text
                  size="s"
                  color={category === cat.route ? 'white' : 'gray-600'}
                  weight="semi_bold"
                  type="p"
                >
                  {cat.name}
                </Text>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}
