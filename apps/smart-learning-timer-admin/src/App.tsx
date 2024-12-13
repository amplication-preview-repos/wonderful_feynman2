import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { FocusSessionList } from "./focusSession/FocusSessionList";
import { FocusSessionCreate } from "./focusSession/FocusSessionCreate";
import { FocusSessionEdit } from "./focusSession/FocusSessionEdit";
import { FocusSessionShow } from "./focusSession/FocusSessionShow";
import { FocusAnalyticsList } from "./focusAnalytics/FocusAnalyticsList";
import { FocusAnalyticsCreate } from "./focusAnalytics/FocusAnalyticsCreate";
import { FocusAnalyticsEdit } from "./focusAnalytics/FocusAnalyticsEdit";
import { FocusAnalyticsShow } from "./focusAnalytics/FocusAnalyticsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Smart Learning Timer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="FocusSession"
          list={FocusSessionList}
          edit={FocusSessionEdit}
          create={FocusSessionCreate}
          show={FocusSessionShow}
        />
        <Resource
          name="FocusAnalytics"
          list={FocusAnalyticsList}
          edit={FocusAnalyticsEdit}
          create={FocusAnalyticsCreate}
          show={FocusAnalyticsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
