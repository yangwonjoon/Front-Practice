#명예의전당, k명
temple =[]
#명예의 전당, 최하위 점수
answer=[]



#하나씩 score 요소를 temple에 넣음
#temple의 length가 k가 되는 순간 다음요소부터 비교
#temple의 요소보다 다음요소가 크면 temple에서 제일 작은 값 제거, 다음요소는 temple 에 넣고 정렬 뒤 제일 작은 값 저장

score = [10, 100, 20, 150, 1, 100, 200]
k= 3
# result =[10, 10, 10, 20, 20, 100, 100]

for i in score:
    
    if(len(temple) == k):
        #i가 전당 요소보다 크면
        if(i > min(temple)):
            #최하위점수는 제거
            temple.remove(min(temple))
            temple.append(i)
            temple.sort(reverse=True)
            answer.append(min(temple))
        else:
            answer.append(min(temple))
    else:
        temple.append(i)
        temple.sort(reverse=True)
        answer.append(min(temple))

# temple = [150,100,20]
# answer = [10,10,10,20]       


print(temple, answer)



