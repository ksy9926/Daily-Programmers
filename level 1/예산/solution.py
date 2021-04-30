def solution(d, budget):
    d.sort()
    d_sum = 0
    answer = 0
    
    for i in d:
        d_sum += i
        if d_sum <= budget:
            answer += 1
        else:
            break
            
    return answer

# other solution

def solution(d, budget):
    d.sort()
    while budget < sum(d):
        d.pop()
    return len(d)