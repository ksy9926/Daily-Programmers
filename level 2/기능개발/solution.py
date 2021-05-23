def solution(progresses, speeds):
    temp = zip(progresses, speeds)
    count = 0
    answer = []
    for a, b in temp:
        a += b * count
        if a >= 100:
            answer[-1] += 1
            continue
        elif (100-a) % b != 0:
            count += (100-a) // b + 1
            answer.append(1)
        else:
            count += (100-a) // b
            answer.append(1)
    return answer


def solution(progresses, speeds):
    Q=[]
    for p, s in zip(progresses, speeds):
        if len(Q)==0 or Q[-1][0]<-((p-100)//s):
            Q.append([-((p-100)//s),1])
        else:
            Q[-1][1]+=1
    return [q[1] for q in Q]