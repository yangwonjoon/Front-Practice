X ="12321"	
Y ="42531"	


# result = "321"



def solution(X, Y):
    answer = []

    for i in X:
        if i in Y:
            Y = Y.replace(i,'',1)
            answer.append(i)
    answer.sort(reverse=True)    

    return ('').join(answer)

print(solution(X,Y))