today = "2020.01.01"
terms = ["A 6", "B 12", "C 3"]
privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

#result = [1, 3]

# print(today.split('.'))
# print(privacies[0].split(' '))


for i in privacies:
    for j in terms:
        #terms 타입과 privacies 타입과 같을때
        if(j.split(' ')[0] == i.split(' ')[1] ):
            
            year = int(i.split(' ')[0].split('.')[0])
            month = int(i.split(' ')[0].split('.')[1])
            day = int(i.split(' ')[0].split('.')[2])
            print(i, j, day)





            # #terms의 month와 privacies의 month를 더함
            # month = int(i.split('.')[1]) + int(j.split(' ')[1])

            # yearPlus = month // 12
            # monthPlus = month % 12

            # print(i)
            # # print(month, yearPlus, monthPlus)

            # resultDate = int(i.split('.')[0]+yearPlus)
            # resultDate
            

