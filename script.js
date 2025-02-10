document.addEventListener("DOMContentLoaded", function () {
    const channelList = document.getElementById("channelList");
    const videoPlayer = document.getElementById("videoPlayer");

    // API থেকে JSON ডেটা লোড করা
    fetch("https://raw.githubusercontent.com/0xJihan/Practice-Projects/main/Output.json")
        .then(response => response.json())
        .then(data => {
            data.channels.forEach(channel => {
                const listItem = document.createElement("li");
                listItem.textContent = channel.name;
                listItem.addEventListener("click", () => {
                    playChannel(channel.url);
                });
                channelList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));

    // স্ট্রিম চালানোর ফাংশন
    function playChannel(url) {
        videoPlayer.src = url;
        videoPlayer.play();
    }
});