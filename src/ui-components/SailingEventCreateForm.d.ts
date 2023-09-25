/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SailingEventCreateFormInputValues = {
    name?: string;
    link?: string;
    date?: string;
    description?: string;
    series?: boolean;
    dayOfWeek?: string;
    type?: string;
    weeklyEvent?: boolean;
    startDate?: string;
    endDate?: string;
};
export declare type SailingEventCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    series?: ValidationFunction<boolean>;
    dayOfWeek?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    weeklyEvent?: ValidationFunction<boolean>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SailingEventCreateFormOverridesProps = {
    SailingEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    series?: PrimitiveOverrideProps<SwitchFieldProps>;
    dayOfWeek?: PrimitiveOverrideProps<SelectFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    weeklyEvent?: PrimitiveOverrideProps<SwitchFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SailingEventCreateFormProps = React.PropsWithChildren<{
    overrides?: SailingEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SailingEventCreateFormInputValues) => SailingEventCreateFormInputValues;
    onSuccess?: (fields: SailingEventCreateFormInputValues) => void;
    onError?: (fields: SailingEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SailingEventCreateFormInputValues) => SailingEventCreateFormInputValues;
    onValidate?: SailingEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function SailingEventCreateForm(props: SailingEventCreateFormProps): React.ReactElement;
