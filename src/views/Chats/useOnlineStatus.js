const connection = new signalR.HubConnectionBuilder()
    .withUrl("/onlinestatusHub", {
        accessTokenFactory: () => getAccessToken() // Implement this function to get the access token from your client-side authentication
    })
    .build();

connection.start().then(() => {
    console.log("Online status hub connected");
}).catch((error) => {
    console.error("Error connecting to online status hub: ", error);
});
``
connection.on("UpdateOnlineStatus", (userId, online) => {
    if (userId === currentUserId) {
        setUserOnlineStatus(online);
    }
});

function setUserOnlineStatus(userId, online) {
    const userElement = document.getElementById(`user-${userId}`);
    if (userElement) {
        if (online) {
            userElement.classList.remove("offline");
            userElement.classList.add("online");
        } else {
            userElement.classList.remove("online");
            userElement.classList.add("offline");
        }
    }
}