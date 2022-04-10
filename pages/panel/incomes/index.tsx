import type { NextPage } from 'next'
import { useRouter } from 'next/router'



const Test: NextPage = () => {

  const router = useRouter();
  const path = router?.asPath;

  return (
    <div>
      <h1>Incomes</h1>
    </div>
  )
}

export default Test
