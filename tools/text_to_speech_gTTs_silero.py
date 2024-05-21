#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
Озвучка текста
Для аудирования английского языка

Важно!!!
Модуль gTTs выдает плохой звук если превысить обьем текста или частоту обращений на языковой сервер.

Text to voice use Silero Models:
https://habr.com/ru/articles/660565/
https://github.com/snakers4/silero-models?tab=readme-ov-file
https://models.silero.ai/models/tts/

https://gtts.readthedocs.io/en/latest/

dependency:
$ sudo apt install python3-pip
$ python -mpip install gTTS 
$ pip install pydub
'''



'''
Use
$ cd tools
$ python text_to_speech_gTTs_silero.py from_sentences.txt to_play.mp3

from_sentences.txt:
Where do you usually go on vacation? - Куда вы обычно ездите на каникулы?
He was tired yesterday. - Он вчера устал.
I was a good friend. - Я был хорошим другом.

'''
from gtts import gTTS,tokenizer
import torch
import sys
import os
import random
from pydub import AudioSegment
from pydub.utils import which
import time
from moviepy.editor import AudioFileClip, concatenate_audioclips

device = torch.device('cpu')
torch.set_num_threads(4)
local_file_model_ru = 'model_ru.pt'
sample_rate = 24000  # 8000, 24000, 48000
if not os.path.isfile(local_file_model_ru):
    torch.hub.download_url_to_file('https://models.silero.ai/models/tts/ru/ru_v3.pt',local_file_model_ru) 

model_ru = torch.package.PackageImporter(local_file_model_ru).load_pickle("tts_models", "model")
model_ru.to(device)
speakers_ru = ['xenia','baya']  # 'aidar', 'baya', 'kseniya', 'xenia', 'random'

AudioSegment.converter = which("ffmpeg")
 
def quality_improvement_audio(file_to):
    # Загрузка аудиофайла
    #audio = AudioSegment.from_mp3("play_total.mp3")

    # Изменение битрейта на 320/192 кбит/с
    #audio = audio.set_frame_rate(19200)

    # Увеличение частоты дискретизации до 44100 Гц
    #audio = audio.set_channels(2)

    # Увеличение громкости на 10 дБ
    # audio = audio + 10

    # Сохранение улучшенного аудиофайла
    #audio.export(file_to, format="mp3")
    os.rename("play_total.mp3",file_to)
    os.remove("play_en.mp3")
    os.remove("play_en_slowly.mp3")  
    os.remove("play_ru.mp3")  
   

def combined():
    # Загрузка аудиофайлов
    chunk_en = AudioSegment.from_file("play_en.mp3",format="mp3")
    chunk_en_slowly = AudioSegment.from_file("play_en_slowly.mp3",format="mp3")
    chunk_ru = AudioSegment.from_file("play_ru.mp3",format="mp3")
    chunk_ru = chunk_ru.set_frame_rate(32000)
    # Создание паузы длительностью 2 секунды
    chunk_pause_2 = AudioSegment.silent(duration=1000)
    chunk_pause_1 = AudioSegment.silent(duration=1000)

 
    if os.path.exists("play_total.mp3") == False:
        # Склеивание аудиофайлов
        #combined_audio = chunk_en_slowly  + chunk_en + chunk_ru + chunk_pause_1
        combined_audio = chunk_en_slowly + chunk_en + chunk_ru 
        
        # Сохранение объединенного аудиофайла
        combined_audio.export("play_total.mp3", format="mp3")
    else:
        full_play = AudioSegment.from_file("play_total.mp3",format="mp3")
        # Склеивание аудиофайлов
        combined_audio = full_play + chunk_en_slowly + chunk_en  + chunk_ru
        
        # Сохранение объединенного аудиофайла
        combined_audio.export("play_total.mp3", format="mp3")
        
 
def save_line_to_mp3(line):
    if len(line) == 0:
        print("Text не обнаружен")
    text = line.split('-',1)
    if len(text) < 2:
        return 1

    text_en = text[0].rstrip()
    text_ru = text[1].lstrip()

    # замена слов:
    # tokenizer.symbols.SUB_PAIRS.append(
    #    ('sub.', 'submarine')
    # )
    # tokenizer.pre_processors.word_sub("{}".format(text))
    
    # коррекция произношения:
    # заменить слово его транскрипцией "Where do you [ˈuːʒʊəli] go on vacation?"

    tts = gTTS(text="{}".format(text_en), lang='en', slow=False, lang_check=False)   
    tts.save("play_en.mp3")
    time.sleep(1.5)
    text_en_slowly = text_en.split(' ')
    text_en_slowly = ", ".join(text_en_slowly)
    tts = gTTS(text="{}".format(text_en_slowly), lang='en', slow=False, lang_check=False)   
    tts.save("play_en_slowly.mp3")
     
          
    speaker_ru = speakers_ru[random.randint(0, len(speakers_ru)-1)]
    output = model_ru.save_wav(text=text_ru,
        speaker=speaker_ru,
        sample_rate=sample_rate,
    )
    os.rename(output,'play_ru.wav')
    audio = AudioSegment.from_file("play_ru.wav",format="wav")
    audio.export("play_ru.mp3", format="mp3")
    os.remove("play_ru.wav")
 
    combined()

def main(file_path, file_to):
    if os.path.exists(file_path) == False:
       print("Указанный файл не существует!") 
       return 1
    resource = open(file_path,'r')
 
    for line in resource:
       save_line_to_mp3(line)  
       time.sleep(1.5)     
    
    resource.close() 
    quality_improvement_audio(file_to)
  

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
  
   

