def canTransportInTime(time, a, b, g, s, w, t):
    total_gold = 0
    total_silver = 0
    total_combined = 0
    
    for i in range(len(g)):
        # 최대 왕복 횟수 계산
        max_trips = time // (2 * t[i])
        if time % (2 * t[i]) >= t[i]:
            max_trips += 1
        
        # 운반 가능한 금, 은, 금+은의 양 계산
        max_gold = min(g[i], max_trips * w[i])
        max_silver = min(s[i], max_trips * w[i])
        max_combined = min(g[i] + s[i], max_trips * w[i])
        
        total_gold += max_gold
        total_silver += max_silver
        total_combined += max_combined
        
        # 목표를 충족하는지 확인
        if total_gold >= a and total_silver >= b and total_combined >= a + b:
            return True
    
    return False

def solution(a, b, g, s, w, t):
    left = 0
    right = 10**18
    answer = right
    
    while left <= right:
        mid = (left + right) // 2
        if canTransportInTime(mid, a, b, g, s, w, t):
            answer = mid
            right = mid - 1
        else:
            left = mid + 1
    
    return answer

# 테스트 예시
print(solution(10, 10, [100], [100], [7], [10]))  # 50
print(solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]))  # 499