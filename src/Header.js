import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Prakiraan Cuaca</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#673AB7',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,

    },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Header;
