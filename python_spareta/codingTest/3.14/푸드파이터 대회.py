import math

food = [1, 3, 4, 6]
#result = "1223330333221"

# print(math.floor(3/2)) #1
# print(math.floor(4/2)) #2
# print(math.floor(6/2)) #3

count = []
answer = ''

for i in food[1:]:
    count.append(math.floor(i/2))

print(count)

for i in range(len(count)):
    answer += str(i+1)*count[i]

print(answer + '0' +answer[::-1])



#좋아보이는 답

# answer ="0"
# for i in range(len(food)-1, 0,-1):
    
#     c = int(food[i]/2)
#     print(c)
#     while c>0:
#         answer = str(i) + answer + str(i)
#         c -= 1

# print(answer)