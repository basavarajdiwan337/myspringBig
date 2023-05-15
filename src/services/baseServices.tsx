
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BaseURL } from '../globalConstants/apiEndPoint';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};


export const getAPI = async (endPoint: string) => {

    let access_token = await AsyncStorage.getItem("access_token");
    console.log("token is ===>", access_token);
    return await axios.get(BaseURL.url + endPoint, {
        headers: {
            authorization: "Basic " + "Q2hhdGFrUHJlcGFpZEFkbWluQmFzaWNBdXRoOkNoYXRha0FkbWluQFNlY3VyZQ==",
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).catch((error) => {
        console.log(error);
    });
};

export const postAPI = async (endPoint: string, payload: any) => {
    console.log("url===>", endPoint, "PayloadData", payload);
    // let access_token = await AsyncStorage.getItem("access_token");
    // console.log("token for postApi", access_token);
    return await axios.post(endPoint, payload, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).catch((error) => {
        console.log("post api Error==>", error);
    });
};

export const deleteAPI = async (endPoint: string) => {
    return await axios.delete(BaseURL.url + endPoint, { headers });
};

export const patchAPI = async (endPoint: string, payload: any) => {
    return await axios.patch(BaseURL.url + endPoint, payload, { headers });
};
