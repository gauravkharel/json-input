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

export const Label = ({ children, name }: LabelType) => {
    return <label className="text-xl font-bold text-gray-500" htmlFor={name}>{children}</label>
}


const renderFields = ({ field, register }: RenderFieldsProps) => {
    switch (field.type) {
        case "text":
            return (
                <Flex className="flex-col ">
                    <Label name={field.name}>{field.label}</Label>
                    <input
                        className="px-4 py-2 border-1 rounded-lg font-medium text-gray-500 border-2 border-black"
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
                <Flex className="flex-col ">
                    <Label name={field.name}>{field.label}</Label>
                    <input
                        className="px-4 py-2 border-1 rounded-lg font-medium text-gray-500 border-2 border-black"
                        type="email"
                        {...register(field.name, {
                            required: field.required
                        })}
                        placeholder={field.placeholder}
                    />
                </Flex>
            );
        case "number":
            return (
                <Flex className="flex-col ">
                    <Label name={field.name}>{field.label}</Label>
                    <input
                        className="px-4 py-2 border-1 rounded-lg font-medium text-gray-500 border-2 border-black"
                        type="number"
                        {...register(field.name, {
                            required: field.required,
                            min: field.min,
                            max: field.max,
                        })}
                        placeholder={field.placeholder}
                    />
                </Flex>
            );
        case "textarea":
            return (
                <Flex className="flex-col">
                    <Label name={field.name}>{field.label}</Label>
                    <textarea className="px-4 py-2 border-1 rounded-lg font-medium text-gray-500 border-2 border-black" required={field.required}
                        {...register(field.name,

                            {
                                required: field.required,
                            })}
                        placeholder={field.placeholder}
                        rows={field.rows}
                        cols={field.cols}
                    ></textarea>
                </Flex>
            )

        case "select":
            return (
                <Flex className="flex-col">
                    <Label name={field.name}>{field.label}</Label>
                    <select
                        id={field.name}
                        required={field.required}
                        {...register(field.name, {
                            required: field.required,
                        })}
                        className="p-2 border border-black rounded-lg"
                    >
                        {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </Flex>
            )
        case "radio":
            return (
                <Flex className="flex-col">
                    <Label name={field.name}>{field.label}</Label>
                    {field.options.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value={option.value}
                                {...register(field.name, {
                                    required: field.required,
                                })}
                                required={field.required}
                                className="p-2 border border-black rounded-lg"
                            />
                            <div className="flex flex-col">
                            <span className="text-xl font-medium text-gray-600 ">{option.label}</span>
                            </div>
                        </label>
                    ))}
                </Flex>
            );

        case "date":
            return (
                <Flex className="flex-col">
                    <Label name={field.name}>{field.label}</Label>
                    <input type="date"
                        {...register(field.name, {
                            required: field.required

                        })}
                    >
                    </input>
                </Flex>
            )
        case "file":
            return (
                <Flex className="flex-col">
                    <Label name={field.name}>{field.label}</Label>
                    <input type="file"
                        {...register(field.name, {
                            required: field.required
                        })}
                        accept={field.accept}
                    >

                    </input>
                </Flex>
            )
        case "range":
            return (
                <Flex className="flex-col">
                    <Label name={field.name}>{field.label}</Label>
                    <input type='range'
                        {...register(field.name, {
                            required: field.required,
                            min: field.min,
                            max: field.max,
                        })}
                    >

                    </input>
                </Flex>
            )
        case "time":
            return (
                <Flex className="flex-col">
                    <Label name={field.name}>{field.label}</Label>
                    <input type="time"
                        {...register(field.name, {
                            required: field.required
                        })}
                    >

                    </input>
                </Flex>
            )
        default:
            return "Please re-write this in the given sample format."
    }
}


export default renderFields