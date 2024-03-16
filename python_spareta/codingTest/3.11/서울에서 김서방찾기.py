seoul = ["Jane", "Kim"]

#String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수
#result = "김서방은 1에 있다"

idx =seoul.index('Kim')

def solution(seoul):
    return f'김서방은 {idx}에 있다'


print(solution(seoul))