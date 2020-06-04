module.exports = async(client) => {
    client.user.setPresence({
      activity: {
        name: "kPanel",
        url: "https://kpanel.cz"
      }
    })
};
