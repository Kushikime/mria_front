import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const page404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
};

export default page404;
