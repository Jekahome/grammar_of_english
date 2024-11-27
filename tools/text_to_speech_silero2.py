#!/usr/bin/python
# -*- coding: utf-8 -*-
 
''' 
Озвучка текста
Для аудирования английского языка

Text to voice use Silero Models:
https://habr.com/ru/articles/660565/
https://github.com/snakers4/silero-models?tab=readme-ov-file
https://models.silero.ai/models/tts/

Голоса:
https://oobabooga.github.io/silero-samples/

Dependencies:
sudo apt update && sudo apt install ffmpeg
pip install numpy
pip install pydub --break-system-packages
pip install torch --break-system-packages

 
Use
$ cd tools
$ python text_to_speech_silero.py from_sentences.txt
или
$ pipx run python text_to_speech_silero.py from_sentences.txt

from_sentences.txt:
Where do you usually go on vacation? - Куда вы обычно ездите на каникулы?
He was tired yesterday. - Он вчера устал.
I was a good friend. - Я был хорошим другом.

'''

from pydub import AudioSegment
import torch
import os
import sys

device = torch.device('cpu')
torch.set_num_threads(4)
local_file_model_en = 'model_en.pt'
local_file_model_ru = 'model_ru.pt'
sample_rate = 48000  # 8000, 24000, 48000

if not os.path.isfile(local_file_model_en):
    torch.hub.download_url_to_file('https://models.silero.ai/models/tts/en/v3_en.pt',local_file_model_en)  

model_en = torch.package.PackageImporter(local_file_model_en).load_pickle("tts_models", "model")
model_en.to(device)
 
if not os.path.isfile(local_file_model_ru):
    torch.hub.download_url_to_file('https://models.silero.ai/models/tts/ru/ru_v3.pt',local_file_model_ru) 

model_ru = torch.package.PackageImporter(local_file_model_ru).load_pickle("tts_models", "model")
model_ru.to(device)

speaker_ru = 'xenia'  # 'aidar', 'baya', 'kseniya', 'xenia', 'random'
speaker_en = 'en_74' # famale en_74 en_117 en_39 en_52 en_97 en_60 en_111  male en_31 https://oobabooga.github.io/silero-samples/

 
def quality_improvement_audio(file_to):
    audio = AudioSegment.from_wav("sound/play.wav")
    audio.export(file_to, format="mp3") #  bitrate="128k" 192/128
    os.remove("sound/play.wav")

def combined():
    chunk_en = AudioSegment.from_file("sound/play_en.wav", format="wav")
    # chunk_en_slowly = AudioSegment.from_file("sound/play_en_slowly.wav", format="wav")
    chunk_ru = AudioSegment.from_file("sound/play_ru.wav", format="wav")
  
    chunk_pause_2 = AudioSegment.silent(duration=1000)
    chunk_pause_1 = AudioSegment.silent(duration=1000)

    if os.path.exists('sound/play.wav') == False:
        # Склеивание аудиофайлов
        #combined_audio = chunk_en_slowly + chunk_pause_2 + chunk_en + chunk_pause_2 + chunk_ru + chunk_pause_1
        combined_audio = chunk_ru + chunk_pause_1 + chunk_pause_2 + chunk_en + chunk_pause_2
        # Сохранение объединенного аудиофайла
        combined_audio.export("sound/play.wav", format="wav")
    else:
        full_play = AudioSegment.from_file("sound/play.wav", format="wav")
        # Склеивание аудиофайлов
        combined_audio = full_play + chunk_ru + chunk_pause_1 + chunk_pause_2 + chunk_en + chunk_pause_2
          
        # Сохранение объединенного аудиофайла
        combined_audio.export("sound/play.wav", format="wav")
        
    os.remove("sound/play_en.wav")
    # os.remove("sound/play_en_slowly.wav")  
    os.remove("sound/play_ru.wav")   
 

def save_line_to_wav(line):
    if os.path.exists('sound') == False:
       os.mkdir('sound')
    if len(line) == 0:
        print("Text не обнаружен")
    
    text_en = text_ru = text_en_slowly = ''
    # для случая множества тире
    if "—" in line:
        text = line.split("—",1)
        if len(text) < 2:
            return 1
        text_en = text[0].rstrip()
        text_ru = text[1].lstrip()
        text_en_slowly = text_en
    else:
        return 1

    text_en = "<speak><prosody rate=\"medium\">" + text_en + "</prosody></speak>"
    text_en_slowly = ", ".join(text_en_slowly.split(' '))
    # <prosody rate="x-fast"> … </prosody> x-slow, slow, medium, fast, x-fast https://github.com/snakers4/silero-models/wiki/SSML
 
    output = model_en.save_wav(ssml_text=text_en,
        speaker=speaker_en,
        sample_rate=sample_rate,
    )
    os.rename(output,'sound/play_en.wav')

    '''
    output = model_en.save_wav(text=text_en_slowly,
        speaker=speaker_en,
        sample_rate=sample_rate,
    )
    os.rename(output,'sound/play_en_slowly.wav')
    '''

    output = model_ru.save_wav(text=text_ru,
        speaker=speaker_ru,
        sample_rate=sample_rate,
    )
    os.rename(output,'sound/play_ru.wav')

    combined()


def main(file_path):
    if os.path.exists(file_path) == False:
       print("Указанный файл не существует!") 
       return 1
    resource = open(file_path,'r')
    
    for line in resource:
       save_line_to_wav(line)       
    
    resource.close() 
    quality_improvement_audio("sound/play.mp3")

if __name__ == "__main__":
    main(sys.argv[1])
