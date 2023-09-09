
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // Get the screen sharing stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Set the stream as the video source
        videoElement.srcObject = mediaStream;
        // Wait for the video to load its metadata
        await videoElement.play();
    } catch (error) {
        // Error handling
        console.error(`Oops, error here: ${error}`);
    }
}

button.addEventListener('click', async () => {
    try {
        // Disable the button
        button.disabled = true;
        // Request Picture-in-Picture mode
        await videoElement.requestPictureInPicture();
    } catch (error) {
        // Error handling
        console.error(`Oops, error here: ${error}`);
    } finally {
        // Re-enable the button whether the request succeeded or failed
        button.disabled = false;
    }
});

// On load
selectMediaStream();
