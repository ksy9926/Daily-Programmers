places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPXX", "OXXXP", "POOXX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]

def solution(places):
    answer = []
    
    def check_ok(dist_list):
        temp = True
        for num_list in dist_list:
            for i in range(len(num_list) - 1):
                for j in range(i+1, len(num_list)):
                    p = num_list[i][0]
                    q = num_list[i][1]
                    r = num_list[j][0]
                    s = num_list[j][1]
                    if (abs(p - r) + abs(q - s)) == 2:
                        if p == r:
                            if place[p][(q+s)//2] == "X":
                                continue
                        elif q == s:
                            if place[(p+r)//2][q] == "X":
                                continue
                        elif (p-r == 1 and s-q == 1) or (r-p == 1 and s-q == 1):
                            if place[r][q] == place[p][s] == "X":
                                continue
                        else:
                            temp = False
                            answer.append(0)
                            return
                    elif (abs(p - r) + abs(q - s)) < 2:
                        temp = False
                        answer.append(0)
                        return
                    else:
                        temp = True
        if temp == True:
            answer.append(1)
            
            
    def dfs(x, y):
        if x <= -1 or x >= 5 or y <= -1 or y >= 5 :
            return False
        if place[x][y] == 'P' or place[x][y] == 'O':
            if place[x][y] == 'P':
                num_list.append((x, y))
            a = list(place[x])
            a[y] = 'Y'
            place[x] = ''.join(a)
            dfs(x+1, y)
            dfs(x, y+1)
            return True
        return False
    
    for place in places:
        dist_list = []
        for i in range(5):
            for j in range(5):
                num_list = []
                dfs(i, j)
                if num_list:
                    dist_list.append(num_list)
        check_ok(dist_list)            
    return answer

print(solution(places))