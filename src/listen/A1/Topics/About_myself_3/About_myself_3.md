# About myself 3

<div id="listen-container"></div>

<script>
 
const questions = [
   
];

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const audio = "/listen/A1/Topics/About_myself_3/About_myself_3.wav";
        const subtitles = "/listen/A1/Topics/About_myself_3/About_myself_3.vtt";

        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>