import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  body: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  bodyLink: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  shortText: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  createdAt: {
    display: 'flex',
    marginTop: 30,
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  createdAtValue: {
    color: 'black',
  }
});

export default styles;