'use client';
import { useContext } from 'react';
import { USERS } from '@/api/users';
import Card from '@/components/Card';
import { textToSlug } from './layout';
import { useSearchParams } from 'next/navigation';
import { MainContext } from '@/context/MainContext';

export default function Home() {
  const searchParams = useSearchParams();
  const { search } = useContext(MainContext);

  const category = searchParams.get('category') || 'all';

  const filter = (text: string) =>
    text.toLowerCase().trim().includes(search.toLowerCase().trim());

  return (
    <div className="grid justify-center gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {USERS.filter((user) => filter(user.firstName) || filter(user.lastName))
        .filter(
          (user) => category == 'all' || textToSlug(user.category) == category,
        )
        ?.map((user) => (
          <Card
            key={user?.id}
            text={user?.firstName}
            route={`/users/${user?.id}`}
            image={user?.profilePictureUrl}
            bottomData={`Goal: ${user.goals}`}
            imageWrapperClassName="!aspect-[1.608281727/1]"
          />
        ))}
    </div>
  );
}
