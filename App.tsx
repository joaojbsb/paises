import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Home';
import { Details } from './src/Details';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>

      <StatusBar style="light"  translucent />
      <Routes />
    </>
  );
}
