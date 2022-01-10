import React, {useState} from 'react';
import {Text,View} from 'react-native';
import {Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Series from '../Series/Series';
import styles from './styles';
const SimpleView = ()=>(<View><Text>hey</Text></View>);
const Home = () => {
  const [index, setIndex] = useState(0);
  const routes = [
    {key: 'series', title: 'Series', icon: 'film'},
    {key: 'actors', title: 'Actors', icon: 'theater-masks'},
    {key: 'favorite', title: 'Favorite', icon: 'star'},
  ];
  const renderScene = SceneMap({
    series: Series,
    actors: SimpleView,
    favorite: SimpleView,
  });
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TabView
        style={styles.tabView}
        renderTabBar={renderTabBar}
        tabBarPosition="bottom"
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </SafeAreaView>
  );
};
const renderTabBar = props => (
  <TabBar
    {...props}
    renderIcon={({route, focused}) => (
      <Icon
        solid
        size={20}
        name={route.icon}
        type="font-awesome-5"
        color={focused ? '#E52F6F' : '#959697'}
      />
    )}
    renderLabel={({route, focused}) => {
      return (
        <Text
          numberOfLines={1}
          style={[styles.tabLabel, !focused && styles.unFocusTitleColor]}>
          {route.title}
        </Text>
      );
    }}
    inactiveColor={'#E5E5E5'}
    indicatorStyle={styles.tabIndicator}
    style={styles.tabBar}
  />
);

export default Home;
