import React from 'react';
import { StyleSheet, Text, View, ProgressBarAndroidBase, ActivityIndicator, BackHandler, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { Base64 } from 'js-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Back from 'react-native-vector-icons/AntDesign';


const WebScreens = ({ route, navigation }: any) => {
  
  const webViewRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [currentUrl, setCurrentUrl] = React.useState('');
  const [count, setCount] = React.useState(0);

  console.log("currentUrlcurrentUrl", currentUrl);

  const handleLoadProgress = (event: any) => {
    setProgress(event.nativeEvent.progress);
  };
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';
  const generateHTML = () => {
    let html = `
    <div><h1>Welcome to my website</h1><p>Click <a href="https://www.example.com">here</a> to go to example.com</p></div>
        `;
    return html;
  }
  let htmlPage = generateHTML()

  React.useEffect(() => {
    // navigation.navigate('ResultScreen')
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])
  const handleNavigationStateChange = (navState: any) => {
    console.log("navState==>", navState);
    setCurrentUrl(navState.url);
  };
  const injectJavaScript = `
    window.consoleLog = function(message) {
      window.postMessage(JSON.stringify({ type: 'getData' }));
    }
    
  `;

  // let dc = "ew0KICAidHJhbnNhY3Rpb25JZCIgOiAiMTAwMDAxNjc3MDg5IiwNCiAgInJlc3BvbnNlQ29kZSIgOiAiVFAxMjEiLA0KICAic3RhdHVzIiA6ICJERUNMSU5FRCIsDQogICJyZXNwb25zZU1lc3NhZ2UiIDogIlRyYW5zYWN0aW9uIHdpdGggc2FtZSBwYXJ0bmVySW10VHhuUmVmTm8gaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQiLA0KICAiYXV0aG9yaXplZEFtb3VudCIgOiAiMS4wMCIsDQogICJ0b3RhbEFtb3VudCIgOiAiMS4wMCIsDQogICJjdXJyZW5jeSIgOiAiSVNLIiwNCiAgInJlbWl0dGFuY2VJZCIgOiAiICIsDQogICJtZXJjaGFudElkIiA6ICI2MTQ0MTU1NTM1NjQwNjYiLA0KICAidG9rZW5DYXJkIiA6IHsgfSwNCiAgInBhcnRuZXJJbXRUeG5BdXRoQ29kZSIgOiAiMTIwMCIsDQogICJwYXJ0bmVySW10VHhuUmVmbm8iIDogIk1BMDkiDQp9";
  // let decodeResponse = Base64.decode(dc);
  //     console.log("decodeResponse",decodeResponse);
  //     const obj = JSON.parse(decodeResponse);
  //     if (obj.status === 'DECLINED' || obj.status != 'DECLINED') {
  //       AsyncStorage.setItem("status", obj.status)
  //       navigation.navigate("ResultScreen",obj)
  //     }

  const onMessage = (event: any) => {
    setCount(count + 1);
    try {
      let decodeResponse = Base64.decode(event.nativeEvent.data);
      console.log("decodeResponse",decodeResponse);
      const obj = JSON.parse(decodeResponse);
      if (obj.status === 'DECLINED' || obj.status === 'AUTHORIZED') {
        navigation.navigate("ResultScreen",obj)
      }
      // console.log("event response ==>", event.nativeEvent.data)
    } catch (error) {
      console.log("onMessage error===>", error);
    }


  }

  return (
    <>
    <View>
      <TouchableOpacity onPress={() => { currentUrl === 'about:blank' ? navigation.goBack() : webViewRef.current.goBack() }} activeOpacity={2} style={{ width: 50, height: 30, alignContent: 'center', zIndex: 10, paddingBottom: 5, paddingLeft: 8 }}>
        <Back name={"arrowleft"} size={28} color={"#000"} />
      </TouchableOpacity>
      <ActivityIndicator
        style={{ position: 'absolute', top: 10, left: 0, right: 0 }}
        size="small"
        animating={progress < 1}
      />
    </View>
      <WebView
        ref={webViewRef}
        source={{ html: route.params }}
        style={{ flex: 1 ,}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        onLoad={() => console.log('Web page loaded')}
        onError={() => console.log('Error loading web page')}
        onMessage={(event) => onMessage(event)}
        userAgent="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"
        originWhitelist={['*']}
        onNavigationStateChange={handleNavigationStateChange}
        onLoadProgress={handleLoadProgress}
        injectedJavaScript={injectJavaScript} />

    </>
  )
}

export default WebScreens

const styles = StyleSheet.create({})