# 오늘은 2007년 1월 1일 월요일이다. 그렇다면 2007년 x월 y일은 무슨 요일일까?
# 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.

# 3 14
# WED

date =['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
nums = [31,28,31,30,31,30,31,31,30,31,30,31]

month, day= map(int,input().split())
result = 0

#월 더하기
for i in range(month-1):
    result += nums[i]

#일 더하기
result += day

print(date[result % 7])