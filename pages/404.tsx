import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Page404: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
};

export default Page404;
