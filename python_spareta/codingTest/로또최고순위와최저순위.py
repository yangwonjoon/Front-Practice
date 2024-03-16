lottos = [44, 1, 0, 0, 31, 25]	
win_nums = [31, 10, 45, 1, 6, 19]
#result = [3,5]


rank=[6,6,5,4,3,2,1]

zero = lottos.count(0)
count = 0
for i in win_nums:
    if i in lottos:
        count += 1

answer = [rank[zero+count],rank[count]]
print(answer)



# rank ={6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6}
# #0의 개수
# count = lottos.count(0)
# #0만 제거
# lottos = [num for num in lottos if num != 0]
# answer=[]

# for i in range(len(lottos)):
#     if(lottos[i] in win_nums):
#         count += 1

# if(count>-2):
#     answer.append(rank[count])
#     answer.append(rank[count-2])
# else:
#     answer.append(rank[count])
#     answer.append(rank[0])







# for i in range(1,46):
    