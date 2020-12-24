import numpy as np 
import pandas as pd 
import re 
import nltk 
from nltk.tag import pos_tag

DATA_URL = "../data/a-moveable-feast.txt"
COMP_DATA_URL = "../data/kjv-bible.txt"
keys = ["restaurant", "food", "table", "public", "home", "meal", "dinner", "lunch", "breakfast", "cafe", "eating", "eat", "kitchen", "dining"]
final_data = []
bible_data = []
data_txt = open(DATA_URL, "r").read().split(".")
kjv_txt = open(COMP_DATA_URL, "r").read().rstrip().split(".")
for sent in data_txt:
    if any([word in sent for word in keys]):
        print(sent)
        final_data.append(sent)
    print("----------------------------------------")

with open('hemingway_data.txt', 'w') as f:
    for item in final_data:
        f.write(item)

# for sent in kjv_txt:
#     if any([word in sent for word in keys]):
#         bible_data.append(sent)


# with open('bible_data.csv', 'w') as f:
#     for item in bible_data:
#         f.write("%s\n" % item)



