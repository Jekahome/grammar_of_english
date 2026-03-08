# Alphabet

| Letter | Pronunciation (Ru)      |
|--------|--------------------------|
| A      | Эй                       |
| B      | Би                       |
| C      | Си                       |
| D      | Ди                       |
| E      | И                        |
| F      | Эф                       |
| G      | Джи                      |
| H      | Эйч                      |
| I      | Ай                       |
| J      | Джей                     |
| K      | Кей                      |
| L      | Эл                       |
| M      | Эм                       |
| N      | Эн                       |
| O      | Оу                       |
| P      | Пи                       |
| Q      | Кью                      |
| R      | Ар                       |
| S      | Эс                       |
| T      | Ти                       |
| U      | Ю                        |
| V      | Ви                       |
| W     | Дабл-ю                   |
| X      | Экс                      |
| Y      | Уай                      |
| Z      | Зи (амер.) / Зэд (брит.) |


 
<button id="startRecord">Начать запись</button>
<button id="stopRecord">Остановить запись</button>
<button id="speak">Озвучить</button>

<script>
let recorder;
let chunks = [];

async function startRecording() {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: true
  });

  recorder = new MediaRecorder(stream);
  chunks = [];

  recorder.ondataavailable = e => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: "audio/webm" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "speech.webm";
    a.click();
  };

  recorder.start();
}

function stopRecording() {
  if (recorder && recorder.state !== "inactive") {
    recorder.stop();
  }
}

document.getElementById("startRecord").onclick = startRecording;
document.getElementById("stopRecord").onclick = stopRecording;

document.getElementById("speak").onclick = () => {
  const utterance = new SpeechSynthesisUtterance("Привет! Проверка записи речи.");
  speechSynthesis.speak(utterance);
};
</script>







 