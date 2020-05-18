
import React from 'react';
import {
  applyMiddleware,
  createStore
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { albumReducer } from './components/backEnd/REDUX/Reducer';
import Detail from './components/frontEnd/album/Detail';
import Root from './components/frontEnd/navigation/Root';
import ErrorBoundary from './components/frontEnd/album/Error'



//Create the middle ware
const middleAware = applyMiddleware(thunk);

//Create the store
const store = createStore(albumReducer, middleAware);

//Create the stack for react navigation
const stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <NavigationContainer>
          <stack.Navigator mode="modal" headerMode="none">
            <stack.Screen name="Album" component={Root} />
            <stack.Screen name="Detail" component={Detail} />
          </stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
}
