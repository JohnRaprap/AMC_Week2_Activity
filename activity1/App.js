import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>

    <View
    style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <Text>Ako Si Batute</Text>      

        <Text>Pinahiya Nyo Ako MEn</Text>
        <Image
        source={{
  uri: 'https://i.pinimg.com/736x/b2/dc/85/b2dc85460a762c8562a97bf0fd31ecde.jpg',
  }}
  style={{width: 200, height: 200}}
  />
  </View>
  <TextInput
  style={{ textAlign: 'center', 
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  }}
  defaultValue="You can type in me"
  />
  </ScrollView>
  );
};

export default App;