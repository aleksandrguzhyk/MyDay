import React, { useCallback, useRef } from 'react'
import { Pressable, Text } from 'react-native'
import { BackgroundView } from '../../components'
import { styles } from './style'
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import SwipeableItem, { UnderlayParams } from 'react-native-swipeable-item';
import Animated from 'react-native-reanimated';
import SvgIcon from '../../components/svg-icon';
import { imageAssets } from '../../assets';
import { whiteColor } from '../../theme';
interface IProps {
  data: Item[]
  setData: (data: Item[]) => void
  goToDetails: (item) => void
}

type Item = {
  id: string
  title: string;
  description: string;
  index: number
};

const { multiply, sub } = Animated;

const HomeScreenView: React.FC<IProps> = ({
  data,
  setData,
  goToDetails,
}) => {
  const renderUnderlayLeft = ({
    item,
    percentOpen,
    open,
    close,
  }: UnderlayParams<Item>) => (
    <Animated.View
      style={[
        styles.row,
        styles.underlayRight,
        {
          transform: [{ translateX: multiply(sub(1, percentOpen), -100) }], // Translate from left on open
        },
      ]}>
      <Pressable onPressOut={close} style={styles.underlayEditContainer}>
        <SvgIcon
          Icon={imageAssets.edit}
          width={18}
          height={18}
          fill={whiteColor}
        />
      </Pressable>
      <Pressable onPressOut={close} style={styles.underlayCloseContainer}>
        <Text style={styles.underlayText}>X</Text>
      </Pressable>
    </Animated.View>
  );

  const itemRefs = useRef(new Map())

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<Item>) => {
      const myRef = []

      return (
        <SwipeableItem
          key={item.id}
          item={item}
          ref={(ref) => {
            if (ref && !itemRefs.current.get(item.key)) {
              console.log('cla', itemRefs.current.set(item.key, ref));
              myRef.push(item.key, ref);
            }
          }}
          onChange={({ open }) => {
            if (open) {
              console.log('open');
              console.log('myRef', myRef);

              // console.log([...itemRefs.current.entries()])

              // Close all other open items
              [...itemRefs.current.entries()].forEach(([key, ref]) => {
                console.log('hola');

                console.log(key, 'key');
                console.log(ref, 'ref');

                if (key !== item.key && ref) {
                  console.log(ref, 'ref');

                  ref.close()
                }
              });
            }
          }}
          overSwipe={20}
          renderUnderlayLeft={renderUnderlayLeft}
          snapPointsLeft={[70]}
        >
          <Pressable
            style={styles.itemContainer}
            onPress={() => goToDetails(item)}
            onLongPress={drag}
          >
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </Pressable>
        </SwipeableItem>
      );
    },
    []
  );

  return (
    <BackgroundView style={styles.container}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onDragEnd={({ data }) => setData(data)}
      />
    </BackgroundView>
  )
}

export default HomeScreenView