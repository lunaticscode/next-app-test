import React, { ErrorInfo, ReactNode, useContext } from "react";
import ErrorFallback from "./ErrorFallback";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    console.log("getDerivedStateFromError :::", error);
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("componentDidCatch :::", error);
    // You can use your own error logging service here
    // console.error(error.cause, error.message);
    // console.error("componentStack" in errorInfo && errorInfo["componentStack"]);
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || <ErrorFallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
