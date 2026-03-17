# Listen: Between Two Worlds


<div id="listen-container"></div>
 
<script>
 
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Between_Two_Worlds/Between_Two_Worlds.vtt";
        const audio = "/listen/A1/Between_Two_Worlds/Between_Two_Worlds.opus";
   
        const listen = new window.Listen({container:container,sub:subtitles, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>
