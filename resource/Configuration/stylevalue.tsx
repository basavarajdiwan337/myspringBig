import { Dimensions } from "react-native";

const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

export const STYLE = {
   center : 'center',
   left : 'flex-start',
   right : 'flex-end', 
};

export const PALETTE = {
   WHITE: '#fff',
   BLACK: '#000',
   BLACK_BG: 'rgba(0,0,0, 0.7)',
   BLUE: '#0032A1',
   SKYBLUE: '#006BB6',
   CARROTORANGE: '#F58426',
   BLUE_BG: 'rgba(18,143,249, 0.15)',
   BLUE_BG2: 'rgba(18,143,249, 0.5)',
   GREEN: '#5fba7d',
   LEMON_GREEN: '#96c71a',
   LEAF_GREEN: '#c9ff42',
   GREEN_PALE: '#287F36',
   GREEN_JARDIN: '#007841',
   GREEN_BG: 'rgba(95,186,125,.5)',
   RED: '#B2282F',
   PINK: '#fcc',
   GRAY: '#808080',
   LITE_GRAY: '#545454',
   GRAY_OPACITY: 'rgba(128, 128, 128, 0.5)',
   GRAY_LINE: 'rgba(241,248,243,0.5)',
   TRANSPARENT: 'transparent',
   BROWN: '#AB8978',
   Warm_Orange: '#D64A1E',
   Ink_Blue: '#002A3A',
   DARK_BROWN: '#54272D',
   CULTA_YELLOW:'#FFE26E',
   CULTA_BLUE:'#AFAFAF',
   BH_SKYBLUE:'#AADBD0',
   BH_GRAY:'#F7F7F7',
   BH_LGRAY:'#656565',
   BH_INTACT : '#234C5A',
   THE_JOINT: '#1F2A35',
   FP_RED: '#DF8F97',
   FP_GREEN: '#568A3D',
   FP_TABRED: '#BE1E2D',
   FP_BLACK: '#4A4A4A',
   PEN_COLOR: '#243D4A',
   LINK_COLOR:'#1e90ff',
   LIGHT_BROWN:'#AD976E',
   TRPZ_GREEN: '#006400',
   TRPZ_RED: '#A02525',
   TRPZ_GRAY: '#707070',
   TRPZ_LIGHTRED: '#D2B48C',
   IN_BOX: '#F7F7F7',
   CHECK_BOX: '#477F3B',
   PEAKE_RELEAF_BLUE:'#005E94',
   PEAKE_RELEAF_YELLOW:"#FACF3B",
   POTCO_GREEN: '#3AA107',
   MANA_ORANGE:'#D97653',
   CLEAR_CHOICE:'#6A5E84',
   MISSION_BLUE:'#002A3A'
 };

 export const FONT = {
   PTSansBold : 'PTSans-Bold',
   PTSansRegular : 'PTSans-Regular',
   AileronRegular : 'Aileron-Regular',
   AileronBold : 'Aileron-Bold',
 }
 