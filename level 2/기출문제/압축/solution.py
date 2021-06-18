def solution(msg):
    # 사전 색인번호 설정
    dic = {}
    last = 26
    
    for j in range(65, 91):
        dic[chr(j)] = j - 64
        
    # 확인용 변수 선언
    answer = []
    i = 0
    
    # 사전에 존재하는지 확인
    while i < len(msg):
        k = i + 1
        
        while k <= len(msg) and msg[i:k] in dic:
            k += 1
        
        answer.append(dic[msg[i:k-1]])
        # 새로운 단어 추가
        last += 1
        dic[msg[i:k]] = last
        
        i += k - i - 1
        
    return answer


#