# Listen: Alissa

Слова не в A1:
* A2: laugh, smiles, packing, pleased, angry, arrive, thin, shouts, unhappy, cries, pack, away, rest, serves, customers, lady, thank, large
* B1: steps, Suddenly, owner, count, honest, ungrateful, voice, 
* B2: slave
* C1: obey, midday, purse

<br>
<audio id="listen-audio" controls style="width:100%">
  <source src="/../listen/A1/alissa/alissa.opus" type="audio/ogg">
</audio>
<br>
  <details>
    <summary>settings page</summary>
    <ul>
    <li>
    <label>
      <input type="checkbox" id="showLevel">
      Show words level
    </label>
    </li>
     <li>
    <label for="pageSize">Number of sentences displayed on the page:</label>
    <input type="range" id="pageSize" name="pageSize" min="2" max="12" value="10" oninput="pageSizeValue.textContent = this.value">
    <span id="pageSizeValue">10</span> 
    </li> 
    <li>
    Subtitle styles:<br>
    <textarea id="cssEditor" rows="10" cols="50" placeholder="css for subtitles">
/* css for subtitles */
#listen-subs{
  margin-top:30px;
  font-size:34px;
  line-height:1.7;
  text-align:center;
}
    </textarea>
    </li>
    </ul>
    <hr>
    <br>
</details>

<div id="listen-subs"></div>

<style id="userStyles"></style>

<script>
const textarea = document.getElementById("cssEditor");
const styleBlock = document.getElementById("userStyles");
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 

        const pageSizeSlider = document.getElementById("pageSize");
        const pageSizeValue = document.getElementById("pageSizeValue");

        pageSizeSlider.addEventListener("input", () => {
            pageSizeValue.textContent = pageSizeSlider.value;
            render(Number(pageSizeSlider.value));
        });

        document.getElementById("showLevel").addEventListener("click", () => {
           render(Number(document.getElementById("pageSize").value));
        });
 
        let timer;

        textarea.addEventListener("input", () => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            styleBlock.textContent = textarea.value;
            updateCSS();
          }, 200);
        });

        render();
    } catch (error) {
        console.error("Error build:", error);
    }
});
function render(pageSize=10){
    updateCSS();
    const subs = document.getElementById("listen-subs");
    const audio = document.getElementById("listen-audio");
    const showLevel = document.getElementById("showLevel").checked;
    const listen = new Listen({audio:audio, subsDiv:subs, showLevel:showLevel, pageSize:pageSize});
    listen.loadVTT("/../listen/A1/alissa/alissa.vtt");
}
function updateCSS() {
    styleBlock.textContent = textarea.value;
}
</script>
