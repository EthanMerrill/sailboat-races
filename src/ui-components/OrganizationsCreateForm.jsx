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
import { Organizations } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OrganizationsCreateForm(props) {
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
    address: "",
    city: "",
    state: "",
    zip: "",
    website: "",
    fleets: "",
    name: "",
    phone: "",
    email: "",
    Facebook: "",
    Twitter: "",
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [fleets, setFleets] = React.useState(initialValues.fleets);
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [Facebook, setFacebook] = React.useState(initialValues.Facebook);
  const [Twitter, setTwitter] = React.useState(initialValues.Twitter);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setState(initialValues.state);
    setZip(initialValues.zip);
    setWebsite(initialValues.website);
    setFleets(initialValues.fleets);
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setFacebook(initialValues.Facebook);
    setTwitter(initialValues.Twitter);
    setErrors({});
  };
  const validations = {
    address: [{ type: "JSON" }],
    city: [],
    state: [],
    zip: [],
    website: [{ type: "URL" }],
    fleets: [],
    name: [],
    phone: [{ type: "Phone" }],
    email: [{ type: "Email" }],
    Facebook: [{ type: "URL" }],
    Twitter: [{ type: "URL" }],
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
          address,
          city,
          state,
          zip,
          website,
          fleets,
          name,
          phone,
          email,
          Facebook,
          Twitter,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            website: modelFields.website,
            fleets: modelFields.fleets,
            name: modelFields.name,
            phone: modelFields.phone,
            email: modelFields.email,
            Facebook: modelFields.Facebook,
            Twitter: modelFields.Twitter,
            address: modelFields.address
              ? JSON.parse(modelFields.address)
              : modelFields.address,
          };
          await DataStore.save(new Organizations(modelFieldsToSave));
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
      {...getOverrideProps(overrides, "OrganizationsCreateForm")}
      {...rest}
    >
      <TextAreaField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              city,
              state,
              zip,
              website,
              fleets,
              name,
              phone,
              email,
              Facebook,
              Twitter,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextAreaField>
      <TextField
        label="Label"
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              city: value,
              state,
              zip,
              website,
              fleets,
              name,
              phone,
              email,
              Facebook,
              Twitter,
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
        label="Label"
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              city,
              state: value,
              zip,
              website,
              fleets,
              name,
              phone,
              email,
              Facebook,
              Twitter,
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
      <TextField
        label="Label"
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              city,
              state,
              zip: value,
              website,
              fleets,
              name,
              phone,
              email,
              Facebook,
              Twitter,
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
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              city,
              state,
              zip,
              website: value,
              fleets,
              name,
              phone,
              email,
              Facebook,
              Twitter,
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
              address,
              city,
              state,
              zip,
              website,
              fleets: value,
              name,
              phone,
              email,
              Facebook,
              Twitter,
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
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              city,
              state,
              zip,
              website,
              fleets,
              name: value,
              phone,
              email,
              Facebook,
              Twitter,
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
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              city,
              state,
              zip,
              website,
              fleets,
              name,
              phone: value,
              email,
              Facebook,
              Twitter,
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
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              city,
              state,
              zip,
              website,
              fleets,
              name,
              phone,
              email: value,
              Facebook,
              Twitter,
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
              address,
              city,
              state,
              zip,
              website,
              fleets,
              name,
              phone,
              email,
              Facebook: value,
              Twitter,
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
              address,
              city,
              state,
              zip,
              website,
              fleets,
              name,
              phone,
              email,
              Facebook,
              Twitter: value,
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
