a=5
b=3	

# explain: a,b 뭐가 크든 두 정수 사이의 합을 다 더한 값을 반환
# result = 12

result = 0

for i in range(min([a,b]), max([a,b])+1):
    result += i

print(result)



#좋아보였던 남의 코드

# if a > b:
#       a, b = b, a
    
# result = sum(range(a, b + 1))
