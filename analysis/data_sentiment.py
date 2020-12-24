import nltk
from textblob import TextBlob
import csv 


DATA_URL = "hemingway_data.txt"
text = open(DATA_URL, "r").read()
data_blob = TextBlob(text)
data_blob.tags
data_blob.noun_phrases

FULL_DATA_URL = "../data/a-moveable-feast.txt"
data_txt = open(FULL_DATA_URL, "r").read()
full_blob = TextBlob(data_txt)
full_blob.tags
full_blob.noun_phrases

full_sentence = []
full_subjectivity = []
full_polarity = []

keys = ["restaurant", "food", "table", "public", "home", "meal", "dinner", "lunch", "breakfast", "cafe", "eating", "eat", "kitchen", "dining"]


for sentence in full_blob.sentences:
    # if any([word in sentence for word in keys]):
    full_sentence.append(sentence)
    full_subjectivity.append(sentence.sentiment.subjectivity)
    full_polarity.append(sentence.sentiment.polarity)

# print(full_sentence)

with open('full_subjectivity.csv', 'w', ) as myfile:
    wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
    for sent in full_subjectivity:
        wr.writerow([sent])    
with open('full_polarity.csv', 'w', ) as myfile:
    wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
    for sent in full_polarity:
        wr.writerow([sent])   
with open('full_sentence.csv', 'w', ) as myfile:
    wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
    for sent in full_sentence:
        wr.writerow([sent])   