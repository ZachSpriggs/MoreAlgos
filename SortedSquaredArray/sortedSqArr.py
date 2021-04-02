def sortedSquaredArray(array):
    rslt = [0 for _ in array]
    for i in range(len(array)):
        value = array[i]
        rslt[i] = value * value
    rslt.sort()
    return rslt

arr = [1,2,3,5,6,8,9]
print(sortedSquaredArray(arr))