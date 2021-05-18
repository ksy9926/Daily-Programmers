def solution(N, stages):
    user = len(stages)
    answer = []
    
    for i in range(1, N+1):
        if user != 0:
            cnt = stages.count(i)
            answer.append([i, cnt / user])
            user -= cnt
        else:
            answer.append([i, 0])
    new = sorted(answer, key=lambda x: x[1], reverse=True)
    
    return [a[0] for a in new]


def solution(N, stages):
    result = {}
    denominator = len(stages)
    for stage in range(1, N+1):
        if denominator != 0:
            count = stages.count(stage)
            result[stage] = count / denominator
            denominator -= count
        else:
            result[stage] = 0
    return sorted(result, key=lambda x : result[x], reverse=True)