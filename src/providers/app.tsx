import { ErrorBoundary } from "@/components/Functional";
import * as React from "react";
import { AuthContextProvider as AuthProvider } from "@/contexts/auth";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // <React.Suspense
    //   fallback={
    //     <div className="flex items-center justify-center w-screen h-screen">
    //       <Spinner size="xl" />
    //     </div>
    //   }
    // >
    <ErrorBoundary>
      {/* state管理 SWR */}
      {/* {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />} */}
      {/* <Notifications /> */}
      <AuthProvider>{children}</AuthProvider>
    </ErrorBoundary>
    // </React.Suspense>
  );
};
