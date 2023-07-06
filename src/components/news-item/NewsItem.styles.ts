import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    gap: 20,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 15,
    borderColor: '#0003',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: FONT.medium,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  imageContainer: {
    alignItems: 'center',
  },
  shortText: {
    fontFamily: FONT.regular,
    fontSize: 16,
    paddingHorizontal: 15,
    color: 'black',
  },
});

export default styles;