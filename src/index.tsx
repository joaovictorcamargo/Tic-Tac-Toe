import React from "react";
import { AppBoostrap } from "@components";
import { ReactElement } from "react";
import Navigator from "@config/navigator";

export default function App(): ReactElement {
  return (
    <AppBoostrap>
      <Navigator />
    </AppBoostrap>
  );
}
