import re

s = "1D2S#10S"

p = re.compile('(\d+)([SDT])([*#]?)')
q = re.compile('\d+[SDT][*#]?')

print(p.findall(s))  # [('1', 'D', ''), ('2', 'S', '#'), ('10', 'S', '')]
print(q.findall(s))  # ['1D', '2S#', '10S']