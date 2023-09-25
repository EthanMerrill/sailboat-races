/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SailingOrganization } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SailingOrganizationUpdateFormInputValues = {
    name?: string;
    website?: string;
    fleets?: string;
    latLong?: string;
    email?: string;
    Facebook?: string;
    Twitter?: string;
    street?: string;
    city?: string;
    phone?: string;
    zip?: number;
    state?: string;
};
export declare type SailingOrganizationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    fleets?: ValidationFunction<string>;
    latLong?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    Facebook?: ValidationFunction<string>;
    Twitter?: ValidationFunction<string>;
    street?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    zip?: ValidationFunction<number>;
    state?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SailingOrganizationUpdateFormOverridesProps = {
    SailingOrganizationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    fleets?: PrimitiveOverrideProps<TextFieldProps>;
    latLong?: PrimitiveOverrideProps<TextAreaFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    Facebook?: PrimitiveOverrideProps<TextFieldProps>;
    Twitter?: PrimitiveOverrideProps<TextFieldProps>;
    street?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SailingOrganizationUpdateFormProps = React.PropsWithChildren<{
    overrides?: SailingOrganizationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sailingOrganization?: SailingOrganization;
    onSubmit?: (fields: SailingOrganizationUpdateFormInputValues) => SailingOrganizationUpdateFormInputValues;
    onSuccess?: (fields: SailingOrganizationUpdateFormInputValues) => void;
    onError?: (fields: SailingOrganizationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SailingOrganizationUpdateFormInputValues) => SailingOrganizationUpdateFormInputValues;
    onValidate?: SailingOrganizationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SailingOrganizationUpdateForm(props: SailingOrganizationUpdateFormProps): React.ReactElement;
