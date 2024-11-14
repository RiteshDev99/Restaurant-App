import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import NavBar from './components/navBar';
import Banner from './components/banner';
import Grocery from './components/Grocery';
import PremiumFood from './components/premiumFood';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <NavBar />
          <Banner />
          <Grocery />
          <PremiumFood/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
