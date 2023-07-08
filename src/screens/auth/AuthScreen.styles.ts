import {StyleSheet} from 'react-native';

import {FONT} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: '40%',
    backgroundColor: '#f6f8fa',
    padding: 20
  },
  form: {
    gap: 15
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: FONT.regular,
    marginBottom: 40
  }
});

export default styles;
