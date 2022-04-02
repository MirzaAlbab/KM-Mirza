import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainRoute from './src/routes/MainRoute'
import {Provider} from 'react-redux';
import {store} from './src/store';
import Root from './src/routes/Root';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
    
  )
}

