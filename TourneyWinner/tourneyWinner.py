HOME_TEAM_WON = 1

def tournamentWinner(competitions, results):
    currBestTeam = ""
    scores = {currBestTeam: 0}

    for i, competition in enumerate(competitions):
        result = results[i]
        homeTeam, awayTeam = competition
        winner = homeTeam if result == HOME_TEAM_WON else awayTeam

        updateScores(winner, 3, scores)
        if scores[winner] > scores[currBestTeam]:
            currBestTeam = winner
    return currBestTeam

def updateScores(team, points, scores):
    if team not in scores:
        scores[team] = 0

    scores[team] += points

comp = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]
results = [0, 0, 1]
print(tournamentWinner(comp, results))