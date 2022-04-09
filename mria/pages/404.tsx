import { useRouter } from "next/router";
import { useEffect } from "react";

const page404 = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/')
    }, [])
    return null
}

export default page404;