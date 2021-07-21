def solution(numbers, hand):
    left_p = [1, 1]
    right_p = [3, 1]
    num_dict = {
        1:[1, 4], 2:[2, 4], 3:[3, 4], 4:[1, 3], 5:[2, 3],
        6:[3, 3], 7:[1, 2], 8:[2, 2], 9:[3, 2], 0:[2, 1]
    }
    answer = ''
    
    def distance(a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1])
    
    for number in numbers:
        if number in [1, 4, 7]:
            left_p = num_dict[number]
            answer += "L"
        elif number in [3, 6, 9]:
            right_p = num_dict[number]
            answer += "R"
        else:
            dist_left =distance(left_p, num_dict[number])
            dist_right = distance(right_p, num_dict[number])
            if dist_left > dist_right:
                right_p = num_dict[number]
                answer += "R"
            elif dist_left < dist_right:
                left_p = num_dict[number]
                answer += "L"
            else:
                if hand == "left":
                    left_p = num_dict[number]
                    answer += "L"
                else:
                    right_p = num_dict[number]
                    answer += "R"
    return answer