def solution(dartResult):
    answer = 0
    prev = []
    cal = []
    check_continue = False
    for a in dartResult:
        if a in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']:
            if check_continue:
                cal.pop()
                cal.append(10)
            else:
                cal.append(int(a))
                check_continue = True
        elif a == 'S':
            check_continue = False
            continue
        elif a == 'D':
            cal[-1] = cal[-1] ** 2
            check_continue = False
        elif a == 'T':
            cal[-1] = cal[-1] ** 3
            check_continue = False
        elif a == '*':
            cal[-1] = cal[-1] * 2
            if len(cal) >= 2:
                cal[-2] = cal[-2] * 2
        elif a == '#':
            cal[-1] = -cal[-1]
    answer = sum(cal)
    return answer

# 정규표현식 풀이
import re

def solution(dartResult):
    bonus = {'S' : 1, 'D' : 2, 'T' : 3}
    option = {'' : 1, '*' : 2, '#' : -1}
    p = re.compile('(\d+)([SDT])([*#]?)')
    dart = p.findall(dartResult)
    for i in range(len(dart)):
        if dart[i][2] == '*' and i > 0:
            dart[i-1] *= 2
        dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]

    answer = sum(dart)
    return answer


# 정규표현식에서 그룹과 그냥의 차이

import re

s = "1D2S#10S"

p = re.compile('(\d+)([SDT])([*#]?)')
q = re.compile('\d+[SDT][*#]?')

print(p.findall(s))  # [('1', 'D', ''), ('2', 'S', '#'), ('10', 'S', '')]
print(q.findall(s))  # ['1D', '2S#', '10S']