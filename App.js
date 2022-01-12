import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteProvider from './src/context/Favorite';
import Home from './src/screens/Home/Home';
import Series from './src/screens/Series/Series';
import SerieDetail from './src/screens/Series/SerieDetail/SerieDetail';
import Actors from './src/screens/Actors/Actors';
import ActorDetail from './src/screens/Actors/ActorDetail/ActorDetail';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <FavoriteProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Series" component={Series} />
            <Stack.Screen name="SerieDetail" component={SerieDetail} />
            <Stack.Screen name="Actors" component={Actors} />
            <Stack.Screen name="ActorDetail" component={ActorDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteProvider>
    </SafeAreaProvider>
  );
};

export default App;
