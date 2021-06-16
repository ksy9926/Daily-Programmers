def solution(s):
    answer = []
    l = len(s)
    
    for i in range(1, l+1):
        gap = i
        last = ""
        
        for j in range(l//gap):
            print(gap, last, answer)
            if last:
                if last == s[gap * j:gap * j +gap]:
                    control += 1
                    if control == 2:
                        answer[-1] += 1
                    elif 3 <= control <= 9:
                        pass
                    elif 10 <= control <= 99:
                        answer[-1] += 1
                    elif 100 <= control <= 999:
                        answer[-1] += 1
                    else:
                        answer[-1] += gap
                        last = s[gap * j:gap * j +gap]
                else:
                    answer[-1] += gap
                    control = 1
                    last = s[gap * j:gap * j +gap]
            else:
                answer.append(gap)
                control = 1
                last = s[gap * j:gap * j +gap]
            
        answer[-1] += l % gap
            
    return min(answer)

print(solution("aaaaaaaaaa"))