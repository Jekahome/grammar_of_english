#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
Озвучка текста
Для аудирования английского языка

https://gtts.readthedocs.io/en/latest/

dependency:
$ sudo apt install python3-pip
$ python -mpip install gTTS 
'''

'''
Use

$ python gen_gTTS.py 'How aare you?' 'en'
$ python gen_gTTS.py 'Как твои дела?' 'ru'

'''
from gtts import gTTS,tokenizer
import sys
import os

def main(text, lang):
     
    # Речевая коррекция (замена слов)
    #tokenizer.symbols.SUB_PAIRS.append(
    #    ('sub.', 'submarine')
    #)
    #tokenizer.pre_processors.word_sub("{}".format(text))
    
    # с сохранением в файл
    if lang == 'en':
        tts = gTTS(text="{}".format(text), lang='en', tld='com', slow=False, lang_check=False)   
        tts.save("play.mp3")
    elif lang == 'ru':
        tts = gTTS(text="{}".format(text), lang='ru', slow=False, lang_check=False)   
        tts.save("play.mp3")
    else:  
        print("Формат ввода не верен")
          

if __name__ == "__main__":
    #print("gTTS_gen:{}".format(sys.argv[1]))
    if len(sys.argv) == 3:
         main(sys.argv[1], sys.argv[2])
    else:
       print("Формат ввода не верен") 

