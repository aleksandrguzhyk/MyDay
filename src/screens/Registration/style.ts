import {StyleSheet} from 'react-native'
import {lightGreyBGColor, whiteColor, blueHighlightColor, blueLink} from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGreyBGColor,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: whiteColor,
    borderRadius: 10,
    height: 45,
    paddingLeft: 15,
    marginTop: 15,
  },
  bigButton: {
    alignItems: 'center',
    backgroundColor: blueHighlightColor,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 25,
    height: 45,
  },
  bigButtonText: {
    color: whiteColor,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 1,
  },
  loginContainer: {
    marginTop: '40%',
  },
})
