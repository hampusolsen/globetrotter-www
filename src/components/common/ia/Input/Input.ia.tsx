import { Field, FormikErrors, FormikProps, FormikTouched } from "formik";
import React from "react";
import styled from "styled-components";
import { color, media } from "../../../../resources/style/variables.style";
import Text from "../../Text";

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

interface StyleProps {
  error?: boolean;
  type: string;
}

const Label = styled.label<StyleProps>`
  position: relative;
  display: inline-block;
  height: 36px;
  min-width: 220px;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 22px;
  background-color: whitesmoke;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${(props) => (props.error ? color.red : "grey")};
  ${({ type }) =>
    type === "file" &&
    `
    margin-top: 0;
    pointer: cursor;
  `}

  svg {
    position: absolute;
    left: 0;
    padding: 5.5px 14px;
    background-color: ${color.blue};
    fill: white;
    border-radius: 4px;
  }

  input[type="file"] {
    visibility: hidden;

    + p {
      font-size: 14px;
      transform: translate(54px, -50%);
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: none;
    outline: none;
    border: none;
    padding-left: 8px;

    &::placeholder {
      visibility: hidden;
    }

    &:placeholder-shown + p {
      transform: translateY(-50%);
      font-size: 14px;
    }

    &:focus + p,
    &:active + p {
      transform: translateY(-32px);
      font-size: 10px;

      ${media.tablet} {
        transform: translateY(-34px);
        font-size: 12px;
      }
    }
  }

  p {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-32px);
    font-size: 10px;
    color: ${(props) => (props.error ? color.red : "black")};
    transition: 0.18s;
    text-transform: capitalize;

    ${media.tablet} {
      font-size: 12px;
    }
  }

  span {
    position: absolute;
    bottom: -16px;
    left: 4px;
  }
`;

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
        <label htmlFor={name}>
          <Text>{label || name}</Text>
          <Field as={type} id={name} name={name} />
        </label>
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
