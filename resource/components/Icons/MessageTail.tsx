import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { PALETTE, PLATFORM } from 'share/src/utils/constants';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Icon = ({ theme }: any) => {
  return (
    <View style={styles.tail}>
      <Svg width={styles.tail.width} height={styles.tail.height} viewBox="0 0 25 15">
        <Path
          d="M15.59.372c-3.385 6.306-8.88 11.391-15.672 14.2 2.748.41 5.592.47 8.487.114 6.12-.752 10.55-5.068 15.64-7.525 1.618 0-6.987-6.789-8.454-6.789z"
          fill={theme.messageTailColor || styles.tailColor.color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  tail: {
    position: 'absolute',
    bottom: PLATFORM === 'web' ? 0 : -5,
    left: PLATFORM === 'web' ? -15 : -44,
    width: 35,
    height: 35,
  },
  tailColor: {
    backgroundColor: '#EEEEEE',
  },
});

export default memo(Icon);
