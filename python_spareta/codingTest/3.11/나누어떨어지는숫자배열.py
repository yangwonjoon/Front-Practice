arr =[2, 36, 1, 3]	
divisor	= 10


# return = [5, 10]

def solution(arr, divisor):
    answer = []

    for i in arr:
        if(i % divisor == 0):
            answer.append(i)
    answer.sort()

    if len(answer)==0:
        answer.append(-1)
    return answer


print(solution(arr,divisor))