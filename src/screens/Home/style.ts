import {StyleSheet} from 'react-native'
import {lightGreyBGColor, whiteColor, blueHighlightColor} from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGreyBGColor,
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: whiteColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  underlayRight: {
    borderRadius: 10,
    marginVertical: 10,
    flexGrow: 1,
    backgroundColor: blueHighlightColor,
    justifyContent: 'flex-end'
  },
  underlayCloseContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  underlayText: {
    color: whiteColor,
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  underlayEditContainer: {
    alignItems: 'center',
    backgroundColor: blueHighlightColor,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})
