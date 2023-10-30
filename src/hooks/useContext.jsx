import { useContext } from "react"
import { contactContext } from "../context/contactContext"

export const useContact=()=>{
    return useContext(contactContext)
}