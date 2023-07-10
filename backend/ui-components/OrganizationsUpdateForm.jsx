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
    latLong: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    website: "",
    fleets: "",
  };
  const [latLong, setLatLong] = React.useState(initialValues.latLong);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [fleets, setFleets] = React.useState(initialValues.fleets);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = organizationsRecord
      ? { ...initialValues, ...organizationsRecord }
      : initialValues;
    setLatLong(
      typeof cleanValues.latLong === "string"
        ? cleanValues.latLong
        : JSON.stringify(cleanValues.latLong)
    );
    setAddress(
      typeof cleanValues.address === "string"
        ? cleanValues.address
        : JSON.stringify(cleanValues.address)
    );
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setZip(cleanValues.zip);
    setWebsite(cleanValues.website);
    setFleets(cleanValues.fleets);
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
    latLong: [{ type: "JSON" }],
    address: [{ type: "JSON" }],
    city: [],
    state: [],
    zip: [],
    website: [],
    fleets: [],
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
          latLong,
          address,
          city,
          state,
          zip,
          website,
          fleets,
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
      <TextAreaField
        label="Lat long"
        isRequired={false}
        isReadOnly={false}
        value={latLong}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              latLong: value,
              address,
              city,
              state,
              zip,
              website,
              fleets,
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
      <TextAreaField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              latLong,
              address: value,
              city,
              state,
              zip,
              website,
              fleets,
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
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              latLong,
              address,
              city: value,
              state,
              zip,
              website,
              fleets,
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
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              latLong,
              address,
              city,
              state: value,
              zip,
              website,
              fleets,
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
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              latLong,
              address,
              city,
              state,
              zip: value,
              website,
              fleets,
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
              latLong,
              address,
              city,
              state,
              zip,
              website: value,
              fleets,
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
              latLong,
              address,
              city,
              state,
              zip,
              website,
              fleets: value,
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
