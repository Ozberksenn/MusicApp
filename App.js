import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "./src/redux/Store";
import TabBar from "./src/components/TabBar/TabBar";

import SignIn from "./src/Login/SignIn/Signin";
import Signup from "./src/Login/SignUp/Signup";

import Home from "./src/Main/Home/Home";
import FeaturedDetail from "./src/Main/Home/FeaturedDetail/FeaturedDetail";
import Search from "./src/Main/Search/Search";

import Profile from "./src/Main/Profile/Profile";
import ProfileDetail from "./src/Main/Profile/ProfileDetail/ProfileDetail";
import Theme from "./src/Main/Profile/Theme/Theme";
import EditProfile from "./src/Main/Profile/EditProfile/EditProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Login = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};

const Content = () => {
  const [localData, setLocalData] = useState(null);
  const { userInfo } = useSelector((state) => state.user);
  const getLocal = async () => {
    const response = await AsyncStorage.getItem("userKey");
    const local = response ? JSON.parse(response) : null;
    setLocalData(local);
    console.log("control", local);
  };
  useEffect(() => {
    getLocal();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!localData ? (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
          <Stack.Screen name="Theme" component={Theme} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="FeaturedDetail" component={FeaturedDetail} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Content />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
