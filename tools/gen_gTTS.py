#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
Озвучка текста
Для аудирования английского языка


https://gtts.readthedocs.io/en/latest/

dependency:
$ sudo apt install python3-pip
$ python -mpip install gTTS 
$ python -mpip install playsound
'''



'''
Use

$ python gen_gTTS.py 'How aare you?' 'en'
$ python gen_gTTS.py 'Как твои дела?' 'ru'

Use cli:
$ gtts-cli 'Nick takes sub. the maps and puts them in his bag.' --nocheck --lang en --output play.mp3
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
        
        
    # возможно не сохранять
    #mp3_fp = open("play.mp3",'wb+') 
    #mp3_fp.truncate(0)
    #tts = gTTS("{}".format(text), lang='en', tld='com', slow=False)
    #tts.write_to_fp(mp3_fp)    

if __name__ == "__main__":
    #print("gTTS_gen:{}".format(sys.argv[1]))
    if len(sys.argv) == 3:
         main(sys.argv[1], sys.argv[2])
    else:
       print("Формат ввода не верен") 

