/* eslint-disable react/display-name */
import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import YouTubeVideo from './components/YouTubeVideo';
import { VideosData } from './data/mockup';

const App = () => <AppNavigator />;

const HomeScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#121212' }}>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }} contentContainerStyle={{ paddingTop: 0 }}>
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
        {VideosData.map(data => (
          <View key={data.id} style={{ flex: 1 }}>
            <YouTubeVideo videoInfo={data.videoInfo} channelInfo={data.channelInfo} />
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
);

const TrendingScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <Text style={{ color: '#fff' }}>Trending</Text>
  </View>
);

const SubscriptionScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <Text style={{ color: '#fff' }}>Subscriptions</Text>
  </View>
);

const InboxScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <Text style={{ color: '#fff' }}>Inbox</Text>
  </View>
);

const LibraryScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <Text style={{ color: '#fff' }}>Library</Text>
  </View>
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} style={{ color: tintColor }} />, // eslint-disable-line
      },
    },
    TrendingScreen: {
      screen: TrendingScreen,
      navigationOptions: {
        tabBarLabel: 'Trending',
        tabBarIcon: ({ tintColor }) => <Icon name="whatshot" size={20} style={{ color: tintColor }} />, // eslint-disable-line
      },
    },
    SubscriptionScreen: {
      screen: SubscriptionScreen,
      navigationOptions: {
        tabBarLabel: 'Subscriptions',
        tabBarIcon: (
          { tintColor, focused } // eslint-disable-line
        ) => (
          <View>
            <Icon name="subscriptions" size={20} style={{ color: tintColor }} />
            {focused ? null : (
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  backgroundColor: 'red',
                  borderRadius: 6,
                  width: 8,
                  height: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            )}
          </View>
        ),
      },
    },
    InboxScreen: {
      screen: InboxScreen,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor }) => <Icon name="mail" size={20} style={{ color: tintColor }} />, // eslint-disable-line
      },
    },
    LibraryScreen: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: 'Library',
        tabBarIcon: ({ tintColor }) => <Icon name="folder" size={20} style={{ color: tintColor }} />, // eslint-disable-line
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#121212',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        paddingVertical: 5,
      },
    },
  }
);

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      BottomTabNavigator,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#121212',
          borderBottomWidth: 0,
        },
        headerLeft: (
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/Chandankkrr/react-native-youtube-ui/master/assets/images/yt_logo_rgb_dark.png',
            }}
            style={{ height: 22, width: 98, marginLeft: 10 }}
          />
        ),
        headerRight: (
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="cast" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="videocam" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="search" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <Icon name="account-circle" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        ),
      },
    }
  )
);

export default App;
