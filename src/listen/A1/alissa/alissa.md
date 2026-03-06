# Listen to Alissa

<br>
<audio id="listen-audio" controls style="width:100%">
  <source src="/grammar_of_english/listen/A1/alissa/alissa.opus" type="audio/ogg">
</audio>
<br>
  <details>
    <summary>settings page</summary>
    <label>
      <input type="checkbox" id="showLevel">
      Show word level
    </label>
   <!-- <br>
    <label for="pageSize">Number of sentences displayed on the page:</label>
    <input type="range" id="pageSize" name="pageSize" min="2" max="12" value="10" oninput="pageSizeValue.textContent = this.value">
    <span id="pageSizeValue">10</span> -->
    <hr>
    <br>
</details>

<div id="listen-subs"></div>

 
<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 


        /*const pageSizeSlider = document.getElementById("pageSize");
        const pageSizeValue = document.getElementById("pageSizeValue");

        pageSizeSlider.addEventListener("input", () => {
            pageSizeValue.textContent = pageSizeSlider.value;
            render(pageSizeSlider.value);
        });*/

        document.getElementById("showLevel").addEventListener("click", () => {
           //render(document.getElementById("pageSize").value);
           render();
        });

        render();
    } catch (error) {
        console.error("Error build:", error);
    }
});
   
function render(pageSize=10){
  
    const subs = document.getElementById("listen-subs");
    const audio = document.getElementById("listen-audio");
    const showLevel = document.getElementById("showLevel").checked;
    const listen = new Listen({audio:audio, subsDiv:subs, showLevel:showLevel, pageSize:pageSize});
    listen.loadVTT("/grammar_of_english/listen/A1/alissa/alissa.vtt");
}
</script>