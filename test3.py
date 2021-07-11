input_arr = [1, 4, 4, 2, 5, 3, 2, 2, 3, 4, 4]
# [2, 2]
checker = []
answer = []

for element in input_arr:
    if element in checker:
        pass
    else:
        checker.append(element)

for a in checker:
    if input_arr.count(a) != 1:
        answer.append(input_arr.count(a))

if answer:
    print(answer)
else:
    print(-1)