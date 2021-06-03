def solution(record):
    user_dict = {}
    temp = []
    for user in record:
        k = user.split(" ")
        if k[0] == "Enter":
            user_dict[k[1]] = k[2]
            temp.append([k[1], "님이 들어왔습니다."])
        elif k[0] == "Leave":
            temp.append([k[1], "님이 나갔습니다."])
        elif k[0] == "Change":
            user_dict[k[1]] = k[2]
            
    answer = []
    for a, b in temp:
        answer.append(user_dict[a] + b)
    return answer