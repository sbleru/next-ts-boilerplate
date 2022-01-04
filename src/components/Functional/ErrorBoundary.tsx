import * as React from "react";
import { Component, ReactNode } from "react";

class ErrorBoundaryComponent extends Component<{
  FallbackComponent: (err: any) => ReactNode;
}> {
  state: { error: any } = {
    error: null,
  };
  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }
  render() {
    if (this.state.error) {
      return this.props.FallbackComponent(this.state.error);
    }
    return this.props.children;
  }
}

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <p
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </p>
    </div>
  );
};

export const ErrorBoundary: React.FC = (props) => {
  return (
    <ErrorBoundaryComponent FallbackComponent={ErrorFallback}>
      {props.children}
    </ErrorBoundaryComponent>
  );
};
