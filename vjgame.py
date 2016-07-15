#possibilities - range(1,1000)
#create while loop while low != highprint
#guess =int(high - low over 2 + low
#ask user if high low or the same
#create if statement
#low=guess+1

x = 0
y = 1000
correctanswer = int(raw_input("Enter a number between " + str(x) + "-" + str(y) + ": "))
    #randomnumbergenerator
import random
guess = (y+x)/2
print guess
##binary search
for n in range(1,20):
    if guess == correctanswer:
        print str(correctanswer) + " Gameover"
        quit()
    elif guess != correctanswer:
        user1 = raw_input("Is the answer too high or too low?: ").upper()
        if user1.find("LOW") != -1:
            x = guess+1
        elif user1.find("HIGH") !=-1:
            y = guess-1
        else:
            "Incorrect Input"
            user1 = raw_input("Is the answer too high or too low?:").upper()
        guess = (x+y)/2
        print guess
