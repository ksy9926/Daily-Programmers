def solution(s):
    s = s.split(" ")
    s = list(map(int, s))
    return f'{str(min(s))} {str(max(s))}'