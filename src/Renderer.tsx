import { UseFormRegister } from "react-hook-form";
import { FormField } from "./types"
import { Flex } from "@radix-ui/themes";

interface RenderFieldsProps {
    field: FormField;
    register: UseFormRegister<any>;
}

type LabelType = {
    children: string,
    name: string
}

const Label = ({children, name}: LabelType) =>{
    return <label className="text-xl font-bold text-gray-500" htmlFor={name}>{children}</label>
}

const renderFields = ({ field, register }: RenderFieldsProps) => {
    switch (field.type) {
        case "text":
            return (
                <Flex className="flex-col ">
                    <Label name={field.name}>{field.label}</Label>                    
                    <input
                        className="px-4 py-2 border-1 rounded-lg font-medium text-gray-500 "
                        type="text"
                        {...register(field.name, {
                            required: field.required,
                            maxLength: field.maxLength,
                            minLength: field.minLength,
                        })}
                        placeholder={field.placeholder}
                    />
                </Flex>
            );
        case "email":
            return (
                <>
                    <label>{field.label}</label>
                    <input
                        type="email"
                        {...register(field.name, {
                            required: field.required
                        })}
                        placeholder={field.placeholder}
                    />
                </>
            );
        case "textarea":
            return <textarea name={field.name} required={field.required}></textarea>;
        case "select":
            return (
                <>

                </>
            )
        case "radio":
            return (
                <>
                </>
            )
        case "checkbox":
            return (
                <>
                </>
            )
        case "date":
            return (
                <>
                </>
            )
        case "file":
            return (
                <>
                </>
            )
        case "range":
            return (
                <>

                </>
            )
        case "time":
            return (
                <>
                </>
            )
        default:
            return "Please re-write this in the given sample format."
    }
}


export default renderFields