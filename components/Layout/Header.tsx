'use client';
import Text from '../Text';
import Link from 'next/link';
import Image from 'next/image';
import Input from '../Forms/Input';
import { useContext } from 'react';
import { CURRENT_USER } from '@/api/users';
import { MainContext } from '@/context/MainContext';

export default function Header() {
  const user = CURRENT_USER;
  const { search, setSearch } = useContext(MainContext);

  return (
    <header className="border-b border-[#eaecf0] bg-[var(--header-color)] flex justify-between items-center gap-[30px] px-5 sticky top-0 left-0 right-0 z-[1000] h-[72px] shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]">
      <Link
        href="/inspiration/landing-pages"
        className="flex items-center gap-1"
      >
        <Image
          src="/images/svgs/logo-light-blue.svg"
          alt="logo"
          width={25}
          height={25}
        />
        <Text type="p" color="secondary" size="xl_decimal" weight="semi_bold">
          Phera
        </Text>
      </Link>

      <div className="flex-1 max-w-[428px] hidden lg:block">
        <Input
          type="search"
          value={search}
          placeholder="Search"
          setValue={setSearch}
        />
      </div>

      <div className="ml-auto cursor-pointer flex justify-center items-center sm:hidden">
        <Image src="/images/svgs/menu.svg" alt="menu" width={32} height={32} />
      </div>

      <div className="hidden sm:flex items-center gap-3 lg:gap-4">
        <div className="p-2 lg:p-[10px] cursor-pointer">
          <Image
            src="/images/svgs/notification.svg"
            alt="notification"
            width={20}
            height={20}
          />
        </div>

        <div className="bg-[#9b8afb] w-7 lg:w-9 aspect-square rounded-full flex justify-center items-center text-center">
          <Text type="p" color="white" size="s_decimal" weight="semi_bold">
            {`${user?.lastName?.charAt(0)?.toUpperCase()}${user?.firstName
              ?.charAt(0)
              ?.toUpperCase()}`}
          </Text>
        </div>
      </div>
    </header>
  );
}
