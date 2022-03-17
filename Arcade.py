#from tkinter import * fix me at the end
import tkinter as tk
import random
import math
import time

class ArcadeLand(tk.Tk):
    def __init__(self):
        tk.Tk.__init__(self)
        self._frame = None
        self.switch_frame(HomePage)

    def switch_frame(self, frame_class):
        new_frame = frame_class(self)
        if self._frame is not None:
            self._frame.destroy()
        self._frame = new_frame
        self._frame.pack()

# shows Homepage/Lobby
class HomePage(tk.Frame):
    LABEL_TEXT = [
        "Welcome to the Arcade!",
        "Don't Touch Me!",
        "Stop It!"
    ]
    
    def __init__(self, master):
        tk.Frame.__init__(self, master)

        master.title("Arcade")

        self.welcome_label_index = 0
        
        self.welcome_label_text = tk.StringVar()
        self.welcome_label_text.set(self.LABEL_TEXT[self.welcome_label_index])
        
        self.actual_label = tk.Label(self, textvariable=self.welcome_label_text)
        self.actual_label.bind("<Button-1>", self.cycle_label_text)
        self.actual_label.pack()
        
        eightball_button = tk.Button(self, text="Go to Magic Eightball", fg="violet", borderwidth=1, command=lambda: master.switch_frame(EightBall))
        eightball_button.pack(side="left", fill="x")
        
        tictactoe_button = tk.Button(self, text="Go to Tic-Tac-Toe", fg="yellow", borderwidth=1, command=lambda: master.switch_frame(TicTacToe))
        tictactoe_button.pack(side="left", fill="x")
        
        dice_button = tk.Button(self, text="Go to Dice", fg="orange", borderwidth=1, command=lambda: master.switch_frame(Dice))
        dice_button.pack(side="left", fill="x")
        
        quit_button = tk.Button(self, text="Leave", fg="red", command=master.destroy)
        quit_button.pack()

    # allows for easy cycle through labels
    def cycle_label_text(self, event):
        self.welcome_label_index += 1
        self.welcome_label_index %= len(self.LABEL_TEXT) #resets cycle
        self.welcome_label_text.set(self.LABEL_TEXT[self.welcome_label_index])

# holds page and logic for Magic Eightball
class EightBall(tk.Frame):
    def __init__(self, master):
        tk.Frame.__init__(self, master)
        lobby_button = tk.Button(self, text="Return to the lobby", fg="red", command=lambda: master.switch_frame(HomePage))
        lobby_button.pack()
        
        welcome_label = tk.Label(self, text="Welcome to Eightball")
        welcome_label.pack(side="top", fill="x", pady=10)
        
        question_label = tk.Label(self, text="Ask me a question")
        question_label.pack() 
        
        entry = tk.Entry(self).pack()

        eightball_output_text = tk.StringVar()
        
        inumber = random.randint(0,19) # random number for array index
        arr = ["No you", "Yes", "Probably not", "Seems like no", "You can't ask me that", "I don't know", "Definitely", "...",
               "No", "If you gotta strap up, then strap up", "If you want", "Without a doubt", "Possibly", "If you want it to happen, it will happen",
               "If God wishes it", "Don't count on it", "Signs point to no", "Totally", "It's very doubtful", "I don't care"]
        # eightball_output = tk.Message(self, text="").pack(side="bottom")
        submit_button = tk.Button(self, text="submit", fg="black", command=lambda: eightball_output_text.set(arr[inumber])).pack()
        eightball_output = tk.Message(self, textvariable=eightball_output_text).pack(side="bottom")

# Tic Tac Toe logic and page
class TicTacToe(tk.Frame):
    def __init__(self, master):
        tk.Frame.__init__(self, master)

        turn_counter = 0

        player_one_score = 0
        player_two_score = 0

        xoro = tk.StringVar()

        array = [" ", "X", "O"]

        lobby_button = tk.Button(self, text="Return to the lobby", fg="red", command=lambda: master.switch_frame(HomePage))
        lobby_button.grid()
        
        welcome_label = tk.Label(self, text="Welcome to Tic-Tac-Toe")
        welcome_label.grid()
        play_label = tk.Label(self, text="Let's play some fucking tictactoe")
        play_label.grid()
        #all buttons instantiated to be squares in the board
        a0_button = tk.Button(self, textvariable=xoro, command= self.selector)
        a0_button.grid(row=3, column=0, ipadx=8, sticky= "W"+"E"+"N"+"S")
        a1_button = tk.Button(self, textvariable=xoro, command= self.selector)
        a1_button.grid(row=3, column=1, ipadx=8, sticky= "W"+"E"+"N"+"S")
        a2_button = tk.Button(self, textvariable=xoro, command= self.selector)
        a2_button.grid(row=3, column=2, ipadx=8, sticky= "W"+"E"+"N"+"S")

        b0_button = tk.Button(self, textvariable=xoro, command= self.selector)
        b0_button.grid(row=4, column=0, ipadx=8, sticky= "W"+"E"+"N"+"S")
        b1_button = tk.Button(self, textvariable=xoro, command= self.selector)
        b1_button.grid(row=4, column=1, ipadx=8, sticky= "W"+"E"+"N"+"S")
        b2_button = tk.Button(self, textvariable=xoro, command= self.selector)
        b2_button.grid(row=4, column=2, ipadx=8, sticky= "W"+"E"+"N"+"S")
        
        c0_button = tk.Button(self, textvariable=xoro, command= self.selector)
        c0_button.grid(row=5, column=0, ipadx=8, sticky= "W"+"E"+"N"+"S")
        c1_button = tk.Button(self, textvariable=xoro, command= self.selector)
        c1_button.grid(row=5, column=1, ipadx=8, sticky= "W"+"E"+"N"+"S")
        c2_button = tk.Button(self, textvariable=xoro, command= self.selector)
        c2_button.grid(row=5, column=2, ipadx=8, sticky= "W"+"E"+"N"+"S")

    # resets the board either on demand or after games
    def reset_board(self, event):
        self.turn_counter = 0
        xoro = array[0]
        
    # sets whether x or o appears
    def selector(self, event):
        if self.turn_counter % 2 == 0:
            self.xoro = array[1]
            set(xoro)
        else:
            self.xoro = array[2]
        self.turn_counter += 1

# Dice page and logic
class Dice(tk.Frame):
    def __init__(self, master):
        tk.Frame.__init__(self, master)
        lobby_button = tk.Button(self, text="Return to the lobby", fg="red", command=lambda: master.switch_frame(HomePage))
        lobby_button.pack()
        
        welcome_label = tk.Label(self, text="Welcome to the Dice game")
        welcome_label.pack(side="top", fill="x", pady=10)
        
        roll_label = tk.Label(self, text="Player with the higher roll wins!")
        roll_label.pack() 
        
        #entry = tk.Entry(self).pack()
        playerone_label = tk.Label(self, text="Player One:")
        playerone_label.pack(side="left")

        dice_output_text = tk.StringVar()
        
        inumber = random.randint(0,5) # random number for array index
        arr = ["1", "2", "3", "4", "5", "6"]
        roll_button = tk.Button(self, text="Roll", fg="black", command=lambda: dice_output_text.set(arr[inumber]))
        roll_button.pack(side="left")
        dice_output = tk.Message(self, textvariable=dice_output_text).pack(side="left")

        playertwo_label = tk.Label(self, text="Player two:")
        playertwo_label.pack(side="right") 


        dice2_output_text = tk.StringVar()
        
        inumber2 = random.randint(0,5) # random number for array index
        arr2 = ["1", "2", "3", "4", "5", "6"]
        roll2_button = tk.Button(self, text="Roll", fg="black", command=lambda: dice2_output_text.set(arr2[inumber2]))
        roll2_button.pack(side="right")
        dice2_output = tk.Message(self, textvariable=dice2_output_text).pack(side="right")
        
'''
class winner(tk.Frame):
    if inumber > inumber2:
        tk.Message(self, text ="player 1 wins").pack()
    elif inumber == inumber2:
        tk.Message(self, text ="draw").pack()
    elif inumber<inumber2:
        tk.Message(self, text ="player 2 wins").pack()
        
'''

        

                
        
  

                
'''
    def __init__(self, master):
        numbers = rollpOne()
        playerOneWins = 0
        playerTwoWins = 0
        tk.Frame.__init__(self, master)

        turn_counter = 0
        
        lobby_button = tk.Button(self, text="Return to the lobby", fg="red", command=lambda: master.switch_frame(HomePage))
        lobby_button.pack()
        
        welcome_label = tk.Label(self, text="Welcome to Dice")
        welcome_label.pack(side="top", fill="x", pady=10)

        for i in range(3):
            tk.Message(self, text = "Player 1, it's your turn; press roll to roll").pack()
            roll_button = tk.Button(self, text = "Roll", command=lambda: self.rollpOne).pack()    
            tk.Message(self, text = "To give up this round, press Forfeit").pack()
            tk.Button(self, text = "Forfeit", command=lambda: self.surrender).pac
            
    def rollpOne(self, event):
        num = random.randint(1,6)
        tk.Message(self, text="Player 1 rolled: " + num)


    def surrender(self, event):
        tk.Messsage(self, text="Player " + (turn_counter % 2 + 1) + " forfeits the game").pack()
        
'''            
        
# creates GUI        
if __name__ == "__main__":
    guiboi = ArcadeLand()
    guiboi.mainloop()
