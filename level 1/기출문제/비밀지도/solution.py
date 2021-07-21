def solution(n, arr1, arr2):
    def binary_decimal(x):
        result = []
        while x != 0:
            result.append(x % 2)
            x = x // 2
        if len(result) != n:
            for k in range(n-len(result)):
                result.append(0)
        return result[-1::-1]
        
    new_arr1 = []
    new_arr2 = []
    answer = []
    
    for i in range(n):
        new_arr1.append(binary_decimal(arr1[i]))
        new_arr2.append(binary_decimal(arr2[i]))
    
    for j in range(n):
        temp = ''
        for k in range(n):
            if new_arr1[j][k] == 1 or new_arr2[j][k] == 1:
                temp += '#'
            else:
                temp += ' '
        answer.append(temp)
        
    return answer