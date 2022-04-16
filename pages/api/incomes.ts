import axios from "axios"

export default async function incomes(req: Response, res: Request) {
    const response = await axios.get('http://54.93.88.36:17180/incomes')

    
    console.log(response.data.records)
}

