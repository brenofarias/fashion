import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
    flex: 1,
  },

  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    color: '#0C0D34',
    lineHeight: 30,
    marginBottom: 12,
    textAlign: 'center',
  },

  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Text style={styles.description}>{description}</Text>
    <Button
      label={last ? "Let's get started" : 'Next'}
      variant={last ? 'primary' : 'default'}
      {...{ onPress }}
    />
  </View>
);

export default Subslide;
