document.getElementById('show-video-link').addEventListener('click', function(event) {
    event.preventDefault();

    var videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';

    var iframe = videoContainer.querySelector('iframe');
    var currentSrc = iframe.src;
    if (currentSrc.indexOf('autoplay=1') === -1) {
        var separator = currentSrc.indexOf('?') > -1 ? '&' : '?';
        iframe.src = currentSrc + separator + 'autoplay=1';
    }
});