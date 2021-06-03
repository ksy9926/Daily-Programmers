def gcd(num1, num2):
    while True:
        if num1 > num2:
            num1 -= num2
        elif num2 > num1:
            num2 -= num1
        else:
            return num1
        
def lcm(num1, num2):
    return num1 * num2 / gcd(num1, num2)

def solution(arr):
    for i in range(len(arr)-1):
        arr[i+1] = lcm(arr[i], arr[i+1])
    return arr[-1]