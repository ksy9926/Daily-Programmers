def solution(people, limit):
    answer = 0
    people.sort(reverse=True)
    i = 0
    
    while people and i <= len(people)-1:
        if people[i] + people[-1] <= limit:
            people.pop()
        answer += 1
        i += 1

    return answer


# 큐 사용시
from collections import deque

def solution(people, limit):
    answer = 0
    people.sort(reverse=True)
    q = deque(people)

    while q:
        temp = q.popleft()
        if q and q[-1] <= limit-temp:
            q.pop()
        answer += 1

    return answer