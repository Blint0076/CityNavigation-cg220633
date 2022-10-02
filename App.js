import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const artImg = require('./assets/art.png')
const mileImg = require('./assets/mile.png')
const pierImg = require('./assets/pier.png')
const waterImg = require('./assets/water.png')
const willisImg = require('./assets/willis.png')

function ArtPage({ navigation }) {
  return (
    <View style={styles.tab}>
      <Image
        style={styles.photos}
        source={artImg}
      />
    </View>
  );
}

function MilePage({ route }) {
  return (
    <View style={styles.tab}>
      <Image
        style={styles.photos}
        source={mileImg}
      />
    </View>
  );
}

function PierPage({ route }) {
  return (
    <View style={styles.tab}>
      <Image
        style={styles.photos}
        source={pierImg}
      />
    </View>
  );
}

function WaterPage({ route }) {
  return (
    <View style={styles.tab}>
      <Image
        style={styles.photos}
        source={waterImg}
      />
    </View>
  );
}

function WillisPage({ route }) {
  return (
    <View style={styles.tab}>
      <Image
        style={styles.photos}
        source={willisImg}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName='Art Institute of Chicago'>
        <Drawer.Screen name='Art Institute of Chicago' component={ArtPage} />
        <Drawer.Screen name='Magnificient Mile' component={MilePage} />
        <Drawer.Screen name='Navy Pier' component={PierPage} />
        <Drawer.Screen name='Water Tower' component={WaterPage} />
        <Drawer.Screen name='Willis Tower' component={WillisPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photos: {
    height: 480,
    width: 320,
    padding: 10
  }
});
