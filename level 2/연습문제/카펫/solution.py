def solution(brown, yellow):
    x, y = 3, 3
    
    while True:
        inner = (x-2) * (y-2)
        outer = x * y - inner
        entire = inner + outer
        if inner == yellow and outer == brown:
            if entire == brown + yellow:
                return [x, y]
        if y <= brown + yellow and y< x:
            y += 1
        else:
            y = 3
            x += 1