import sys
import random
import json

characters=[{'name':'clb','rate':0.23}, {'name':'foiegras','rate':0.61},{'name':'b52','rate':0.61},{'name':'peking','rate':0.61},
            {'name':'bamboo','rate':0.62},{'name':'gingerbread','rate':0.23},{'name':'boston','rate':0.05}, {'name':'scoop','rate':0.05},
            {'name':'tiramisu','rate':0.72},{'name':'escargot','rate':0.72},{'name':'hotdog','rate':0.72},{'name':'mangopud','rate':0.72},
            {'name':'hamburger','rate':0.72}, {'name':'steak','rate':0.72}, {'name':'tangyuan','rate':0.72}, {'name':'sanma','rate':0.72},
            {'name':'salad','rate':0.72},{'name':'napoleon','rate':0.76}, {'name':'pastel','rate':0.72}, {'name':'yuxiang','rate':0.72},
            {'name':'sukiyaki','rate':0.72},{'name':'brownie','rate':0.72}, {'name':'redwine','rate':0.72},{'name':'gyoza','rate':0.72},
            {'name':'chocolate','rate':0.72}, {'name':'udon','rate':0.72} ,{'name':'sweettofu','rate':0.72},{'name':'eggette','rate':1.46},
            {'name':'pineapplecake','rate':1.47}, {'name':'longbao','rate':4.13},{'name':'coffee','rate':4.13}, {'name':'sashimi','rate':4.13},
            {'name':'macaron','rate':4.13}, {'name':'xongzi','rate':4.13}, {'name':'sakuramochi','rate':4.13}, {'name':'tomyum','rate':4.13},
            {'name':'taiyaki','rate':4.13},{'name':'dorayaki','rate':4.13},{'name':'milk','rate':4.13},{'name':'sake','rate':4.13}, 
            {'name':'tempura','rate':4.13}, {'name':'spicygluten','rate':4.13}, {'name':'jiuniang','rate':4.14}, {'name':'omurice','rate':4.14},
            {'name':'orangejuice','rate':4.14},{'name':'ume','rate':4.14},{'name':'miso','rate':4.14},{'name':'yellowwine','rate':4.14},
            {'name':'skewer','rate':0.46},{'name':'jello','rate':0.46},{'name':'pancake','rate':0.46},{'name':'popcorn','rate':0.47}]

def main():
    total_weight=100
    random_nr=random.randint(0,total_weight)

    for item in characters:
        #print(item)
        if(random_nr < item['rate']):
            print(item['name'])
            break
        random_nr=random_nr-item['rate']
    #print(item['name'])

if __name__=='__main__':
    main()