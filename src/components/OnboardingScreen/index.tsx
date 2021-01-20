import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Bem-vindo!',
    text:
      'Esse é um projeto para ser usado como template! Fique a vontade para fazer alterações',
    image: require('../../assets/smiley-face.png'),
    bg: 'rgba(243, 243, 243, 1)',
  },
];

type Item = typeof data[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
    resizeMode: 'center',
  },
  text: {
    color: 'rgba(255, 54, 71, 0.8)',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e50014',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface IProps {
  setShowOnboarding: (value: boolean) => void;
}

const onboardingScreen = ({ setShowOnboarding }: IProps) => {
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const keyExtractor = (item: Item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-forward" color="rgba(255, 54, 71, 0.8)" size={24} />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 54, 71, 0.8)" size={24} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderItem={renderItem}
        data={data}
        onDone={() => setShowOnboarding(false)}
        dotStyle={{ backgroundColor: 'rgba(255, 54, 71, 0.3)' }}
        activeDotStyle={{ backgroundColor: 'rgba(255, 54, 71, 1)' }}
      />
    </View>
  );
};

export default onboardingScreen;
