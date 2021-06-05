def to_binary(num):
    result = ""
    while num != 0:
        result = str(num % 2) + result
        num = num // 2
    return result.count("1")


def solution(n):
    a = to_binary(n)
    b = 0
    while a!=b:
        n += 1
        b = to_binary(n)
    return n


# bin() 함수 사용
def solution(n):
    check = n+1
    while True:
        if bin(n)[2:].count('1') == bin(check)[2:].count('1'):
            return check
        check += 1