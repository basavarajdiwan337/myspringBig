import React from 'react';
import {
    Alert,
    Dimensions,
    SafeAreaView,
    ScrollView, StyleSheet, Text, View
} from 'react-native';
import ButtonComponent from '../../components/Buttons/BottomButtonComponent';
import Header from '../../components/Header/HeaderComponent';
import TextField from '../../components/TextInput/TextField';
import { VARIABLES } from '../../globalConstants';
import ButtonDropDown from '../../components/Buttons/ButtonDropDown';
import { postAPI } from '../../services/baseServices';

const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

const FieldScreen = ({ navigation }: any) => {
    const defaultValues = {
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        address: '',
        addressError: '',
        city: '',
        cityError: '',
        zipCode: '',
        zipCodeError: '',
        email: '',
        emailError: '',
        number: '',
        numberError: '',
        merchantId: '',
        merchantIdError: '',
        totalAmount: '',
        totalAmountError: '',
        currency: '',
        currencyError: '',
        parterImtTxtRefno: '',
        parterImtTxtRefnoError: '',
        parterImtTxtAuthCode: '',
        parterImtTxtAuthCodeError: '',
        remittanceId: '',
        remittanceIdError: '',
        connector: '',
        connectorError: '',
        service: '',
        serviceError: '',
        paymentLink: '',
        paymentLinkError: '',
        country: '',
        countryError: ''
    };
    const [userDetails, setUserDetails] = React.useState<any>(defaultValues);
    const [connectortoggleButton, setConnectorToggleButton] = React.useState(false);
    const [servicetoggleButton, setServiceToggleButton] = React.useState(false);
    const [paymentLinktoggleButton, setPaymentLinkToggleButton] = React.useState(false);

    const [selectedConnectorData, setSelectedConnectorData] = React.useState('');
    const [selectedServiceData, setSelectedServiceData] = React.useState('');
    const [selectedPaymentLink, setSelectedPaymentLink] = React.useState('');

    const okButton = async () => {
        if (!userDetails.address && !userDetails.totalAmount && !userDetails.city && !userDetails.currency && !userDetails.email && !selectedServiceData && !userDetails.firstName && !userDetails.lastName && !userDetails.merchantId && !userDetails.parterImtTxtRefno && !userDetails.parterImtTxtAuthCode && !selectedConnectorData && !userDetails.zipCode && !userDetails.country && !userDetails.number && !userDetails.remittanceId) {
            Alert.alert("Fill all fields")
        }
        else {
            try {
                const payload = {
                    address1: userDetails.address,
                    amount: userDetails.totalAmount,
                    city: userDetails.city,
                    currency: userDetails.currency,
                    email: userDetails.email,
                    embeded_system: selectedServiceData === 'Embeded Service' ? "yes" : "no",
                    firstName: userDetails.firstName,
                    lastName: userDetails.lastName,
                    // merchantId: "614415553564066",
                    merchantId: userDetails.merchantId,
                    partnerImtTxnRefno: userDetails.parterImtTxtRefno,
                    partnerImtTxnAuthCode: userDetails.parterImtTxtAuthCode,
                    paymentType: selectedConnectorData,
                    // payment_link: selectedPaymentLink,
                    postalCode: userDetails.zipCode,
                    country: userDetails.country,
                    phoneNumber: userDetails.number,
                    remittanceId: userDetails.remittanceId,
                }
                const newPayload = JSON.stringify(payload);
                postAPI('http://192.168.5.115:8055/web-service/encrypted', newPayload).then(async (responsee: any) => {
                    console.log("encrypted response==>", responsee.data);
                    if (responsee.data) {
                        const response = await postAPI('http://192.168.5.115:8045/txn-service/processCheckout', `element=${responsee.data}`)
                        // console.log("response======>>>>>", response?.data);
                        // QA 192.168.6.230:8045
                        // Maruti 192.168.5.115:8045
                        navigation.navigate("webScreen", response?.data)
                    }

                }).catch((error) => {
                    console.log("encrypted error===>", error);

                })
                // const response = await postAPI('http://192.168.5.115:8045/txn-service/processCheckout', encryptValue)
                // // console.log("response======>>>>>", response?.data);
                // // QA 192.168.6.230:8045    
                // // Maruti 192.168.5.115:8045
                // navigation.navigate("webScreen", response?.data)
            } catch (error) {
                console.log("getting Error===>", error);

            }

        }

    }
    const connectorDropDownButton = () => {
        setConnectorToggleButton(!connectortoggleButton);
        setServiceToggleButton(false);
        setPaymentLinkToggleButton(false);
    }
    const onSelectConnectorData = (item: any) => {
        setSelectedConnectorData(item)
        setConnectorToggleButton(false);
        console.log("selected data=>", item);
    }
    const serviceDropDownButton = () => {
        setServiceToggleButton(!servicetoggleButton);
        setConnectorToggleButton(false);
        setPaymentLinkToggleButton(false);

    }
    const onSelectServiceData = (item: any) => {
        setSelectedServiceData(item)
        setServiceToggleButton(false);
        console.log("selected data=>", item);
    }
    const paymentLinkDropDownButton = () => {
        setPaymentLinkToggleButton(!paymentLinktoggleButton);
        setServiceToggleButton(false);
        setConnectorToggleButton(false);

    }
    const onSelectPaymentLinkData = (item: any) => {
        setSelectedPaymentLink(item)
        setPaymentLinkToggleButton(false);
        console.log("selected data=>", item);
    }
    const ConnectorData = [
        { label: 'card' },
        { label: 'token' }
    ]
    const ServiceData = [
        { label: 'Embeded Service' },
        { label: 'Redirect Service' },
        // { label: 'Card Service' },
        // { label: 'Token Service' },
    ]
    const PaymentLink = [
        { label: 'yes' },
        { label: 'no' }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header hideIcon={true} />
            </View>
            <ScrollView scrollEnabled={true}>
                <View style={styles.welcomeTextView}>
                    <Text
                        testID={'KYC_Approved_Screen_Header_Text'}
                        style={styles.welcomeTextStyle}>
                        {'Enter the order Data and Billing Data'}
                    </Text>
                </View>

                <View style={styles.TextInputView}>
                    <TextField
                        term={userDetails.firstName}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, firstName: name, firstNameError: '' });
                        }}
                        errorText={userDetails.firstNameError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={VARIABLES.LABELS.FIRST_NAME}
                        mandatoryField={true}

                        error={
                            userDetails.firstNameError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />
                    <TextField
                        term={userDetails.lastName}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, lastName: name, lastNameError: '' });
                        }}
                        errorText={userDetails.lastNameError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={VARIABLES.LABELS.LAST_NAME}
                        mandatoryField={true}
                        testID={'DashBoard_Screen_LastName_InputField'}
                        testIDLabel={'DashBoard_Screen_LastName_Label'}
                        testIDError={'DashBoard_Screen_LastName_InputField_Error'}
                        error={
                            userDetails.lastNameError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />
                    <TextField
                        term={userDetails.address}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, address: name, addressError: '' });
                        }}
                        errorText={userDetails.addressError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'Address'}
                        mandatoryField={true}

                        error={
                            userDetails.addressError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />
                    <TextField
                        term={userDetails.city}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, city: name, cityError: '' });
                        }}
                        errorText={userDetails.cityError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'City'}
                        mandatoryField={true}
                        testID={'DashBoard_Screen_LastName_InputField'}
                        testIDLabel={'DashBoard_Screen_LastName_Label'}
                        testIDError={'DashBoard_Screen_LastName_InputField_Error'}
                        error={
                            userDetails.cityError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />
                    <TextField
                        term={userDetails.zipCode}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, zipCode: name, zipCodeError: '' });
                        }}
                        errorText={userDetails.zipCodeError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'ZipCode'}
                        mandatoryField={true}
                        error={
                            userDetails.zipCodeError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />
                    <TextField
                        term={userDetails.email}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, email: name, emailError: '' });
                        }}
                        errorText={userDetails.emailError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'Email'}
                        mandatoryField={true}
                        error={
                            userDetails.emailError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />
                    <TextField
                        term={userDetails.number}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, number: name, numberError: '' });
                        }}
                        errorText={userDetails.numberError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'Number'}
                        mandatoryField={true}
                        error={
                            userDetails.numberError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                        keyboard={'numeric'}
                    />
                    <TextField
                        term={userDetails.merchantId}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, merchantId: name, merchantIdError: '' });
                        }}
                        errorText={userDetails.merchantIdError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'MerchantID'}
                        mandatoryField={true}
                        testID={'DashBoard_Screen_LastName_InputField'}
                        testIDLabel={'DashBoard_Screen_LastName_Label'}
                        testIDError={'DashBoard_Screen_LastName_InputField_Error'}
                        error={
                            userDetails.merchantIdError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                        keyboard={'numeric'}
                    />
                    <TextField
                        term={userDetails.totalAmount}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, totalAmount: name, totalAmountError: '' });
                        }}
                        errorText={userDetails.totalAmountError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'Total Amount'}
                        mandatoryField={true}

                        error={
                            userDetails.totalAmountError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                        keyboard={'numeric'}


                    />
                    <TextField
                        term={userDetails.currency}


                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, currency: name, currencyError: '' });
                        }}
                        errorText={userDetails.currencyError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'Currency'}
                        mandatoryField={true}
                        testID={'DashBoard_Screen_LastName_InputField'}
                        testIDLabel={'DashBoard_Screen_LastName_Label'}
                        testIDError={'DashBoard_Screen_LastName_InputField_Error'}
                        error={
                            userDetails.currencyError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}

                    />
                    <TextField
                        term={userDetails.parterImtTxtRefno}

                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, parterImtTxtRefno: name, parterImtTxtRefnoError: '' });
                        }}
                        errorText={userDetails.parterImtTxtRefnoError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'ParterImtTxtRefno'}
                        mandatoryField={true}

                        error={
                            userDetails.parterImtTxtRefnoError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                        keyboard={'numeric'}


                    />
                    <TextField
                        term={userDetails.parterImtTxtAuthCode}


                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, parterImtTxtAuthCode: name, parterImtTxtAuthCodeError: '' });
                        }}
                        errorText={userDetails.parterImtTxtAuthCodeError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'ParterImtTxtAuthCode'}
                        mandatoryField={true}
                        testID={'DashBoard_Screen_LastName_InputField'}
                        testIDLabel={'DashBoard_Screen_LastName_Label'}
                        testIDError={'DashBoard_Screen_LastName_InputField_Error'}
                        error={
                            userDetails.parterImtTxtAuthCodeError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                        keyboard={'numeric'}


                    />
                    <TextField
                        term={userDetails.remittanceId}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, remittanceId: name, remittanceIdError: '' });
                        }}
                        errorText={userDetails.remittanceIdError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'Remittance Id'}
                        mandatoryField={false}
                        error={
                            userDetails.remittanceIdError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />
                    <TextField
                        term={userDetails.country}
                        onTermChange={(name: React.SetStateAction<string>) => {
                            setUserDetails({ ...userDetails, country: name, countryError: '' });
                        }}
                        errorText={userDetails.countryError}
                        underlineColor={undefined}
                        placeholder={''}
                        inputFieldLabel={'Country'}
                        mandatoryField={true}
                        error={
                            userDetails.countryError !== VARIABLES.MESSAGE.EMPTY_TEXT ? true : false
                        }
                        secureTextEntry={false}
                    />

                    <ButtonDropDown
                        tittle={"Pay with"}
                        selectedData={selectedConnectorData}
                        ToggleArrow={connectortoggleButton}
                        onPress={connectorDropDownButton}
                        data={ConnectorData}
                        onPressCountry={(item: any) => onSelectConnectorData(item)}
                        manditory={true}
                    />
                    <ButtonDropDown
                        tittle={"Service"}
                        selectedData={selectedServiceData}
                        ToggleArrow={servicetoggleButton}
                        onPress={serviceDropDownButton}
                        data={ServiceData}
                        onPressCountry={(item: any) => onSelectServiceData(item)}
                        manditory={true}
                    />
                    {/* <ButtonDropDown
                        tittle={"Payment Link"}
                        selectedData={selectedPaymentLink}
                        ToggleArrow={paymentLinktoggleButton}
                        onPress={paymentLinkDropDownButton}
                        data={PaymentLink}
                        onPressCountry={(item: any) => onSelectPaymentLinkData(item)}
                    /> */}
                </View>
            </ScrollView>
            <ButtonComponent
                testID={'Submit_Button_Save_Profile'}
                buttonView={styles.bottomButtonView}
                text={'SUBMIT'}
                onPress={okButton}
            />
        </SafeAreaView>
    );
};

export default FieldScreen;
const styles = StyleSheet.create({
    bottomButtonView: {
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
    },
    container: {
        width: deviceWidth,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeTextView: {
        width: deviceWidth,
        alignSelf: 'center',
        paddingTop: 5
    },
    welcomeTextStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#003B4D',
        fontWeight: 'bold',
        padding: 5
    },
    TextInputView: {
        alignSelf: 'center',
        width: VARIABLES.deviceWidth,
        marginTop: '0%',
        marginBottom: '22%'
    },
})

/*
const payload = {
                    "address1": "Kalaburagi",
                    "amount": "100",
                    "city": "Gulbarga",
                    "currency": "ISK",
                    "email": "basavarajdiwan9535@gmail.com",
                    "embeded_system": "yes",
                    "firstname": "Basavaraj",
                    "lastname": "Diwan",
                    "merchantid": "614415553564066",   "merchantId": "686571205423501", --  614415553564066
                    "partnerimttxnauthcode": "2543168884278",
                    "partnerimttxnrefno": "25364857854645",
                    "paymentType": "token",
                    "payment_link": "yes",
                    "postalcode": "585310",
                    "remittanceid": "2536"
                  }
*/

/* 
const payload = {
                    address1: userDetails.address,
                    amount: userDetails.amount,
                    city: userDetails.city,
                    currency: userDetails.currency,
                    email: userDetails.email,
                    embeded_system: "yes",
                    firstname: userDetails.firstName,
                    lastname: userDetails.lastName,
                    merchantid: userDetails.merchantId,
                    partnerimttxnauthcode:userDetails.parterImtTxtRefno,
                    partnerimttxnrefno: userDetails.parterImtTxtAuthCode,
                    paymentType: userDetails.connector,
                    payment_link: userDetails.paymentLink,
                    postalcode: userDetails.zipCode,
                    remittanceid: userDetails.remittanceId
                  }
*/



