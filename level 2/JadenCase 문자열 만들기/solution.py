# 문제가 불친절.. 공백이 몇개든 끝에 오든 간에 이를 포함해서 출력해야함.

def solution(s):
    answer = ""
    checker = False
    for idx, l in enumerate(s):
        if idx == 0:
            answer = l.upper()
        elif l == " ":
            checker = True
            answer += l
        elif l != " " and checker:
            answer += l.upper()
            checker = False
        else:
            answer += l.lower()
    return answer


# 다른 사람의 풀이
def solution(s):
    return ' '.join([word.capitalize() for word in s.split(" ")])