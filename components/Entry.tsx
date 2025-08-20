'use client';
import { ReactNode, Suspense } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import MainProvider from '@/context/MainContext';

export default function Entry({ children }: { children: ReactNode }) {
  return (
    <MainProvider>
      <div className="flex flex-col grow">
        <Header />

        <div className="flex grow">
          <Suspense fallback={<></>}>
            <Sidebar />
            <div className="flex flex-col grow flex-1 relative z-[100] mb-[69px] px-5 py-[30px] [@media(min-width:850px)]:px-5 [@media(min-width:850px)]:py-10 [@media(min-width:850px)]:mb-0 lg:p-10 [@media(min-width:1250px)]:px-[69px]">
              {children}
            </div>
          </Suspense>
        </div>
      </div>
    </MainProvider>
  );
}
