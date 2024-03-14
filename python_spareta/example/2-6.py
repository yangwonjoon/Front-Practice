#삼항연산자

# num = 3

# if num%2 == 0:
#     result = "짝수"
# else:
#     result = "홀수"

# print(f"{num}은 {result}입니다.")

num = 3

# result = "짝수" if num%2 == 0 else "홀수"
result = '짝' if num%2==0 else '홀'

print(f"{num}은 {result}입니다.")


#반복문 간단히

a_list  = [1, 3, 2, 5, 1, 2]

b_list = []
for a in a_list:
    b_list.append(a*2)

b_list = [a*2 for a in a_list]    

print(b_list)