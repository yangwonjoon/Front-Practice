#반복문 연습문제

num_list = [1, 2, 3, 6, 3, 2, 4, 5, 6, 2, 4]

# for num in num_list:
#     if(num %2 == 0):
#         print(num)

sum=0

for num in num_list:

    if(num %2 == 0):
        sum+=1

print(sum)