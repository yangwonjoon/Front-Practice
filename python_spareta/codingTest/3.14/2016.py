#result = "TUE"

#1월 1일은 금요일
#a월 b일은 무슨요일인지 반환(answer)
#SUN,MON,TUE,WED,THU,FRI,SAT

#예 1월 18일을 구하려면
a=5
b=24


day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
month = [31,29,31,30,31,30,31,31,30,31,30,31]

answer = day[(sum(month[:a-1])+b)%7]

print(answer)