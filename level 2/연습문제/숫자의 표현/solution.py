def solution(n):
    num = 1
    answer = 0
    while num <= n:
        sum = num
        i = num + 1
        while n >= sum:
            if n == sum:
                answer += 1
            sum += i
            i += 1
        num += 1
    return answer