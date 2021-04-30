def solution(nums):
    def check(nums):
        for i in range(2, nums):
            if nums % i == 0:
                return False
        return True
    
    answer = 0
    
    for i in range(len(nums)-2):
        for j in range(i+1, len(nums)-1):
            for k in range(j+1, len(nums)):
                if check(nums[i]+nums[j]+nums[k]):
                    answer += 1

    return answer


# other solution

from itertools import combinations

def prime_number(x):
    answer = 0
    for i in range(1,int(x**0.5)+1):
        if x%i==0:
            answer+=1
    return 1 if answer==1 else 0

def solution(nums):
    return sum([prime_number(sum(c)) for c in combinations(nums,3)])