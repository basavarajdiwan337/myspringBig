import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  height?: number;
  width?: number;
  color?: string;
  left?: boolean;
  style?: { [key: string]: any };
};

const Arrow = ({ height = 8, width = 16, color = 'blue', left, style }: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 8"
      fill="none"
      style={[{ transform: [{ rotate: left ? '180deg' : '0deg' }] }, style]}>
      <Path
        d="M.625 3.375h13.236L11.67 1.193a.625.625 0 11.881-.886l3.266 3.25a.626.626 0 010 .885v.001l-3.266 3.25a.625.625 0 01-.881-.886l2.192-2.182H.625a.625.625 0 110-1.25z"
        fill={color}
      />
    </Svg>
  );
};

export default memo(Arrow);
