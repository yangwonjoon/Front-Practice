import sys

n = int(sys.stdin.readline())
data = []

for i in range(n):
    num = int(sys.stdin.readline().strip())
    
    if num == 0:
        for j in range(len(data) - 1, -1, -1):
            if data[j] > 0:
                del data[j]
                break
    else:
        data.append(num)

print(sum(data))