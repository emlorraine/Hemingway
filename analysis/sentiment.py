import numpy as np 
import pandas as pd 
import nltk 
from nltk.tag import pos_tag

DATA_URL = "../data/a-moveable-feast.txt"
COMP_DATA_URL = "../data/kjv-bible.txt"
keys = ["restaurant", "food", "table", "public", "home", "meal", "dinner", "lunch", "breakfast", "cafe", "coffee", "tea", "beer", "wine"]
final_data = []
bible_data = []
data_txt = open(DATA_URL, "r").read().rstrip().split(".")
kjv_txt = open(COMP_DATA_URL, "r").read().rstrip().split(".")
for sent in data_txt:
    if any([word in sent for word in keys]):
        final_data.append(sent)
for sent in kjv_txt:
    if any([word in sent for word in keys]):
        print(sent)
        print("-----------------------------------------")
        bible_data.append(sent)

