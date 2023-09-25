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
export default function OrganizationsUpdateForm(props) {
  const {
    id: idProp,
    organizations: organizationsModelProp,
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
    phone: "",
    email: "",
    Facebook: "",
    Twitter: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [fleets, setFleets] = React.useState(initialValues.fleets);
  const [latLong, setLatLong] = React.useState(initialValues.latLong);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [Facebook, setFacebook] = React.useState(initialValues.Facebook);
  const [Twitter, setTwitter] = React.useState(initialValues.Twitter);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = organizationsRecord
      ? { ...initialValues, ...organizationsRecord }
      : initialValues;
    setName(cleanValues.name);
    setWebsite(cleanValues.website);
    setFleets(
      typeof cleanValues.fleets === "string"
        ? cleanValues.fleets
        : JSON.stringify(cleanValues.fleets)
    );
    setLatLong(
      typeof cleanValues.latLong === "string"
        ? cleanValues.latLong
        : JSON.stringify(cleanValues.latLong)
    );
    setPhone(cleanValues.phone);
    setEmail(cleanValues.email);
    setFacebook(cleanValues.Facebook);
    setTwitter(cleanValues.Twitter);
    setErrors({});
  };
  const [organizationsRecord, setOrganizationsRecord] = React.useState(
    organizationsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Organizations, idProp)
        : organizationsModelProp;
      setOrganizationsRecord(record);
    };
    queryData();
  }, [idProp, organizationsModelProp]);
  React.useEffect(resetStateValues, [organizationsRecord]);
  const validations = {
    name: [],
    website: [{ type: "URL" }],
    fleets: [{ type: "JSON" }],
    latLong: [{ type: "JSON" }],
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
          name,
          website,
          fleets,
          latLong,
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
          await DataStore.save(
            Organizations.copyOf(organizationsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrganizationsUpdateForm")}
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
      <TextAreaField
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
      ></TextAreaField>
      <TextAreaField
        label="Lat long"
        isRequired={false}
        isReadOnly={false}
        value={latLong}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              fleets,
              latLong: value,
              phone,
              email,
              Facebook,
              Twitter,
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
              name,
              website,
              fleets,
              latLong,
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
              name,
              website,
              fleets,
              latLong,
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
              name,
              website,
              fleets,
              latLong,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || organizationsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || organizationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
