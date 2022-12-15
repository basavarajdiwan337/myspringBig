import React, { memo } from 'react';
import Svg, { Circle } from 'react-native-svg';

type Props = {
  style?: { [key: string]: any };
};

const Icon = ({ style }: Props) => {
  return (
    <Svg viewBox="0 0 32 32" style={style}>
      <Circle stroke="currentColor" strokeWidth="1" fill="none" cx="16" cy="16" r="12" />
    </Svg>
  );
};

export default memo(Icon);
