import { useSearchParams } from "react-router-dom"

export default function Details() {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    
    return (
        <div>
            {id}
        </div>
    )
}