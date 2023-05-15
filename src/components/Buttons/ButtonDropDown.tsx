import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Arrow from 'react-native-vector-icons/MaterialIcons'
import { deviceWidth } from '../../globalConstants/globalVariables';
import { PALETTE } from '../../globalConstants/globalStyles';


type Props = {
    onPress?: () => void;
    tittle: string;
    selectedData?: string;
    ToggleArrow?: boolean;
    data?: any;
    onPressCountry?: any;
    manditory? : boolean;

}

const ButtonDropDown = (props: Props) => {
    const { onPress = () => { }, tittle, selectedData, ToggleArrow, data, onPressCountry = () => { }, manditory = false } = props;
    const ArrowLeft = <Arrow name='keyboard-arrow-right' size={30} color={"#000"} />
    const ArrowDown = <Arrow name='keyboard-arrow-down' size={30} color={"#000"} />

    return (
        <View style={{ width: '82%', marginLeft: '9%', marginTop: 15 }}>
            {manditory ? 
             <View style={{width:'100%',flexDirection:'row'}}>
             <Text style={{ color: '#000', fontSize: 14, }}>{tittle}</Text>
             <Text style={{ color: PALETTE.RED, fontSize: 14, }}>*</Text>
         </View> : 
            <View>
                <Text style={{ color: '#000', fontSize: 14, }}>{tittle}</Text>
            </View> }
            <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#eee', false)}>
                <View style={ToggleArrow ? styles.activeDropDownView : styles.dropDownView}>
                    <View>
                        <Text style={{ color: '#000', fontSize: 16, }}>{selectedData}</Text>
                    </View>

                    <View>
                        {ToggleArrow ? ArrowDown : ArrowLeft}
                    </View>
                </View>

            </TouchableNativeFeedback>
            <View>
                {ToggleArrow ?
                    <View style={{ backgroundColor: '#F2F2F2', width: deviceWidth * 0.75, paddingTop: 20, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        {data?.map((itemm: any, index: any) => {
                            console.log("itemm===>", itemm);
                            return (
                                <TouchableOpacity style={{ width: deviceWidth * 0.67, height: 30, backgroundColor: '#FCFCFC', alignContent: 'center', alignSelf: 'center', alignItems: 'center', marginBottom: 7 }} onPress={() => onPressCountry(itemm.label)} key={index} >
                                    <View>
                                        <Text style={{ color: PALETTE.MEDIUM_DARK_SHADE_BLUE, textAlign: 'center', paddingTop: 2, fontSize: 16 }}>{itemm.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            )

                        })
                        }
                    </View> :
                    null}
            </View>
        </View>
    )
}

export default ButtonDropDown

const styles = StyleSheet.create({
    dropDownView: { backgroundColor: PALETTE.MEDIUM_GRAY, width: '100%', padding: 5, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 },
    activeDropDownView: { backgroundColor: PALETTE.MEDIUM_GRAY, width: '100%', padding: 5, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderBottomColor: PALETTE.DARK_BLUE, borderBottomWidth: 2 }

})