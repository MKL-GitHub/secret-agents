import {StyleSheet} from 'react-native';

import {FONT} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center'
  },
  frame: {
    marginBottom: 50
  },
  title: {
    fontFamily: FONT.medium,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    marginTop: 20
  }
});

export default styles;
