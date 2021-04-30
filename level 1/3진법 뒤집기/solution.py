def solution(n):
    answer = ""
    result = 0
    
    while n != 0:
        answer = str(n%3) + answer
        n = n // 3
    
    temp = 0
    
    for i in answer:
        result += (3 ** (temp)) * int(i)
        temp += 1
        
    return result

# other solution
def solution(n):
    tmp = ''
    while n:
        tmp += str(n % 3)
        n = n // 3

    answer = int(tmp, 3)
    return answer