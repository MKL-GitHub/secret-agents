import { StyleSheet } from "react-native";
import { FONT } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    paddingRight: 45,
  },
  input: {
    width: '100%',
    fontSize: 16,
    fontFamily: FONT.regular,
  },
  icon: {
    width: 30,
    alignItems: 'center',
  },
  error: {
    borderColor: 'red',
  }
});

export default styles;