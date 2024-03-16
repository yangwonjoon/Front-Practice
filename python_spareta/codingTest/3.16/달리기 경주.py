players = ["mumu", "soe", "kai", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]

#result = ["mumu", "kai", "mine", "soe", "poe"]

# print(players.index('soe'))
# del players[players.index('soe')]
# print(players)

for i in callings:
    
    idx = players.index(i)-2
    players.remove(i)
    players.insert(i, idx)

print(players)
    
    