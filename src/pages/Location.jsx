import { useParams } from "react-router-dom"

export default function Location() {
    const params = useParams()
    const location = params.location

    const formatted = location.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")


    return (
        <h1>Property Appraiser in {formatted}</h1>
    )
}