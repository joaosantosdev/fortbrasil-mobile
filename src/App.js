import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import TabBarMenu from './components/TabBarMenu';

const App = () => {
  return (
      <TabBarMenu/>
  );
};

export default App;
