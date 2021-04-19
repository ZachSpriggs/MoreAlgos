def classPhotos(redShirtHeights, blueShirtHeights):
    # Write your code here.
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reverse=True)
    
    firstHeight = "RED" if redShirtHeights[0] < blueShirtHeights[0]  else "BLUE"
    
    for i in range(len(redShirtHeights)):
        blueShirt = blueShirtHeights[i]
        redShirt = redShirtHeights[i]
        if firstHeight == "RED":
            if redShirt >= blueShirt:
                return False
        elif blueShirt >= redShirt:
            return False
    return True