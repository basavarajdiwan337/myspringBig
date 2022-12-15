import React, { memo } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import VersionInfo from 'react-native-version-info';
import { FLAVOURS } from '../../utils/constants';
import oneStyle from '../../containers/Interface';
let bundleIdentifier = VersionInfo.bundleIdentifier;
let newStyle=new oneStyle().getStyle();
type Props = {
  style?: { [key: string]: any };
};
const Icon = ({ style }: Props) => {
  return (
    (bundleIdentifier === FLAVOURS.LOYALTY_TRPZ_ANDROID || bundleIdentifier === FLAVOURS.LOYALTY_TRPZ_IOS) ?
      <Svg width="30" height="30" viewBox="-5 0 30 28 "style={newStyle.profileIconStyle}>
        <G id="Group_10" data-name="Group 10" transform="translate(-2876 -2053)">
          <Path id="Path_4" data-name="Path 4" d="M13.5,4.5a5.625,5.625,0,1,1-5.625,5.625A5.625,5.625,0,0,1,13.5,4.5m0-2.25a7.875,7.875,0,1,0,7.875,7.875A7.875,7.875,0,0,0,13.5,2.25Z" transform="translate(2873.375 2051.75)" fill="#fff" />
          <Path id="Path_5" data-name="Path 5" d="M24.75,33.75H22.5V28.125A5.625,5.625,0,0,0,16.875,22.5h-6.75A5.625,5.625,0,0,0,4.5,28.125V33.75H2.25V28.125a7.875,7.875,0,0,1,7.875-7.875h6.75a7.875,7.875,0,0,1,7.875,7.875Z" transform="translate(2873.75 2049.75)" fill="#fff" />
        </G>
      </Svg>
      :
      <Svg viewBox="0 0 20 20" style={style}>
        <G fill="currentColor">
          <Path d="M10,9.78c2.22,0,4-2.19,4-4.89S13.43,0,10,0,6,2.19,6,4.89,7.78,9.78,10,9.78Z" />
          <Path d="M2.39,17.25Z" />
          <Path d="M17.6,17.38c0-.05,0-.32,0,0Z" />
          <Path d="M17.6,17.05c-.08-4.7-.69-6-5.4-6.89A2.81,2.81,0,0,1,10,11a2.81,2.81,0,0,1-2.2-.84C3.14,11,2.49,12.32,2.41,16.9c0,.37,0,.39,0,.35s0,.23,0,.49c0,0,1.11,2.26,7.6,2.26s7.6-2.26,7.6-2.26v-.69Z" />
        </G>
      </Svg>
  );
};

export default memo(Icon);