cards1 = ["i", "water", "drink"]
cards2 = ["want", "to"]
goals = ["i", "want", "to", "drink", "water"]

answer = "Yes"

for i in goals:
        if len(cards1) >0 and i == cards1[0]:
            cards1.pop(0)   
        elif len(cards2) >0 and i == cards2[0]:
            cards2.pop(0)
        else:
            answer =  'No'
            break
            
print(answer)



    

    