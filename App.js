import React from 'react';

//screens 
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

// React Navigation stack
import RootStack from  './navigators/RootStack';

export default function App() {
  return(
    <RootStack/>
  );
}
