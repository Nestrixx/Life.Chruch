document.getElementById('youtube-url-input').addEventListener('paste', function (e) {

    setTimeout(() => {
        const url = e.target.value;
        const videoId = extractVideoId(url);

        if (videoId) {
            fetch(`/fetch_youtube_details?video_id=${videoId}`).then(response => response.json()).then(data => {
                if (data) {
                    document.getElementById('author').value = data.author;
                    document.getElementById('title').value = data.title;
                    document.getElementById('short_description').value = data.short_description;
                    document.getElementById('long_description').value = data.long_description;
                    document.getElementById('thumbnail').src = data.featured_image;
                    document.getElementById('duration').value = data.duration;
                }
            }).catch(error => console.error('Error fetching video details', error))
        }
    }, 500)
});

const extractVideoId = (url) => {
    const regex = /(?:youtu\.be\/|youtube\.com\/\S*?v=|youtube\.com\/embed\/)([^"&?\/\s]{11})/i;
    const match = url.match(regex);
    return match ? match[1] : null;
};
