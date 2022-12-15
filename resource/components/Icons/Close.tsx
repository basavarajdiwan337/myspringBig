import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { G, Line } from 'react-native-svg';

type Props = {
  style?: { [key: string]: any };
  onPress?: () => void;
};

const Icon = ({ style, onPress = () => { } }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 32 32" style={style}>
        <G>
          <Line fill="none" stroke="currentColor" strokeWidth="4" x1="7" x2="25" y1="7" y2="25" />
          <Line fill="none" stroke="currentColor" strokeWidth="4" x1="7" x2="25" y1="25" y2="7" />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default memo(Icon);
