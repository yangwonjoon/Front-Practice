#try-except

people = [
    {'name': 'bob', 'age': 20},
    {'name': 'carry', 'age': 38},
    {'name': 'john', 'age': 7},
    {'name': 'smith', 'age': 17},
    {'name': 'ben', 'age': 27},
    {'name': 'bobby'},
    {'name': 'red', 'age': 32},
    {'name': 'queen', 'age': 25}
]

# for person in people:
#     if person['age'] > 20:
#         print (person['name']) 

for person in people:
    try:
        if person['age'] > 20:
            print (person['name'])
    except:
        name = person['name']
        print(f'{name} - 에러입니다')