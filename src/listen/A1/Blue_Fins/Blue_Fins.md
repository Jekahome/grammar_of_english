
# Listen: Blue Fins

<div id="listen-container"></div>
 
<script>
 
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Blue_Fins/Blue_Fins.vtt";
        const audio = "/listen/A1/Blue_Fins/Blue_Fins.opus";
   
        const listen = new window.Listen({container:container,sub:subtitles, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>
