def solution(priorities, location):
    answer = 0
    
    while True:
        a = priorities[0]
        
        if a != max(priorities):
            
            priorities.append(a)
            priorities.remove(a)
            
            if location != 0:
                location -= 1
            else:
                location = len(priorities) -1
        else:
            priorities.remove(a)
            answer += 1
            if location == 0:
                return answer
            else:
                location -= 1


# deque 사용한 코드
def solution(priorities, location):
    answer = 0
    from collections import deque

    d = deque([(v,i) for i,v in enumerate(priorities)])

    while len(d):
        item = d.popleft()
        if d and max(d)[0] > item[0]:
            d.append(item)
        else:
            answer += 1
            if item[1] == location:
                break
    return answer