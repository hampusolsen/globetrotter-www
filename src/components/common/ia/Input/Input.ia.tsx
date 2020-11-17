import { Field, FormikErrors, FormikProps, FormikTouched } from "formik";
import React from "react";
import { color } from "../../../../resources/style/variables.style";
import Text from "../../Text";
import Label from "./Input.styled";

/**
 * Retrieves error message pertaining to specified input field.
 *
 * @param fieldName string
 * @param errors FormikErrors
 * @param touched FormikTouched
 *
 * @returns message string
 */
export function retrieveInputErrorMessage(
  fieldName: string,
  errors: FormikErrors<FormValues>,
  touched: FormikTouched<FormValues>
): string | undefined {
  return errors[fieldName] && touched[fieldName] ? errors[fieldName] : "";
}

type FormValues = Record<string, unknown>;

type InputTypes =
  | "text"
  | "email"
  | "password"
  | "file"
  | "number"
  | "textarea";

interface SharedInputProps {
  type?: InputTypes;
  name: string;
  label?: string;
  Icon?: React.FC;
  multiple?: boolean;
}

type Props = SharedInputProps & FormikProps<FormValues>;

/**
 * Wrapper for Formik's `<Field />`-component.
 *
 * Also renders types _textarea_ and _file_.
 */
const Input: React.FC<Props> = (props) => {
  const {
    name,
    type = "text",
    Icon,
    errors,
    touched,
    label,
    multiple = false,
    setFieldValue
  } = props;
  const error = retrieveInputErrorMessage(name, errors, touched);

  switch (type) {
    case "file":
      return (
        <Label htmlFor={name} type={type} error={!!error}>
          {Icon && <Icon />}
          <input
            id={name}
            name={name}
            type={type}
            multiple={multiple}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const fileList = event.currentTarget.files;

              if (fileList) {
                const passed = fileList.length === 1 ? fileList[0] : fileList;
                setFieldValue(name, passed, true);
              }
            }}
          />
          <Text italic>{label || "Browse files to upload."}</Text>
          {error && (
            <Text misc color={color.red}>
              {error}
            </Text>
          )}
        </Label>
      );

    case "textarea":
      return (
        <Label htmlFor={name} type={type} error={!!error}>
          <Text>{label || name}</Text>
          <Field as={type} id={name} name={name} />
        </Label>
      );

    default:
      return (
        <Label htmlFor={name} type={type} error={!!error}>
          {Icon && <Icon />}
          <Field
            id={name}
            name={name}
            type={type || "text"}
            placeholder={name}
            autoComplete="off"
          />
          <Text>{label || name}</Text>
          {error && (
            <Text misc color={color.red} italic>
              {error}
            </Text>
          )}
        </Label>
      );
  }
};

export default Input;
