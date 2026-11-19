# Practice understanding words

<div id="menu_words"></div>
<div id="control"></div>
<div id="listen_and_write"></div>
 
<br>
<table id="pixel" class="pixel-table"></table><br>

<script>
let g_practice = null;
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 

        let editor_symbol = new EditorSymbol({callback: checkAnswer});

        g_practice = new PracticeWords({
            el_listen_and_write: document.getElementById('listen_and_write'), 
            el_exercise_control: document.getElementById('control'), 
            el_menu_words: document.getElementById('menu_words'), 
            el_pixel: document.getElementById('pixel'),
            editor_symbol: editor_symbol
        });
        g_practice.genExercisesListenAndWrite();
         
        
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
function checkAnswer(value){
    value = textNormalize(value);
    return value==g_practice.getAnswer();
}
</script>    
