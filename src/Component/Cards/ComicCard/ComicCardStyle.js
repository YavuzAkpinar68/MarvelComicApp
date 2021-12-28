import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: Dimensions.get('screen').height / 4,
    width: Dimensions.get('screen').width / 2,
    borderRadius: 15,
  },
  text: {
    padding: 10,
  },
});
export default styles;
