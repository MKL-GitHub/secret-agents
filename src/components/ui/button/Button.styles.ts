import { StyleSheet } from "react-native";
import { FONT } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1f5dffbb',
    padding: 12,
    borderRadius: 5,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: 18,
    color: 'white',
  },
  input: {
    width: '100%',
    fontSize: 20,
  },
});

export default styles;