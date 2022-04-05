import React from "react";
import { AppBoostrap } from "@components";
import { ReactElement } from "react";
import Navigator from "@config/navigator";
import { SettingsProvider } from "@contexts/settings-context";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

export default function App(): ReactElement {
  return (
    <AppBoostrap>
      <SettingsProvider>
        <Navigator />
      </SettingsProvider>
    </AppBoostrap>
  );
}
