/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SailingOrganization } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SailingOrganizationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    website: "",
    fleets: "",
    latLong: "",
    email: "",
    Facebook: "",
    Twitter: "",
    street: "",
    city: "",
    phone: "",
    zip: "",
    state: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [fleets, setFleets] = React.useState(initialValues.fleets);
  const [latLong, setLatLong] = React.useState(initialValues.latLong);
  const [email, setEmail] = React.useState(initialValues.email);
  const [Facebook, setFacebook] = React.useState(initialValues.Facebook);
  const [Twitter, setTwitter] = React.useState(initialValues.Twitter);
  const [street, setStreet] = React.useState(initialValues.street);
  const [city, setCity] = React.useState(initialValues.city);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [state, setState] = React.useState(initialValues.state);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setWebsite(initialValues.website);
    setFleets(initialValues.fleets);
    setLatLong(initialValues.latLong);
    setEmail(initialValues.email);
    setFacebook(initialValues.Facebook);
    setTwitter(initialValues.Twitter);
    setStreet(initialValues.street);
    setCity(initialValues.city);
    setPhone(initialValues.phone);
    setZip(initialValues.zip);
    setState(initialValues.state);
    setErrors({});
  };
  const validations = {
    name: [],
    website: [{ type: "URL" }],
    fleets: [],
    latLong: [{ type: "JSON" }],
    email: [{ type: "Email" }],
    Facebook: [{ type: "URL" }],
    Twitter: [{ type: "URL" }],
    street: [],
    city: [],
    phone: [{ type: "Phone" }],
    zip: [],
    state: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          website,
          fleets,
          latLong,
          email,
          Facebook,
          Twitter,
          street,
          city,
          phone,
          zip,
          state,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new SailingOrganization(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SailingOrganizationCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              website,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter,
              street,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website: value,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter,
              street,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="Fleets"
        isRequired={false}
        isReadOnly={false}
        value={fleets}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets: value,
              latLong,
              email,
              Facebook,
              Twitter,
              street,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.fleets ?? value;
          }
          if (errors.fleets?.hasError) {
            runValidationTasks("fleets", value);
          }
          setFleets(value);
        }}
        onBlur={() => runValidationTasks("fleets", fleets)}
        errorMessage={errors.fleets?.errorMessage}
        hasError={errors.fleets?.hasError}
        {...getOverrideProps(overrides, "fleets")}
      ></TextField>
      <TextAreaField
        label="Lat long"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong: value,
              email,
              Facebook,
              Twitter,
              street,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.latLong ?? value;
          }
          if (errors.latLong?.hasError) {
            runValidationTasks("latLong", value);
          }
          setLatLong(value);
        }}
        onBlur={() => runValidationTasks("latLong", latLong)}
        errorMessage={errors.latLong?.errorMessage}
        hasError={errors.latLong?.hasError}
        {...getOverrideProps(overrides, "latLong")}
      ></TextAreaField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email: value,
              Facebook,
              Twitter,
              street,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={Facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email,
              Facebook: value,
              Twitter,
              street,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.Facebook ?? value;
          }
          if (errors.Facebook?.hasError) {
            runValidationTasks("Facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("Facebook", Facebook)}
        errorMessage={errors.Facebook?.errorMessage}
        hasError={errors.Facebook?.hasError}
        {...getOverrideProps(overrides, "Facebook")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={Twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter: value,
              street,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.Twitter ?? value;
          }
          if (errors.Twitter?.hasError) {
            runValidationTasks("Twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("Twitter", Twitter)}
        errorMessage={errors.Twitter?.errorMessage}
        hasError={errors.Twitter?.hasError}
        {...getOverrideProps(overrides, "Twitter")}
      ></TextField>
      <TextField
        label="Street"
        isRequired={false}
        isReadOnly={false}
        value={street}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter,
              street: value,
              city,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.street ?? value;
          }
          if (errors.street?.hasError) {
            runValidationTasks("street", value);
          }
          setStreet(value);
        }}
        onBlur={() => runValidationTasks("street", street)}
        errorMessage={errors.street?.errorMessage}
        hasError={errors.street?.hasError}
        {...getOverrideProps(overrides, "street")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter,
              street,
              city: value,
              phone,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter,
              street,
              city,
              phone: value,
              zip,
              state,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={zip}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter,
              street,
              city,
              phone,
              zip: value,
              state,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong,
              email,
              Facebook,
              Twitter,
              street,
              city,
              phone,
              zip,
              state: value,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
