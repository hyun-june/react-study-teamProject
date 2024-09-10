// import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY;

// const api = axios.create({
//   baseURL:"https://api.spotify.com/",
//   headers:{
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`
//   }
// });

// // 요청 인터셉터 추가하기
// axios.interceptors.request.use(function (config) {
//   // 요청이 전달되기 전에 작업 수행
//   return config;
// }, function (error) {
//   // 요청 오류가 있는 작업 수행
//   return Promise.reject(error);
// });

// // 응답 인터셉터 추가하기
// axios.interceptors.response.use(function (response) {
//   // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//   // 응답 데이터가 있는 작업 수행
//   return response;
// }, function (error) {
//   // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//   // 응답 오류가 있는 작업 수행
//   return Promise.reject(error);
// });

// export default api;

import axios from "axios";

const Base_URL = 'https://accounts.spotify.com/api/token';

let accessToken = null;

export const getAccessToken = async () => {
  if (accessToken) {
    return accessToken;
  }
  const authParams = new URLSearchParams();
  authParams.append('grant_type', 'client_credentials');
  authParams.append('client_id', process.env.REACT_APP_CLIENT_ID);
  authParams.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
  try {
    const response = await axios.post(Base_URL, authParams.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = response.data;
    accessToken = data.access_token
    console.log("accessToken:",accessToken);
    return accessToken;
  } catch (error) {
    console.log('Error fetching access token:', error);
    return null
  }
};

export const getAlbums = async(accessToken)=>{
  try{
    const token = await getAccessToken();

    if(!token){
      throw new Error("Failed to retrieve access token")
    }

  const response = await fetch('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy',{
    headers:{
      Authorization: 'Bearer ' + token
    }
  })

  if(!response.ok){
    throw new Error(`Failed to fetch album data: ${response.status} ${response.statusText}`)
  }

  const data = await response.json();
  console.log("data:",data)
} catch (error){
  console.log('Error fetching album data:',error)
}}
getAlbums();