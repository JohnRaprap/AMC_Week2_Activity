import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        John Raphael
        <Text style={styles.innerText}> Vargas</Text>
      </Text>
      <Text style={{color: 'purple'}}>Global Reciprocal Colleges
      <Text style={{color: 'green'}}> BSIT </Text>
      </Text>
      <Text style={{color: 'brown'}}> Third Year
      <Text style={{color: 'orange'}}> BSIT </Text>
      </Text>
      <Text style={{color: 'red'}}>Section 302
      <Text style={{color: 'pink'}}> BSIT </Text>
      </Text>

    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  innerText: {
    color: 'red',
  },
});

export default BoldAndBeautiful;