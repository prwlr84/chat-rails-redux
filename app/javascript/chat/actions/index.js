import msgsFile from './msgs'
export function setMsgs() {
    const p = fetch(`/api/v1/channels/general/messages`)
      .then(response => response.json());
  return {
    type: 'SET_MSGS',
    payload: p
  };
};

export function createMessage(data) {
  console.log(data);
  fetch('https://wagon-chat.herokuapp.com/general/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

export function setUsr(){
  const usr = prompt("Username") || "anonymus"

  return {
   type: 'SET_USR',
   payload: usr
   }
}

export function setActiveChannel(channel) {
  if(channel){
  return{
    type: 'SET_ACTIVE_CHANNEL',
    payload: channel
  }} else {
  return{
    type: 'SET_ACTIVE_CHANNEL',
    payload: 'general'
  }
  }
}

export const SET_CHANNELS = 'SET_CHANNELS';

export function setChannels() {
const payload = fetch(`/api/v1/channels/general/messages`)
      .then(response => response.json());
  return {
    type: SET_CHANNELS,
    payload: payload
 }
}
