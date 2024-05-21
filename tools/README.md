# Text to speech

Английский и русский голоса "хорошо" озвучены благодаря [Silero Models](https://models.silero.ai/models/tts/)

```
$ cd tools
$ python text_to_voice_silero.py from_sentences.txt
```

Где файл с текстом `from_sentences.txt` в формате "EN - RU":

```
Where do you usually go on vacation? - Куда вы обычно ездите на каникулы?
He was tired yesterday. - Он вчера устал.
```

Генерация голоса через gTTS выдает приемлемое качество английского голоса, но иногда добавляет шум, треск, щелчки..., а русский на любителя.
