# 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
#즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

# QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

# t = input()
# r_arr = []
# s_arr = []

# #처음에 t 수만큼 문자열 배열 s_arr와 숫자 저장 배열 r_arr에 저장
# for i in range(int(t)):
#     r, s = input().split()
#     r_arr.append(r)
#     s_arr.append(s)

# #배열을 순회하며 s_arr의 length만큼 돔
# for i in range(len(s_arr)):
#     result = ''
#     #s_arr의 요소별 length만큼 순회하며 이에 맞는 r_arr 요소와 곱하여 출력
#     for j in range(len(s_arr[i])):
#         result += s_arr[i][j]*int(r_arr[i])
#     print(result)
        


#좋아보이는풀이

n = int(input())

for _ in range(n):
    cnt, word = input().split()
    for x in word:
        print(x*int(cnt), end='')  # end='' 옆으로 붙임
    print()  # 줄넘김

t= int(input())

for _ in range(t):
    r, s = input().split()
    for i in s:
        print(i*int(r), end='')
    print()
        


