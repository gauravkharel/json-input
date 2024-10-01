// type generated using chatgpt
type TextInput = {
    name: string;
    type: "text" | "email" | "textarea" | "password";
    label: string;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    rows?: number; 
    cols?: number;
};

// Select input (Dropdown)
type SelectInput = {
    name: string;
    type: 'select';
    label: string;
    required: boolean;
    options: { label: string; value: string }[];
};

// Radio button
type RadioInput = {
    name: string;
    type: 'radio';
    label: string;
    required: boolean;
    options: { label: string; value: string }[];
};

// Checkbox
type CheckboxInput = {
    name: string;
    type: 'checkbox';
    label: string;
    required: boolean;
};

// Checkbox group
type CheckboxGroupInput = {
    name: string;
    type: 'checkbox-group';
    label: string;
    required: boolean;
    options: { label: string; value: string }[];
};

// Number input
type NumberInput = {
    name: string;
    type: 'number';
    label: string;
    placeholder?: string;
    required: boolean;
    min?: number;
    max?: number;
};

// Date input
type DateInput = {
    name: string;
    type: 'date';
    label: string;
    required: boolean;
};

// File input
type FileInput = {
    name: string;
    type: 'file';
    label: string;
    required: boolean;
    accept?: string;
};

// Range input (Slider)
type RangeInput = {
    name: string;
    type: 'range';
    label: string;
    required: boolean;
    min: number;
    max: number;
    step?: number;
};

// Time input
type TimeInput = {
    name: string;
    type: 'time';
    label: string;
    required: boolean;
};



export type FormField =
    | TextInput
    | SelectInput
    | RadioInput
    | CheckboxInput
    | CheckboxGroupInput
    | NumberInput
    | DateInput
    | FileInput
    | RangeInput
    | TimeInput;


export type FormSchema = {
    title: string;
    subtitle?: string;
    fields: FormField[];
};
