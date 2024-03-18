n = 3	

# result = "수박수"


def solution(n):

    first = "수"
    back = "박"
    answer = ''

    for i in range(n):
        if(i % 2 ==0):
            answer += first
        else:
            answer += back

    return answer



print(solution(n))


#신박한 코드

# def water_melon(n):
#     # 함수를 완성하세요.
#     str = "수박"*n
#     return str[:n]