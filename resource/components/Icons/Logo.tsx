import React, {memo} from 'react';
import Svg, {Path, G} from 'react-native-svg';

type Props = {
  style?: {[key: string]: any};
};

const Icon = ({style}: Props) => {
  return (
    <Svg
      viewBox="0 0 32 28"
      style={style}
      width="32px"
      height="28px"
      preserveAspectRatio="xMidYMid meet">
      <G fill="#000" stroke="none" />
    </Svg>
  );
};

export default memo(Icon);
