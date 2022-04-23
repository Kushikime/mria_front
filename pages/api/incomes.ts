import axios from "axios"

export default async function incomes(req: Response, res: Request) {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/incomes`)

    
    console.log(response.data.records)
}

