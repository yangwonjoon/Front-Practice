a = [1,2,3,4]	
b = [-3,-1,0,2]	

#내적 = a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
#result = 3


def solution(a, b):
    answer = 0

    for i in range(len(a)):
        answer += a[i]*b[i]

    return answer


print(solution(a,b))