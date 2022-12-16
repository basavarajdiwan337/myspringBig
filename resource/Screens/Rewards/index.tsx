import React, { useState } from 'react';
import { ImageBackground, View, Text, Dimensions,Image, Button, SafeAreaView, TextInput } from 'react-native';
import Tabs from '../../components/TabNavigation/index';
import { PAGES } from '../../Configuration/allpages';
import globalStyle from '../../Configuration/SytleSheet';
import ComponentButton from '../../components/Button';

const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

const Rewards = ({navigation}:any) =>{
  const[val, setValue]=useState('');
  let nArray:any=[];
    let value1 : any;
    let value2 : any;
    let value3 : any;
    let value4 : any;
    let value5 : any;
    const topinEntryPage = () => {
        navigation.navigate('PinEntry');
    }
    let ButtonView : any;
    nArray.push(PAGES.SigninPage.signinButtonPosition);
    nArray.push(PAGES.SigninPage.signDiscriptionPosition);
    nArray.push(PAGES.SigninPage.signinTittlePosition);
    nArray.push(PAGES.SigninPage.signinLogoPagePosition);
    nArray.push(PAGES.SigninPage.signininputBoxPosition);
    console.log("nArraynArraynArray",nArray);
    

   nArray.map((item,index)=>{
    console.log("itemitemitemitem",item);
    

if(item[0] === 1 && item[1] === "signinTittlePosition"){
    value1 = 
    <Text style={globalStyle.siginTittleText}>
    {PAGES.SigninPage.signinTittle}
</Text>
}else if(item[0] === 2 && item[1] === "signinTittlePosition"){
   
    value2 =  <Text style={globalStyle.siginTittleText}>
    {PAGES.SigninPage.signinTittle}
</Text>
}else if(item[0] === 3 && item[1] === "signinTittlePosition"){
   
    value3 =  <Text style={globalStyle.siginTittleText}>
    {PAGES.SigninPage.signinTittle}
</Text>
}else if(item[0] === 4 && item[1] === "signinTittlePosition"){
   
    value4 =  <Text style={globalStyle.siginTittleText}>
    {PAGES.SigninPage.signinTittle}
</Text>
}else if(item[0] === 5 && item[1] === "signinTittlePosition"){
   
    value5 =  <Text style={globalStyle.siginTittleText}>
    {PAGES.SigninPage.signinTittle}
</Text>
} else if(item[0] === 1 && item[1] === "signinLogoPagePosition"){
    value1 = 
    <View style={globalStyle.signinLogoView}>
                    <Image
                        style={globalStyle.signinPageLogo}
                        source={PAGES.SigninPage.signInLogo} />
                </View>
}else if(item[0] === 2 && item[1] === "signinLogoPagePosition"){
   
    value2 =  <View style={globalStyle.signinLogoView}>
    <Image
        style={globalStyle.signinPageLogo}
        source={PAGES.SigninPage.signInLogo} />
</View>
}else if(item[0] === 3 && item[1] === "signinLogoPagePosition"){
   
    value3 =  <View style={globalStyle.signinLogoView}>
    <Image
        style={globalStyle.signinPageLogo}
        source={PAGES.SigninPage.signInLogo} />
</View>
}else if(item[0] === 4 && item[1] === "signinLogoPagePosition"){
   
    value4 =  <View style={globalStyle.signinLogoView}>
    <Image
        style={globalStyle.signinPageLogo}
        source={PAGES.SigninPage.signInLogo} />
</View>
}else if(item[0] === 5 && item[1] === "signinLogoPagePosition"){
   
    value5 =  <View style={globalStyle.signinLogoView}>
    <Image
        style={globalStyle.signinPageLogo}
        source={PAGES.SigninPage.signInLogo} />
</View>
} else if(item[0] === 1 && item[1] === "signDiscriptionPosition"){
    value1 = 
    <Text style={globalStyle.siginDescription}>
                    {PAGES.SigninPage.signDiscription}
                </Text>
}else if(item[0] === 2 && item[1] === "signDiscriptionPosition"){
   
    value2 =  <Text style={globalStyle.siginDescription}>
    {PAGES.SigninPage.signDiscription}
</Text>
}else if(item[0] === 3 && item[1] === "signDiscriptionPosition"){
   
    value3 =  <Text style={globalStyle.siginDescription}>
    {PAGES.SigninPage.signDiscription}
</Text>
}else if(item[0] === 4 && item[1] === "signDiscriptionPosition"){
   
    value4 =  <Text style={globalStyle.siginDescription}>
    {PAGES.SigninPage.signDiscription}
</Text>
}else if(item[0] === 5 && item[1] === "signDiscriptionPosition"){
   
    value5 =  <Text style={globalStyle.siginDescription}>
    {PAGES.SigninPage.signDiscription}
</Text>
}  else if(item[0] === 1 && item[1] === "signininputBoxPosition"){
    value1 = 
    <TextInput
                    style={globalStyle.textinputStyle}

                />
}else if(item[0] === 2 && item[1] === "signininputBoxPosition"){
   
    value2 =  <TextInput
    style={globalStyle.textinputStyle}

/>
}else if(item[0] === 3 && item[1] === "signininputBoxPosition"){
   
    value3 =  <TextInput
    style={globalStyle.textinputStyle}

/>
}else if(item[0] === 4 && item[1] === "signininputBoxPosition"){
   
    value4 =  <TextInput
    style={globalStyle.textinputStyle}

/>
}else if(item[0] === 5 && item[1] === "signininputBoxPosition"){
   
    value5 = <TextInput
    style={globalStyle.textinputStyle}

/>
} else if(item[0] === 1 && item[1] === "signininputBoxPosition"){
    value1 = 
    <View style={globalStyle.continueButtonView}>
    <ComponentButton
        text={PAGES.SigninPage.signinButtonText}
        onPress={() => {
            topinEntryPage();
        }}
        customStyleButton={globalStyle.buttonTouchView}
        cusomStyleText={globalStyle.buttonFont}
    />
</View>
}else if(item[0] === 2 && item[1] === "signinButtonPosition"){
   
    value2 =<View style={globalStyle.continueButtonView}>
    <ComponentButton
        text={PAGES.SigninPage.signinButtonText}
        onPress={() => {
            topinEntryPage();
        }}
        customStyleButton={globalStyle.buttonTouchView}
        cusomStyleText={globalStyle.buttonFont}
    />
</View>
}else if(item[0] === 3 && item[1] === "signinButtonPosition"){
   
    value3 = <View style={globalStyle.continueButtonView}>
    <ComponentButton
        text={PAGES.SigninPage.signinButtonText}
        onPress={() => {
            topinEntryPage();
        }}
        customStyleButton={globalStyle.buttonTouchView}
        cusomStyleText={globalStyle.buttonFont}
    />
</View>
}else if(item[0] === 4 && item[1] === "signinButtonPosition"){
   
    value4 = <View style={globalStyle.continueButtonView}>
    <ComponentButton
        text={PAGES.SigninPage.signinButtonText}
        onPress={() => {
            topinEntryPage();
        }}
        customStyleButton={globalStyle.buttonTouchView}
        cusomStyleText={globalStyle.buttonFont}
    />
</View>
}else if(item[0] === 5 && item[1] === "signinButtonPosition"){
   
    value5 = <View style={globalStyle.continueButtonView}>
    <ComponentButton
        text={PAGES.SigninPage.signinButtonText}
        onPress={() => {
            topinEntryPage();
        }}
        customStyleButton={globalStyle.buttonTouchView}
        cusomStyleText={globalStyle.buttonFont}
    />
</View>
}

   })
    
    
    return (
<ImageBackground style={globalStyle.ImageBackgroundStyle} source={PAGES.Rewards.MainStackBackground} >
<View style={globalStyle.signincontainer}>
    {value1}
    {value2}
    {value3}
    {value4}
    {value5}

 
</View>
        <View style={{bottom:0,position: 'absolute',}}>
    <Tabs/>
    </View>
  
</ImageBackground>
    );
};
export default Rewards;