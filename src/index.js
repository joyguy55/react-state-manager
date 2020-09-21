import * as React from "react";

export const ImpersonationsStateHook = (defaultImpersonations) => {
  const [impersonations, setImpersonation] = React.useState(
    defaultImpersonations
  );

  const syncImpersonations = (newImpersonation) => {
    setImpersonation([...impersonations, newImpersonation]);
  };

  return [impersonations, syncImpersonations];
};
