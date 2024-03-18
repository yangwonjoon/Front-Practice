
#"aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해 발음할수 있음 +1 연속x
#result = 2


# def solution(babbling):
#     answer = 0
#     word = ['aya', 'ye','woo','ma']
    
#     for i in babbling:
#         for j in word:
#             if(j*2 not in i):
#                 i= i.replace(j,'')
#         print(i)
#         if(len(i) == 0):
#             answer += 1

#     return answer

# print(solution(babbling))

babbling = 	["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]

def solution(babbling):
    answer = 0
    word = ['aya', 'ye','woo','ma']
    
    for i in babbling:
        for j in word:
            if j*2 not in i:
                i= i.replace(j,' ')
        if i.isspace():
            answer += 1

    return answer

print(solution(babbling))
