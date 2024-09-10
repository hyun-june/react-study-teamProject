import React, { useEffect } from 'react';
import { getAccessToken, getAlbums } from '../utils/api';


export const MusicPlayer = () => {
//   const device_id = "0d1841b0976bae2a3a310dd74c0f3df354899bc8";
//   const getPlayer = async () => {
//     try {
//         const accessToken = await getAccessToken();
//       const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Player Response:', data);
//     } catch (error) {
//       console.error('Error in MusicPlayer:', error);
//     }
//   };

//   useEffect(() => {
//     getPlayer();
//   }, []);

  return (
    <div>MusicPlayer</div>
  );
};
