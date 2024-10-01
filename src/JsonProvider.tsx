import { createContext, useContext, useState } from "react"
import { FormSchema } from "./types"

interface JsonContextValue {
    json: FormSchema,
    setJson: React.Dispatch<React.SetStateAction<FormSchema>>;
}
const defaultContextValue: JsonContextValue = {
    json: {
        title: "Your Form",
        fields: []
    },
    setJson: () => { }
}
export const JsonContext = createContext<JsonContextValue>(defaultContextValue)

export const useJson = () => useContext(JsonContext)

export const JsonProvider = ({ children }: { children: React.ReactNode }) => {

    const [json, setJson] = useState<FormSchema>(defaultContextValue.json)

    return <JsonContext.Provider value={{ json, setJson }}>{children}</JsonContext.Provider>
}