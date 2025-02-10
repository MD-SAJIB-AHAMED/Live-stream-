document.addEventListener("DOMContentLoaded", function () {
    const channelList = document.getElementById("channelList");
    const videoPlayer = document.getElementById("videoPlayer");

    // API থেকে JSON ডেটা লোড করা
    fetch("Output.json") // লোকাল JSON ফাইল
    .then(response => response.json())
    .then(data => loadChannels(data))
    .catch(error => console.error("JSON লোড করতে সমস্যা:", error));

function loadChannels(data) {
    const channelList = document.getElementById("channelList");
    const videoPlayer = document.getElementById("videoPlayer");

    data.channels.forEach(channel => {
        const listItem = document.createElement("li");
        listItem.textContent = channel.name;
        listItem.addEventListener("click", () => {
            playChannel(channel.url);
        });
        channelList.appendChild(listItem);
    });
}

function playChannel(url) {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = url;
    videoPlayer.play();
}
});