def solution(n):
    Table = [0 for c in range(n+1)]
    Table[1] = 1
    for i in range(2, n+1):
        Table[i] = (Table[i-1] + Table[i-2]) % 1234567

    return Table[-1]



def solution(num):
    a,b = 0,1
    for i in range(num):
        a,b = b,(a+b) % 1234567
    return a


# 동적 프로그래밍
class Fib():
    def __init__(self):
        self.memo = {}

    def fibonacci(self, num):
        if num == 0:
            return 0
        if num == 1:
            return 1
        if num in self.memo:
            return self.memo[num]
        self.memo[num] = (self.fibonacci(num-1) + self.fibonacci(num-2)) % 1234567
        
        return self.memo[num]
        
def solution(n):
    fb = Fib()
    return fb.fibonacci(n)