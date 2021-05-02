test = [[1,2], [3,4], [5,6]]

def test_func(a):
    return a[0]+a[1]

result = list(map(test_func, test))

print(result)