document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('youtube-url-input').addEventListener('paste', function (e) {
        setTimeout(() => {
            const url = e.target.value;
            const videoId = extractVideoId(url);

            if (videoId) {
                fetch(`/fetch_youtube_details?video_id=${videoId}`).then(response => response.json()).then(data => {
                    if (data) {
                        console.log(data)
                        const parsedDuration = parseYoutubeDuration(data.duration);
                        let shorthand = shortenShortDescription(data.short_description)
                        document.getElementById('author').value = data.author;
                        document.getElementById('title').value = data.title;
                        document.getElementById('short_description').value = shorthand;
                        document.getElementById('long_description').value = data.long_description;
                        document.getElementById('thumbnail').src = data.featured_image;
                        document.getElementById('duration').value = parsedDuration;
                        document.getElementById('thumbnail').value = data.featured_image

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

    const parseYoutubeDuration = (duration) => {
        let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        let hours = parseInt(match[1]) || 0;
        let minutes = parseInt(match[2]) || 0;
        let seconds = parseInt(match[3]) || 0;

        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        return formatTime(totalSeconds);
    }

    const formatTime = (totalSeconds) => {
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        let formattedHours = String(hours).padStart(2, '0');
        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    const shortenShortDescription = (description) => {
        if (description.length > 100) {
            return description.substring(0, 100 - 3) + "...";
        }
    }
});