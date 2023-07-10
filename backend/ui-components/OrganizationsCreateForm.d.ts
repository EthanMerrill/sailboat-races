/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrganizationsCreateFormInputValues = {
    latLong?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    website?: string;
    fleets?: string;
};
export declare type OrganizationsCreateFormValidationValues = {
    latLong?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    fleets?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationsCreateFormOverridesProps = {
    OrganizationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    latLong?: PrimitiveOverrideProps<TextAreaFieldProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    fleets?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationsCreateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrganizationsCreateFormInputValues) => OrganizationsCreateFormInputValues;
    onSuccess?: (fields: OrganizationsCreateFormInputValues) => void;
    onError?: (fields: OrganizationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationsCreateFormInputValues) => OrganizationsCreateFormInputValues;
    onValidate?: OrganizationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationsCreateForm(props: OrganizationsCreateFormProps): React.ReactElement;
