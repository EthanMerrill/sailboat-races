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
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SailingEvent } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SailingEventCreateForm(props) {
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
    link: "",
    date: "",
    description: "",
    series: false,
    dayOfWeek: "",
    type: "",
    weeklyEvent: false,
    startDate: "",
    endDate: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [link, setLink] = React.useState(initialValues.link);
  const [date, setDate] = React.useState(initialValues.date);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [series, setSeries] = React.useState(initialValues.series);
  const [dayOfWeek, setDayOfWeek] = React.useState(initialValues.dayOfWeek);
  const [type, setType] = React.useState(initialValues.type);
  const [weeklyEvent, setWeeklyEvent] = React.useState(
    initialValues.weeklyEvent
  );
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setLink(initialValues.link);
    setDate(initialValues.date);
    setDescription(initialValues.description);
    setSeries(initialValues.series);
    setDayOfWeek(initialValues.dayOfWeek);
    setType(initialValues.type);
    setWeeklyEvent(initialValues.weeklyEvent);
    setStartDate(initialValues.startDate);
    setEndDate(initialValues.endDate);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    link: [],
    date: [],
    description: [],
    series: [],
    dayOfWeek: [],
    type: [],
    weeklyEvent: [],
    startDate: [],
    endDate: [],
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
          link,
          date,
          description,
          series,
          dayOfWeek,
          type,
          weeklyEvent,
          startDate,
          endDate,
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
          await DataStore.save(new SailingEvent(modelFields));
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
      {...getOverrideProps(overrides, "SailingEventCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              link,
              date,
              description,
              series,
              dayOfWeek,
              type,
              weeklyEvent,
              startDate,
              endDate,
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
        label="Link"
        isRequired={false}
        isReadOnly={false}
        value={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              link: value,
              date,
              description,
              series,
              dayOfWeek,
              type,
              weeklyEvent,
              startDate,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date: value,
              description,
              series,
              dayOfWeek,
              type,
              weeklyEvent,
              startDate,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date,
              description: value,
              series,
              dayOfWeek,
              type,
              weeklyEvent,
              startDate,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SwitchField
        label="Series"
        defaultChecked={false}
        isDisabled={false}
        isChecked={series}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date,
              description,
              series: value,
              dayOfWeek,
              type,
              weeklyEvent,
              startDate,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.series ?? value;
          }
          if (errors.series?.hasError) {
            runValidationTasks("series", value);
          }
          setSeries(value);
        }}
        onBlur={() => runValidationTasks("series", series)}
        errorMessage={errors.series?.errorMessage}
        hasError={errors.series?.hasError}
        {...getOverrideProps(overrides, "series")}
      ></SwitchField>
      <SelectField
        label="Day of week"
        placeholder="Please select an option"
        isDisabled={false}
        value={dayOfWeek}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date,
              description,
              series,
              dayOfWeek: value,
              type,
              weeklyEvent,
              startDate,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.dayOfWeek ?? value;
          }
          if (errors.dayOfWeek?.hasError) {
            runValidationTasks("dayOfWeek", value);
          }
          setDayOfWeek(value);
        }}
        onBlur={() => runValidationTasks("dayOfWeek", dayOfWeek)}
        errorMessage={errors.dayOfWeek?.errorMessage}
        hasError={errors.dayOfWeek?.hasError}
        {...getOverrideProps(overrides, "dayOfWeek")}
      >
        <option
          children="Monday"
          value="MONDAY"
          {...getOverrideProps(overrides, "dayOfWeekoption0")}
        ></option>
        <option
          children="Tuesday"
          value="TUESDAY"
          {...getOverrideProps(overrides, "dayOfWeekoption1")}
        ></option>
        <option
          children="Wednesday"
          value="WEDNESDAY"
          {...getOverrideProps(overrides, "dayOfWeekoption2")}
        ></option>
        <option
          children="Thursday"
          value="THURSDAY"
          {...getOverrideProps(overrides, "dayOfWeekoption3")}
        ></option>
        <option
          children="Friday"
          value="FRIDAY"
          {...getOverrideProps(overrides, "dayOfWeekoption4")}
        ></option>
        <option
          children="Saturday"
          value="SATURDAY"
          {...getOverrideProps(overrides, "dayOfWeekoption5")}
        ></option>
        <option
          children="Sunday"
          value="SUNDAY"
          {...getOverrideProps(overrides, "dayOfWeekoption6")}
        ></option>
      </SelectField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date,
              description,
              series,
              dayOfWeek,
              type: value,
              weeklyEvent,
              startDate,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Distance race"
          value="DISTANCE_RACE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Pursuit race"
          value="PURSUIT_RACE"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Around cans"
          value="AROUND_CANS"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
      </SelectField>
      <SwitchField
        label="Weekly event"
        defaultChecked={false}
        isDisabled={false}
        isChecked={weeklyEvent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date,
              description,
              series,
              dayOfWeek,
              type,
              weeklyEvent: value,
              startDate,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.weeklyEvent ?? value;
          }
          if (errors.weeklyEvent?.hasError) {
            runValidationTasks("weeklyEvent", value);
          }
          setWeeklyEvent(value);
        }}
        onBlur={() => runValidationTasks("weeklyEvent", weeklyEvent)}
        errorMessage={errors.weeklyEvent?.errorMessage}
        hasError={errors.weeklyEvent?.hasError}
        {...getOverrideProps(overrides, "weeklyEvent")}
      ></SwitchField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date,
              description,
              series,
              dayOfWeek,
              type,
              weeklyEvent,
              startDate: value,
              endDate,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              link,
              date,
              description,
              series,
              dayOfWeek,
              type,
              weeklyEvent,
              startDate,
              endDate: value,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
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
