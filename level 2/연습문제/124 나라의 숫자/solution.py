change_dict = {
    0:4,
    1:1,
    2:2
}
def solution(n):
    if n == 3:
        return "4"
    elif n == 1:
        return "1"
    elif n == 2:
        return "2"
    else:
        return solution((n-1)//3) + f'{change_dict[n%3]}'


# other solution
def change124(n):
    if n<=3:
        return '124'[n-1]
    else:
        q, r = divmod(n-1, 3) 
        return change124(q) + '124'[r]