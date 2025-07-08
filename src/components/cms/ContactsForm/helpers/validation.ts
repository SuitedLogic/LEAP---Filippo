import { TTextField } from "@/components/UI/TextField";
import z from "zod";

type TFieldValidation = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
} | undefined

const createFieldSchema = (validation: TFieldValidation, label: string) => {
    let schema = z.string();

    if (validation?.required) {
        schema = schema.min(1, `${label} is required`);
    }

    if (validation?.minLength) {
        schema = schema.min(validation.minLength, 
            `${label} must be between ${validation.minLength} and ${validation.maxLength} characters`);
    }

    if (validation?.maxLength) {
        schema = schema.max(validation.maxLength, 
            `${label} must be between ${validation.minLength} and ${validation.maxLength} characters`);
    }

    if (validation?.pattern) {
        schema = schema.regex(new RegExp(validation.pattern), 
            `Please provide a valid ${label}`);
    }

    return schema;
};


export const createContactSchema = (fieldsConfig: TTextField[]) => {
    const schemaObject: Record<string, z.ZodString> = {};

    fieldsConfig.forEach(field => {
        schemaObject[field.name] = createFieldSchema(field.validation, field.label);
    });

    return z.object(schemaObject);
};