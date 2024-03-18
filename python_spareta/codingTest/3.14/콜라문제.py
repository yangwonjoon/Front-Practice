a=2	#콜라를 받기 위해 마트에 줘야하는 병수
b=1	#빈병 a개를 주면 마트에서 주는 병수
n=20 #가지고 있는 병수	

# result=19

#n개를 주면 a개당 1개를 준다

answer = 0
#나머지
rest = 0

while(n >= a):
    rest = n%2
    n = (n//a)*b
    answer += n
    n += rest
    

