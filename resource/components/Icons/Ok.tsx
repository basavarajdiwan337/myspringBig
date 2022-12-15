import React, { memo } from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
  style?: { [key: string]: any };
};

const Icon = ({ style }: Props) => {
  return (
    <Svg viewBox="0 0 950 950" style={style}>
      <G fill="#fff">
        <Path
          clipRule="evenodd"
          d="M990,255.7L858.1,118.9L386.9,607.5l-245-254.1L10,490.2l376.9,390.9L500,763.8l0,0L990,255.7z"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
};

export default memo(Icon);
