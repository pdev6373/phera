'use client';
import Text from '../Text';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type Nav = {
  icon: string;
  text: string;
  route?: string;
  iconInactive: string;
};

const navs: Nav[] = [
  {
    route: '/',
    text: 'Home',
    icon: '/images/svgs/home.svg',
    iconInactive: '/images/svgs/home-inactive.svg',
  },
  {
    text: 'Users',
    route: '/users',
    icon: '/images/svgs/people.svg',
    iconInactive: '/images/svgs/people-inactive.svg',
  },
  {
    text: 'Bookings',
    route: '/bookings',
    icon: '/images/svgs/book.svg',
    iconInactive: '/images/svgs/book-inactive.svg',
  },
  {
    text: 'History',
    route: '/history',
    icon: '/images/svgs/briefcase.svg',
    iconInactive: '/images/svgs/briefcase-inactive.svg',
  },
  {
    text: 'Settings',
    route: '/settings',
    icon: '/images/svgs/settings.svg',
    iconInactive: '/images/svgs/settings-inactive.svg',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isCurrentNav = (route: string) =>
    pathname === '/'
      ? route === '/'
        ? true
        : false
      : pathname.startsWith(route) && route !== '/'
      ? true
      : false;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[5000] h-[69px] flex-shrink-0 bg-white border-t border-gray-200 md:sticky md:top-[72px] md:left-auto md:right-auto md:bottom-auto md:z-50 md:w-[110px] md:h-[calc(100vh-72px)] md:overflow-y-auto md:pt-[17px]">
      <ul className="flex h-full md:h-fit items-center justify-evenly md:flex-col md:justify-start">
        {navs.map((nav) =>
          nav.route ? (
            <li
              key={nav.text}
              className="w-full h-full flex items-center justify-center"
            >
              <Link
                href={nav.route}
                className={`flex w-full h-full flex-col items-center justify-center gap-2 relative text-center transition-all duration-200 cursor-pointer hover:bg-[#f4f3ff] md:p-6 ${
                  isCurrentNav(nav.route)
                    ? 'bg-[#f4f3ff] before:absolute before:content-[""] before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#5925dc] md:before:left-0 md:before:top-0 md:before:bottom-0 md:before:w-[3px] md:before:h-auto'
                    : ''
                }`}
              >
                <Image
                  src={isCurrentNav(nav.route) ? nav.icon : nav.iconInactive}
                  alt="nav icon"
                  width={22}
                  height={22}
                  className="block md:hidden"
                />
                <Image
                  src={isCurrentNav(nav.route) ? nav.icon : nav.iconInactive}
                  alt="nav icon"
                  width={24}
                  height={24}
                  className="hidden md:block"
                />
                <Text
                  type="p"
                  color={
                    isCurrentNav(nav.route) ? 'accent_color' : 'secondary_light'
                  }
                  size="xs"
                  weight={isCurrentNav(nav.route) ? 'semi_bold' : 'medium'}
                >
                  {nav.text}
                </Text>
              </Link>
            </li>
          ) : (
            <li
              key={nav.text}
              className="flex w-full h-full flex-col items-center justify-center gap-2 text-center transition-all duration-200 cursor-pointer hover:bg-[#f4f3ff] md:p-6"
            >
              <Image
                src={nav.iconInactive}
                alt="nav icon"
                width={22}
                height={22}
                className="block md:hidden"
              />
              <Image
                src={nav.iconInactive}
                alt="nav icon"
                width={24}
                height={24}
                className="hidden md:block"
              />
              <div>
                <Text
                  type="p"
                  color="secondary_light"
                  size="xs"
                  weight="medium"
                >
                  {nav.text}
                </Text>
              </div>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
