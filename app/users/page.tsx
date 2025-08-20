'use client';
import Card from '@/components/Card';
import { USERS } from '@/api/users';
import { useSearchParams } from 'next/navigation';
import { textToSlug } from '../(home)/layout';
import { useContext } from 'react';
import { MainContext } from '@/context/MainContext';

export default function Users() {
  const searchParams = useSearchParams();
  const { search } = useContext(MainContext);

  const category = searchParams.get('category') || 'all';

  const filter = (text: string) =>
    text.toLowerCase().trim().includes(search.toLowerCase().trim());

  return (
    <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(20em,100%),1fr))] md:gap-6 [@media(min-width:1500px)]:[grid-template-columns:repeat(auto-fit,minmax(min(22em,100%),1fr))]">
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
