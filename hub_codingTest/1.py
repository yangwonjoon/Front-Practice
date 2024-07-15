def canTransport(time, required_gold, required_silver, golds, silvers, weight, travel_times):
    total_gold = 0
    total_silver = 0
    total_combined = 0
    
    for i in range(len(golds)):
        max_trips = time // (2 * travel_times[i])
        if time % (2 * travel_times[i]) >= travel_times[i]:
            max_trips += 1
        
        max_gold = min(golds[i], max_trips * weight[i])
        max_silver = min(silvers[i], max_trips * weight[i])
        max_combined = min(golds[i] + silvers[i], max_trips * weight[i])
        
        total_gold += max_gold
        total_silver += max_silver
        total_combined += max_combined
        
        if total_gold >= required_gold and total_silver >= required_silver and total_combined >= required_gold + required_silver:
            return True
    
    return False

def solution(required_gold, required_silver, golds, silvers, weight, travel_times):
    left = 0
    right = 10**12
    answer = right
    
    while left <= right:
        mid = (left + right) // 2
        if canTransport(mid, required_gold, required_silver, golds, silvers, weight, travel_times):
            answer = mid
            right = mid - 1
        else:
            left = mid + 1
    
    return answer


print(solution(10, 10, [100], [100], [7], [10]))  # 50
print(solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]))  # 499