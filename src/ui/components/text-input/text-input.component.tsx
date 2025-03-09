import type { ComponentProps } from "react";

import type { InputComponent } from "@/types/input-components";

import { Typography } from "../typography/typography.component";
import {
  textInputContainer,
  textInputError,
  textInputRoot,
} from "./text-input.css";

interface TextInputProps<T extends InputComponent> {
  as?: T;
  error?: string;
  inputProps?: ComponentProps<T>;
  placeholder?: string;
}
export function TextInput<T extends InputComponent = "input">(
  props: TextInputProps<T>,
) {
  const hasErrored = props.error != null;
  const Component = props.as ?? "input";
  return (
    <div className={textInputContainer}>
      {/* @ts-expect-error check for a better way to handle this */}
      <Component
        {...props.inputProps}
        placeholder={props?.placeholder ?? " "}
        data-error={hasErrored}
        className={textInputRoot}
      />
      {hasErrored && (
        <Typography className={textInputError} as="p" type="h6">
          {props.error}
        </Typography>
      )}
    </div>
  );
}
