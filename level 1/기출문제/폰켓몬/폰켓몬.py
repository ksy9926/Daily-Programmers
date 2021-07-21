def solution(nums):
    answer = len(set(nums))
    if answer >= len(nums) / 2:
        return len(nums) / 2
    else:
        return answer


def solution(nums):
    return min(len(set(nums)), len(nums)/2)