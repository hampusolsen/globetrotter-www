import { Field, useFormikContext } from "formik";
import React from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { color } from "../../../../resources/style/variables.style";
import CalendarIcon from "../../icons/Calendar.icon";
import Text from "../../Text";
import Label from "./Input.styled";

type InputTypes =
  | "text"
  | "email"
  | "password"
  | "file"
  | "number"
  | "date"
  | "textarea"
  | "radio";

interface SharedInputProps {
  type?: InputTypes;
  name: string;
  label?: string;
  Icon?: React.FC;
  multiple?: boolean;
  value?: string;
}

/**
 * Wrapper for Formik's `<Field />`-component.
 *
 * Also renders types _textarea_ and _file_.
 */
const Input: React.FC<SharedInputProps> = ({
  name,
  type = "text",
  Icon,
  label,
  multiple = false,
  value
}) => {
  const { errors, touched, setFieldValue, values } = useFormikContext<
    Record<string, unknown>
  >();

  const errorMessage = errors[name] && touched[name] ? errors[name] : "";

  switch (type) {
    case "date":
      return (
        <Label type={type} error={!!errorMessage}>
          <CalendarIcon />
          <Datepicker
            name={name}
            selected={values[name] as Date}
            onChange={(date) => setFieldValue(name, date)}
          />
          <Text italic>{label || name}</Text>
          {values[name] && (
            <Text className="readable-date">
              {(values[name] as Date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </Text>
          )}
          {errorMessage && (
            <Text misc color={color.red}>
              {errorMessage}
            </Text>
          )}
        </Label>
      );

    case "file": {
      const label = multiple
        ? "Browse files to upload"
        : "Choose file to upload";

      return (
        <Label type={type} error={!!errorMessage}>
          {Icon && <Icon />}
          <input
            name={name}
            type={type}
            multiple={multiple}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const fileList = event.currentTarget.files;

              if (fileList) {
                const value = multiple
                  ? ((values[name] || []) as File[]).concat([...fileList])
                  : fileList[0];

                setFieldValue(name, value, true);
              }
            }}
          />
          <Text italic>{label}</Text>
          {errorMessage && (
            <Text misc color={color.red}>
              {errorMessage}
            </Text>
          )}
        </Label>
      );
    }

    case "textarea":
      return (
        <Label type={type} error={!!errorMessage}>
          <Field as={type} name={name} placeholder={name} />
          <Text>{label || name}</Text>
          {errorMessage && (
            <Text misc color={color.red} italic>
              {errorMessage}
            </Text>
          )}
        </Label>
      );

    case "radio":
      return (
        <Label type={type}>
          <Field type={type} name={name} value={value} />
          <Text>{label || "label required"}</Text>
        </Label>
      );

    default:
      return (
        <Label type={type} error={!!errorMessage}>
          {Icon && <Icon />}
          <Field
            name={name}
            type={type || "text"}
            placeholder={name}
            autoComplete="off"
          />
          <Text>{label || name}</Text>
          {errorMessage && (
            <Text misc color={color.red} italic>
              {errorMessage}
            </Text>
          )}
        </Label>
      );
  }
};

export default Input;
