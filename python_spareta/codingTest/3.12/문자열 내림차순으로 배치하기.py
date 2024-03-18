s = "Zbcdefg"	

#s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴
#소문자 -> 대문자 순
#result = "gfedcbZ"

# print('g' > 'a') true

def solution(s):
    
    answer = ''
    big = []
    small = []

    for i in s:
        if(i.isupper()):
            big.append(i)
        else:
            small.append(i)

    small.sort(reverse=True)
    big.sort(reverse=True)
    answer = ''.join(small) + ''.join(big)

    return answer

print(solution(s))