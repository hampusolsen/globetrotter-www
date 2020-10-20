import React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  filled?: boolean;
  outlined?: boolean;
  text?: boolean;
}
