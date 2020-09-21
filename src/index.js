import * as React from "react";

export const ImpersonationsStateHook = (defaultImpersonations) => {
  const [impersonations, setImpersonation] = React.useState(
    defaultImpersonations
  );

  const syncImpersonations = (newImpersonation) => {
    // TODO this will receive whatever the response is from an API Call
    // This should have a full list of the current users impersonations I guess?
    // That might be too much to send back after very call, unless we set limits?
    console.log(newImpersonation);
    setImpersonation([...impersonations, newImpersonation]);
  };

  return [impersonations, syncImpersonations];
};
