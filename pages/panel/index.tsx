import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react';



const Panel: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/panel/expenses');
  }, []);

  return null;
}

export default Panel
