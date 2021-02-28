
export function setMsgs(channel) {
    const p = fetch(`/api/v1/channels/${channel}/messages`)
      .then(response => response.json());
  return {
    type: 'SET_MSGS',
    payload: p
  };
};

export function setUsers() {
    const p = fetch(`/userlist`)
      .then(response => response.json());
  return {
    type: 'SET_USERS',
    payload: p
  };
};

export function createMessage(text, channel) {
  fetch(`/api/v1/channels/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  })
.then(response => response.json())
.then(text => {
  console.log('Success:', text);
})
.catch((error) => {
  console.error('Error:', error);
});
}


export function setChannels() {
const payload = fetch(`/list`)
      .then(response => response.json());
  return {
    type: "SET_CHANNELS",
    payload: payload
 }
}

export function setActive(channel) {

  return {
    type: 'SET_ACTIVE',
    payload: channel
 }
}
