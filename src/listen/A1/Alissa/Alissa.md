# Listen: Alissa

Слова не в A1:
* A2: laugh, smiles, packing, pleased, angry, arrive, thin, shouts, unhappy, cries, pack, away, rest, serves, customers, lady, thank, large
* B1: steps, Suddenly, owner, count, honest, ungrateful, voice, 
* B2: slave
* C1: obey, midday, purse

<br>
<!--
<audio id="listen-audio" controls style="width:100%">
  <source src="/grammar_of_english/listen/A1/alissa/alissa.opus" type="audio/ogg">
</audio>
<br>
  <details>
    <summary>settings page</summary>
    <ul>
    <li>
    <label>
      <input type="checkbox" id="listen-show-level">
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
    <textarea id="listen-css-editor" rows="10" cols="50" placeholder="css for subtitles">
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
-->

<div id="listen-container"></div>
 
<script>
 
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const audio = "/listen/A1/Alissa/Alissa.opus";
        const subtitles = "/listen/A1/Alissa/Alissa.vtt";

        const listen = new window.Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>
