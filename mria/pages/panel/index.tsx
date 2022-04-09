import type { NextPage } from 'next'
import { useRouter } from 'next/router'



const Panel: NextPage = () => {
  
  const router = useRouter();
  const path = router?.asPath;

  return (
    <div>
      <h1>PANEL</h1>
    </div>
  )
}

export default Panel
