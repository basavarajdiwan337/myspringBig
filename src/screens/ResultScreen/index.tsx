import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, View
} from 'react-native';
import Circle from 'react-native-vector-icons/AntDesign';
import ButtonComponent from '../../components/Buttons/BottomButtonComponent';
import Header from '../../components/Header/HeaderComponent';
import { deviceHeight } from '../../globalConstants/globalVariables';
import { STYLES, VARIABLES } from '../../globalConstants/index';
import globalStyle from '../../globalConstants/SytleSheet';
import moment from 'moment';

const ResultScreen = ({ navigation, route }: any) => {
    console.log("routeroute==>",route.params);
    
    const onBack = () => {
        navigation.goBack();
    };
    const toProductPage = () => {
        navigation.navigate('fieldsScreen')

    }
    let currentDate = new Date();
    let current = currentDate.toLocaleDateString()
    console.log("currentDate", current);
    const dateTime = moment(currentDate, 'ddd MMM DD HH:mm:ss z YYYY')
    console.log("dateTime", dateTime);
    const formattedTimeString = dateTime.format('h:mm A');
    let currency = route.params.currency;
    let uppperCurrency = currency.toUpperCase()
    return (
        <SafeAreaView style={globalStyle.container}>
            <View>
                <Header onPress={onBack} hideIcon={true} />
            </View>
            <ScrollView scrollEnabled={true}>

                <View style={styles.successView}>
                <Text style={{ color: '#003B4D', textAlign: 'center', marginTop: 2, alignSelf: 'center', padding: 5, fontSize: 30, fontWeight: 'bold', }}>{uppperCurrency} {route.params.authorizedAmount}</Text>

                    <Text
                        testID={'trasactionStatus'}
                        style={styles.IBANActiveText}>
                        {route.params.status === 'DECLINED' ? "Your Transaction Declined" : "Your Transaction Successful"}
                    </Text>
                    <Text style={{ color: 'black', textAlign: 'center', alignSelf: 'center', padding: 5, fontWeight: '500', marginTop: 20 }}>{`${current} ${formattedTimeString}`}</Text>
                    <Text style={{ color: '#003B4D', textAlign: 'center', marginTop: 20, alignSelf: 'center', padding: 5, fontSize: 20, fontWeight: 500, }}>Transaction ID : {route.params.transactionId}</Text>
                    <View style={{ marginTop: 25 }}>
                        <Circle name={route.params.status === 'DECLINED' ? "closecircleo" : "checkcircleo"} size={150} color={route.params.status === 'DECLINED' ? "#D10000" : "#80BC00"} />
                    </View>
                    <Text style={{ textAlign: 'center', color: '#003B4D', fontSize: 16, padding: 15, fontWeight: '500', marginTop: 20, width: 350 }}>{route.params.responseMessage}</Text>
                </View>
            </ScrollView>
            <ButtonComponent
                testID={'KYC_Approved_Screen_Next_Button'}
                buttonView={styles.bottomButtonView}
                text={VARIABLES.MESSAGE.HOME}
                onPress={toProductPage}
            />
        </SafeAreaView>
    );
};

export default ResultScreen;

const styles = StyleSheet.create({
    successView: {
        marginTop: '20%',
        alignItems: 'center'
    },
    IBANActiveText: {
        textAlign: 'center',
        fontSize: STYLES.FONTSIZE.TWENTY_FIVE,
        color: STYLES.PALETTE.MEDIUM_DARK_SHADE_BLUE,
        fontWeight: 'bold',
        marginTop:10
    },
    ActiveTextView: {
        marginTop: '20%'
    },
    bottomButtonView: {
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
    },

});
