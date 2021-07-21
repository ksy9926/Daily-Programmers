def solution(board, moves):
    stack = []
    answer = 0
    for move in moves:
        i = 0
        while board[i][move-1] == 0:
            i+= 1
            if i == len(board):
                break
        if i == len(board):
            continue
        elif stack:
            if stack[-1] == board[i][move-1]:
                stack.pop()
                answer += 2
            else:
                stack.append(board[i][move-1])
        else:
            stack.append(board[i][move-1])
        board[i][move-1] = 0
    return answer


def solution(board, moves):
    stacklist = []
    answer = 0

    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                stacklist.append(board[j][i-1])
                board[j][i-1] = 0

                if len(stacklist) > 1:
                    if stacklist[-1] == stacklist[-2]:
                        stacklist.pop(-1)
                        stacklist.pop(-1)
                        answer += 2     
                break

    return answer