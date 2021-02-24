
export function setMsgs(channel) {
    const p = fetch(`/api/v1/channels/${channel}/messages`)
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

export function setChannels() {
const payload = fetch(`/list`)
      .then(response => response.json());
  return {
    type: "SET_CHANNELS",
    payload: payload
 }
}
