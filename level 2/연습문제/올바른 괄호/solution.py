def solution(s):
    stack = []
    
    for a in s:
        if a == "(":
            stack.append(a)
        else:
            if stack:
                if stack[-1] == "(":
                    stack.pop()
            else:
                return False
    return False if stack else True