import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  name: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
  logout: {
    flexDirection: 'row',
    gap: 5,
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#1f5dffbb',
  },
  logoutText: {
    fontFamily: FONT.medium,
    fontSize: 9,
    color: '#fff',
    alignSelf: 'center',
  },
  logoutIcon: {
    color: 'white',
  }
});

export default styles;