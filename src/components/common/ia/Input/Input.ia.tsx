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
  | "textarea";

interface SharedInputProps {
  type?: InputTypes;
  name: string;
  label?: string;
  Icon?: React.FC;
  multiple?: boolean;
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
  multiple = false
}) => {
  const { errors, touched, setFieldValue, values } = useFormikContext<
    Record<string, unknown>
  >();

  const errorMessage = errors[name] && touched[name] ? errors[name] : "";

  switch (type) {
    case "date":
      return (
        <Label htmlFor={name} type={type} error={!!errorMessage}>
          <CalendarIcon />
          <Datepicker
            id={name}
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
        <Label htmlFor={name} type={type} error={!!errorMessage}>
          {Icon && <Icon />}
          <input
            id={name}
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
        <Label htmlFor={name} type={type} error={!!errorMessage}>
          <Field as={type} id={name} name={name} placeholder={name} />
          <Text>{label || name}</Text>
          {errorMessage && (
            <Text misc color={color.red} italic>
              {errorMessage}
            </Text>
          )}
        </Label>
      );

    default:
      return (
        <Label htmlFor={name} type={type} error={!!errorMessage}>
          {Icon && <Icon />}
          <Field
            id={name}
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
