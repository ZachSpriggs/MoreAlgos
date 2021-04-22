def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    
    maxSpeed = 0
    redShirtSpeeds.sort()
    blueShirtSpeeds.sort()
    
    if not fastest:
        reverseArrayInPlace(redShirtSpeeds)
        
    for i in range(len(redShirtSpeeds)):
        rider1 = redShirtSpeeds[i]
        rider2 = blueShirtSpeeds[len(blueShirtSpeeds) - i - 1]
        maxSpeed += max(rider1, rider2)
        
    return maxSpeed


def reverseArrayInPlace(arr):
    start = 0
    end = len(arr) - 1
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

red = [1,3,5,7,8]
blue = [4,1,6,8,1]

print(tandemBicycle(red, blue, False))

print(tandemBicycle(red, blue, True))