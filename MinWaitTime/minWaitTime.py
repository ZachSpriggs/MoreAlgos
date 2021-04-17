def minimumWaitingTime(queries):
    queries.sort()
    wait = 0
    for i in range(0, len(queries)):
        duration = queries[i]
        queriesLeft = len(queries) - (i + 1)
        wait += duration * queriesLeft
    return wait

arr = [3,2,1,2,6]
print(minimumWaitingTime(arr))