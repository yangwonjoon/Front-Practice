import sys
#문제: 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

#입력
# 첫째 줄에 정수의 개수 N(1 <= N <= 100)이 주어진다. 
# 둘째 줄에는 정수가 공백으로 구분되어 있다. 
# 셋 째 줄에는 찾으려고 하는 정수 v가 주어진다. 
# 입력으로 주어지는 정수와 v는 100보다 크거나 같으며,100보다 작거나 같다

#11
#1 4 1 2 4 2 4 2 3 4 4
#2


n = int(sys.stdin.readline()) # 5 입력

num_values = sys.stdin.readline().strip()
num_list = num_values.split()
num_list = [int(x) for x in num_list]

v = int(sys.stdin.readline())

count = 0

for i in range(len(num_list)):
    if(v == num_list[i]):
        count+=1

print(f'갯수는: {count}')
