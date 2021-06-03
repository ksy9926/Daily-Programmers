def solution(expression):
    cal_dict = {
        1:"*+-",
        2:"*-+",
        3:"+*-",
        4:"+-*",
        5:"-*+",
        6:"-+*"
    }
    answer = 0
    for step in range(1, 7):
        result1 = expression.split(cal_dict[step][0])
        for i in range(len(result1)):
            print('step1', result1)
            result1[i] = list(map(eval, result1[i].split(cal_dict[step][1])))
            print('step2', result1)
            result1[i] = eval(cal_dict[step][1].join(map(str, result1[i])))
            print('step3', result1)
        print('result', abs(eval(cal_dict[step][0].join(list(map(str, result1))))))
        answer = max(answer, abs(eval(cal_dict[step][0].join(list(map(str, result1))))))
    return answer


# other solution

import re
from itertools import permutations

def solution(expression):
    #1
    op = [x for x in ['*','+','-'] if x in expression]
    op = [list(y) for y in permutations(op)]
    ex = re.split(r'(\D)',expression)

    #2
    a = []
    for x in op:
        _ex = ex[:]
        for y in x:
            while y in _ex:
                tmp = _ex.index(y)
                _ex[tmp-1] = str(eval(_ex[tmp-1]+_ex[tmp]+_ex[tmp+1]))
                _ex = _ex[:tmp]+_ex[tmp+2:]
        a.append(_ex[-1])

    #3
    return max(abs(int(x)) for x in a)