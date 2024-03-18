left = 13
right = 17

#left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return
#result =43


def solution(left, right):

    answer = 0

    for i in range(left, right+1):
        count =0 

        for j in range(1,i+1):
            
            if(i % j ==0):
                count += 1

        if(count % 2==0):
            answer += i
        else:
            answer -= i
                
    return answer


print(solution(left,right))