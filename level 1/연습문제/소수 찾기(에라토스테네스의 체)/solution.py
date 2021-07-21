def solution(n):
    answer = 0

    def find_prime(num):
        if num == 2 or num == 3 or num == 5 or num == 7:
            return True
        if num == 4 or num == 6 or num == 8:
            return False
        for i in range(2, int(num ** 0.5)+1):
            if num % i == 0:
                return False
        return True

    for j in range(2, n+1):
        if find_prime(j):
            answer += 1

    return answer

# 에라토스테네스의 체
def solution(n):
    num=set(range(2,n+1))

    for i in range(2,n+1):
        if i in num:
            num-=set(range(2*i,n+1,i))
    return len(num)


""" 이 방법으로 소수를 찾으려면, 2부터 시작해 자연수를 차례로 쓴 다음,
2 이외의 2의 배수, 3 이외의 3의 배수, 5 이외의 5의 배수의 순서로 수를 지워나가 끝에 남는 수가 소수이다.
2부터 n까지의 숫자중에서 에라토스테네스의 체로 소수를 찾으려면,
2부터 시작해 n까지의 자연수를 차례로 쓴다. (2, 3, 4, ..., n)
그리고 2 이외의 2의 배수를 지운다(p=2). 이때 2가 최초의 소수가 된다.
그 다음 소수인 3을 제외한 3의 배수를 지운다(p=3).
이 방법을 다음에 지울 소수, 즉 p의 제곱이 n 보다 커질 때까지, 이 방법을 계속한다(p2≥n).

그러면 체로 친 것처럼 끝에 남는 수가 있다.
이 수가 바로 그 자신과 1 이외의 다른 수로는 나누어 떨어지지 않는 소수이고, 
이렇게 소수를 찾는 방법을 에라토스테네스의 체라고 한다.
이 과정은 끝없이 계속되지만 20까지 자연수를 지워나가도 소수가 2, 3, 5, 7, 11, 13, 17, 19임을 쉽게 알 수 있다. """