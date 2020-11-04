import React, { Component, ErrorInfo, FC, ReactNode } from "react";
import ErrorView from "../components/views/Error/Error.view";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  stack: string;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      stack: "",
      message: ""
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      stack: error.stack || "",
      message: error.message
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);

    /**
     * @TODO Log error in database
     */
  }

  render(): FC | ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorView stack={this.state.stack} message={this.state.message} />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
