/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SailingEvent } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SailingEventUpdateFormInputValues = {
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
export declare type SailingEventUpdateFormValidationValues = {
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
export declare type SailingEventUpdateFormOverridesProps = {
    SailingEventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type SailingEventUpdateFormProps = React.PropsWithChildren<{
    overrides?: SailingEventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sailingEvent?: SailingEvent;
    onSubmit?: (fields: SailingEventUpdateFormInputValues) => SailingEventUpdateFormInputValues;
    onSuccess?: (fields: SailingEventUpdateFormInputValues) => void;
    onError?: (fields: SailingEventUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SailingEventUpdateFormInputValues) => SailingEventUpdateFormInputValues;
    onValidate?: SailingEventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SailingEventUpdateForm(props: SailingEventUpdateFormProps): React.ReactElement;
