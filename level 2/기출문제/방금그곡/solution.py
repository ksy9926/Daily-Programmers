def solution(m, musicinfos):
    m = m.replace("C#", "H").replace("D#", "I").replace("F#", "J").replace("G#", "K").replace("A#", "L")

    def subtract_time(a, b):
        a = a.split(':')
        b = b.split(':')
        a_min = int(a[0]) * 60 + int(a[1])
        b_min = int(b[0]) * 60 + int(b[1])
        return b_min - a_min

    answers = []

    for info in musicinfos:
        melody = ""
        new_info = info.split(',')
        new_info[3] = new_info[3].replace("C#", "H").replace("D#", "I").replace("F#", "J").replace("G#", "K").replace("A#", "L")
        time = subtract_time(new_info[0], new_info[1])
        for i in range(time):
            if i >= len(new_info[3]):
                i %= len(new_info[3])
            melody += new_info[3][i]
        if m in melody:
            if answers:
                if answers[0][1] < time:
                    answers[0] = [new_info[2], time]
            else:
                answers.append([new_info[2], time])
    if answers:
        return answers[0][0]
    else:
        return "(None)"

# 조금더 깔끔한 버전

def solution(m, musicinfos):
    m = m.replace('A#','H');
    m = m.replace('C#','I');
    m = m.replace('D#','J');
    m = m.replace('F#','K');
    m = m.replace('G#','L');
    answer = ''
    result = None
    dic = dict()
    for info in musicinfos:
        start, end, title, sound = info.split(',')
        hour1, min1 = start.split(':')
        hour2, min2 = end.split(':')
        time = (int(hour2)-int(hour1))*60 + int(min2)-int(min1)
        sound = sound.replace('A#','H');
        sound = sound.replace('C#','I');
        sound = sound.replace('D#','J');
        sound = sound.replace('F#','K');
        sound = sound.replace('G#','L');
        sound = sound*(time//len(sound))+sound[0:time%len(sound)]
        dic[sound] = title
    for song in dic.keys():
        if m in song:
            if result == None:
                result = song
            else:
                if len(result) < len(song):
                    result = song
    if result != None:
        return dic[result]
    else: return "(None)"