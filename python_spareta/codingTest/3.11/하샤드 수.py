x = 10

# explain: x를 x의 자리수 합으로 나누어 떨이지면 true 아니면 false
# result = false


#x를 문자열로 변환후 int()를 문자마다 적용후 list화
x_list = list(map(int, str(x)))
x_sum = sum(x_list)
answer = (True if x % x_sum ==0  else False)

print(answer)