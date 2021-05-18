def solution(lottos, win_nums):
    answer = [0, 0]
    rank = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6}
    for lotto in lottos:
        if lotto == 0:
            answer[1] += 1
        else:
            if lotto in win_nums:
                answer[0] += 1
                answer[1] += 1

    return [rank[answer[1]], rank[answer[0]]]

def solution(lottos, win_nums):
    
    rank=[6,6,5,4,3,2,1]

    cnt_0 = lottos.count(0)
    ans = 0
    for x in win_nums:
        if x in lottos:
            ans += 1
    return rank[cnt_0 + ans],rank[ans]