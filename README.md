# Link: https://github.com/jocksr/Javascript-ConsolePanel

# How the request works:
# XMLHttpRequest is created, and uses open() to open a GET request to the API. It calls send() to start it. When readyState is 4, it checks for status 200. If that succeeds it then parses the json object.

# How the summary is calculated:
# The summary uses a for loop that checks data.consoles.length, which is the total number of consoles. The loop compares each remaining console's year and updates the oldest or newest when appropriate. The page when displays the data.