price = 3 # count*price
money = 20
count = 4 # 탄 횟수

#금액이 부족하지 않으면 0
#result = 10

def solution(price, money, count):
    sum = 0

    for i in range(1, count+1):
        sum += (price*i)

    if(money - sum >= 0 ):
        return 0
    else:
        return sum-money


print(solution(price, money, count))