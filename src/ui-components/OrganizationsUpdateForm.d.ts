/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Organizations } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrganizationsUpdateFormInputValues = {
    name?: string;
    website?: string;
    fleets?: string;
    latLong?: string;
    phone?: string;
    email?: string;
    Facebook?: string;
    Twitter?: string;
};
export declare type OrganizationsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    fleets?: ValidationFunction<string>;
    latLong?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    Facebook?: ValidationFunction<string>;
    Twitter?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationsUpdateFormOverridesProps = {
    OrganizationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    fleets?: PrimitiveOverrideProps<TextAreaFieldProps>;
    latLong?: PrimitiveOverrideProps<TextAreaFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    Facebook?: PrimitiveOverrideProps<TextFieldProps>;
    Twitter?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    organizations?: Organizations;
    onSubmit?: (fields: OrganizationsUpdateFormInputValues) => OrganizationsUpdateFormInputValues;
    onSuccess?: (fields: OrganizationsUpdateFormInputValues) => void;
    onError?: (fields: OrganizationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationsUpdateFormInputValues) => OrganizationsUpdateFormInputValues;
    onValidate?: OrganizationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationsUpdateForm(props: OrganizationsUpdateFormProps): React.ReactElement;
