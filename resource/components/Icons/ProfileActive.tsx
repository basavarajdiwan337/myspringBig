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
    (bundleIdentifier === FLAVOURS.LOYALTY_TRPZ_ANDROID || bundleIdentifier === FLAVOURS.LOYALTY_TRPZ_IOS)  ?
    <Svg width="30" height="30" viewBox="-5 0 30 28 " style={newStyle.profileIconStyle}>
      <G id="Group_10" data-name="Group 10" transform="translate(-2876 -2053)" fill="#06602d">
        <Path id="Path_4" data-name="Path 4" d="M13.5,4.5a5.625,5.625,0,1,1-5.625,5.625A5.625,5.625,0,0,1,13.5,4.5m0-2.25a7.875,7.875,0,1,0,7.875,7.875A7.875,7.875,0,0,0,13.5,2.25Z" transform="translate(2873.375 2051.75)" fill="green" />
        <Path id="Path_5" data-name="Path 5" d="M24.75,33.75H22.5V28.125A5.625,5.625,0,0,0,16.875,22.5h-6.75A5.625,5.625,0,0,0,4.5,28.125V33.75H2.25V28.125a7.875,7.875,0,0,1,7.875-7.875h6.75a7.875,7.875,0,0,1,7.875,7.875Z" transform="translate(2873.75 2049.75)" fill="green" />
      </G>
    </Svg>
    :
  null
  );
};

export default memo(Icon);
