#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
Озвучка текста
Для аудирования английского языка в формате:
"[En] [pause 2 sec] [En slowly] [pause 2 sec] [RU] [pause 1 sec]"
 
https://gtts.readthedocs.io/en/latest/

dependency:
$ sudo apt install python3-pip
$ python -mpip install gTTS 
$ pip install pydub
'''
 
'''
Use
$ python gen_gTTS_from_file.py file_sentences.txt

file_sentences.txt:
Where do you usually go on vacation? - Куда вы обычно ездите на каникулы?
He was tired yesterday. - Он вчера устал.
I was a good friend. - Я был хорошим другом.

'''
from gtts import gTTS,tokenizer
import sys
import os
from pydub import AudioSegment

def combined():
    # Загрузка аудиофайлов
    chunk_en = AudioSegment.from_file("play_en.mp3", format="mp3")
    chunk_en_slowly = AudioSegment.from_file("play_en_slowly.mp3", format="mp3")
    chunk_ru = AudioSegment.from_file("play_ru.mp3", format="mp3")
    # Создание паузы длительностью 2 секунды
    chunk_pause_2 = AudioSegment.silent(duration=2000)
    chunk_pause_1 = AudioSegment.silent(duration=1000)

    if os.path.exists('play.mp3') == False:
        # Склеивание аудиофайлов
        combined_audio = chunk_en + chunk_pause_2 + chunk_en_slowly + chunk_pause_2 + chunk_ru + chunk_pause_1
        # Сохранение объединенного аудиофайла
        combined_audio.export("play.mp3", format="mp3")
    else:
        full_play = AudioSegment.from_file("play.mp3", format="mp3")
        # Склеивание аудиофайлов
        combined_audio = full_play + chunk_en + chunk_pause_2 + chunk_en_slowly + chunk_pause_2 + chunk_ru + chunk_pause_1
        # Сохранение объединенного аудиофайла
        combined_audio.export("play.mp3", format="mp3")


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
    
    # корреция произношения:
    # заменить слово его транскрипцией "Where do you [ˈuːʒʊəli] go on vacation?"

    tts = gTTS(text="{}".format(text_en), lang='en', tld='com', slow=True, lang_check=False)   
    tts.save("play_en.mp3")

    text_en_slowly = text_en.split(' ')
    text_en_slowly = ", ".join(text_en_slowly)
    tts = gTTS(text="{}".format(text_en_slowly), lang='en', tld='com', slow=True, lang_check=False)   
    tts.save("play_en_slowly.mp3")

    tts = gTTS(text="{}".format(text_ru), lang='ru', slow=False, lang_check=False)   
    tts.save("play_ru.mp3")
    
    combined()

def main(file_path):
    if os.path.exists(file_path) == False:
       print("Указанный файл не существует!") 
       return 1
    resource = open(file_path,'r')
    
    for line in resource:
       save_line_to_mp3(line)       

    resource.close() 
 

if __name__ == "__main__":
    #print("gTTS_gen:{}".format(sys.argv[1]))
    main(sys.argv[1])


