import React, { useState } from 'react';
import { ImageBackground, View, Text, Dimensions,Image, Button, SafeAreaView, TextInput } from 'react-native';
import Tabs from '../../components/TabNavigation/index';
import { PAGES } from '../../Configuration/allpages';
import globalStyle from '../../Configuration/SytleSheet';
import ComponentButton from '../../components/Button';
import LogoutButton from '../../components/LogoutButton';

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

    let rewardsLogo =  <View style={globalStyle.RewardPageLogoView}>
                         <Image
                            style={globalStyle.signinPageLogo}
                            source={PAGES.SigninPage.signInLogo} />
                        </View>

  let rewardsPageTittle = <Text style={globalStyle.siginTittleText}>
                              {PAGES.Rewards.RewardsTittle}
                          </Text>
  let description = <Text style={globalStyle.siginDescription}>
                        {PAGES.SigninPage.signDiscription}
                    </Text>

  let RewardsInputBox = <TextInput style={globalStyle.textinputStyle}/>

  let rewardsButton = <View style={globalStyle.continueButtonView}>
                        <ComponentButton
                              text={PAGES.SigninPage.signinButtonText}
                              onPress={() => {
                                topinEntryPage();
                              }}
                              customStyleButton={globalStyle.buttonTouchView}
                              cusomStyleText={globalStyle.buttonFont}
                         />
                      </View>

    const topinEntryPage = () => {
        navigation.navigate('PinEntry');
    }

    nArray.push(PAGES.SigninPage.signinButtonPosition);
    nArray.push(PAGES.SigninPage.signDiscriptionPosition);
    nArray.push(PAGES.SigninPage.signinTittlePosition);
    nArray.push(PAGES.SigninPage.signinLogoPagePosition);
    nArray.push(PAGES.SigninPage.signininputBoxPosition);
    console.log("nArraynArraynArray",nArray);
    

   nArray.map((item,index)=>{
    console.log("itemitemitemitem",item);
    

if(item[0] === 1 && item[1] === "signinTittlePosition"){
    value1 = rewardsPageTittle
}else if(item[0] === 2 && item[1] === "signinTittlePosition"){
   
    value2 =  rewardsPageTittle
}else if(item[0] === 3 && item[1] === "signinTittlePosition"){
   
    value3 =  rewardsPageTittle
}else if(item[0] === 4 && item[1] === "signinTittlePosition"){
   
    value4 =  rewardsPageTittle
}else if(item[0] === 5 && item[1] === "signinTittlePosition"){
   
    value5 =  rewardsPageTittle
} else if(item[0] === 1 && item[1] === "signinLogoPagePosition"){
    value1 = rewardsLogo
   
}else if(item[0] === 2 && item[1] === "signinLogoPagePosition"){
   
    value2 =  rewardsLogo
}else if(item[0] === 3 && item[1] === "signinLogoPagePosition"){
   
    value3 =  rewardsLogo
}else if(item[0] === 4 && item[1] === "signinLogoPagePosition"){
   
    value4 =  rewardsLogo
}else if(item[0] === 5 && item[1] === "signinLogoPagePosition"){
   
    value5 =  rewardsLogo
} else if(item[0] === 1 && item[1] === "signDiscriptionPosition"){
    value1 = description
}else if(item[0] === 2 && item[1] === "signDiscriptionPosition"){
   
    value2 =  description
}else if(item[0] === 3 && item[1] === "signDiscriptionPosition"){
   
    value3 =  description
}else if(item[0] === 4 && item[1] === "signDiscriptionPosition"){
   
    value4 =  description
}else if(item[0] === 5 && item[1] === "signDiscriptionPosition"){
   
    value5 =  description
}  else if(item[0] === 1 && item[1] === "signininputBoxPosition"){
    value1 = RewardsInputBox
}else if(item[0] === 2 && item[1] === "signininputBoxPosition"){
   
    value2 =  RewardsInputBox
}else if(item[0] === 3 && item[1] === "signininputBoxPosition"){
   
    value3 =  RewardsInputBox
}else if(item[0] === 4 && item[1] === "signininputBoxPosition"){
   
    value4 =  RewardsInputBox
}else if(item[0] === 5 && item[1] === "signininputBoxPosition"){
   
    value5 = RewardsInputBox
} else if(item[0] === 1 && item[1] === "signininputBoxPosition"){
    value1 = rewardsButton
}else if(item[0] === 2 && item[1] === "signinButtonPosition"){
   
    value2 =rewardsButton
}else if(item[0] === 3 && item[1] === "signinButtonPosition"){
   
    value3 = rewardsButton
}else if(item[0] === 4 && item[1] === "signinButtonPosition"){
   
    value4 = rewardsButton
}else if(item[0] === 5 && item[1] === "signinButtonPosition"){
   
    value5 = rewardsButton
}

   })
    
    
    return (
<ImageBackground style={globalStyle.ImageBackgroundStyle} source={PAGES.Feature.isSameBackground === true ?  PAGES.Background.pageBackground : PAGES.Rewards.MainStackBackground} >
    <View style={{alignSelf:'flex-end'}}>
      <LogoutButton />
    </View>
<View style={globalStyle.rewardPageContainer}>
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