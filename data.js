const data = [
  //LEVEL 1
  {id: 1, question: 'What was your first impression of me?', level: 1},
  {id: 2, question: 'What do you think is the hardest part of what I do for a living', level: 1},
  {id: 3, question: "What reality show do you think I'm most likely to binge watch? explain.", level: 1},
  {id: 4, question: 'Do I seem like a cat or dog person?', level: 1},
  {id: 5, question: "What do my shoes tell you about me?", level: 1},
  {id: 6, question: "How many speeding tickets do you think I've gotten in my life?", level: 1},
  {id: 7, question: "Do I seem like someone who would get a name tattooed on myself?", level: 1},
  {id: 8, question: "What do you think I'm most likely to splurge on?", level: 1},
  {id: 9, question: "What character would I play in a movie?", level: 1},
  {id: 10, question: "Do I remind you of anyone?", level: 1},
  {id: 11, question: 'What was your first impression of me?', level: 1},
  {id: 12, question:  "Who do you think my celebrity crush is?", level: 1},
  {id: 13, question: "Do you think I've ever checked an ex's phone for evidence?", level: 1},
  {id: 14, question: "What's the first thing you noticed about me?", level: 1},
  {id: 15, question: "Do I seem like a coffee or tea person? Sweetened or unsweetened?", level: 1},
  {id: 16, question: "What do you think my go to karaoke song is?", level: 1},
  {id: 17, question: "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?", level: 1},
  {id: 18, question: "What does my phone wallpaper tell you about me?", level: 1},
  {id: 19, question: "Do I look kind? explain.", level: 1},
  {id: 20, question: "Do you think I fall in love easily? why or why not?", level: 1},
  {id: 21, question: "As a child, what do you think I wanted to be?", level: 1},
  {id: 22, question: "Do you think I'm usually early, on time, or late to events? explain.", level: 1},
  {id: 23, question: "What subject do you think I thrived in at school? Did I fail any?", level: 1},
  {id: 24, question: "What compliment do you think I hear the most?", level: 1},
  {id: 25, question: "Do I seem like a morning person or a night owl? why?", level: 1},
  {id: 26, question: "What fast food restaurant do you think I'm most likely to drive through? What's my order?", level: 1},
  {id: 27, question:  "What is my body language telling you right now?", level: 1},
  {id: 28, question: "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?", level: 1},
  {id: 29, question: "What does my instagram tell you about me?", level: 1},
  {id: 30, question: "Do you think plants thrive or die in my care? explain.", level: 1},
  {id: 31, question: "On a scale of 1-10, how messy do you think my car is? 1 being clean 10 complete disaster", level: 1},
  {id: 32, question: "Do you think I was popular in school? explain.", level: 1},
  {id: 33, question: "Do you think I've ever been fired from a job? If so, what for?", level: 1},
  {id: 34, question: "How likely am I to go camping? how high maintenance is my set up?", level: 1},
  {id: 35, question: "Do you think I intimidate others? why or why not?", level: 1},
  {id: 36, question: "What about me is most strange or unfamiliar to you?", level: 1},
  {id: 37, question: "If myspace were still a thing, what would my profile song be?", level: 1},
  {id: 38, question: "What about me intrigues you?", level: 1},
  {id: 39, question: "What does my style tell you about me?", level: 1},
  {id: 40, question: "Do you think I've ever had my heart broken?", level: 1},
  {id: 41, question: "Do you think I've been in love?", level: 1},
  {id: 42, question: "What is the worst assumption someone has made about you?", level: 1}, 
  
  //LEVEL 2
  {id: 43, question: "What is your defining characteristic?", level: 2},
  {id: 44, question: "What's the most pain you've ever been in that wasn't physical?", level: 2},
  {id: 45, question: "How are you, really?", level: 2},
  {id: 46, question: "What is the last thing your mom has lied to you about?", level: 2},
  {id: 47, question: "What's your father's name and one thing about him?", level: 2},
  {id: 48, question: "What have I tolerated from people in the past that I no longer have space for?", level: 2},
  {id: 49, question: "Something that brought a smile to my face this week was ___.", level: 2},
  {id: 50, question: "What are you feeling a lot of lately?", level: 2},
  {id: 51, question: "What do you need right now but aren't communicating?", level: 2},
  {id: 52, question: "What are you currently working through that others don't see?", level: 2},
  {id: 53, question: "What was the biggest turning point in your dating life?", level: 2},
  {id: 54, question: "What is your heart telling you?", level: 2},
  {id: 55, question: "What is your most toxic trait you can admit to?", level: 2},
  {id: 56, question: "Who in your life deserves the biggest thank you? Let them know if you can.", level: 2},
  {id: 57, question: "What are you overthinking right now?", level: 2},
  {id: 58, question: "What did you last relationship teach you about yourself?", level: 2},
  {id: 59, question: "What belief about yourself no longer serves you?", level: 2},
  {id: 60, question: "What do you need to forgive yourself for?", level: 2},
  {id: 61, question: "What's the hardest lesson you've learned in love?", level: 2},
  {id: 62, question: "You hurt me, but thank you for ___.", level: 2},
  {id: 63, question: "Who in your life can you be your most vulnerable with?", level: 2},
  {id: 64, question: "Which one of your parent's personality traits do you want to keep/let go of?", level: 2},
  {id: 65, question: "Dear younger self: ____.", level: 2},
  {id: 66, question: "Think of someone you admire. Why did this person come to mind?", level: 2},
  {id: 67, question: "Are you lying to yourself about anything?", level: 2},
  {id: 68, question: "What's your favorite part of yourself that isn't physical?", level: 2},
  {id: 69, question: "What's the hardest part about dating you?", level: 2},
  {id: 70, question: "I feel loved when ___.", level: 2},
  {id: 71, question: "What is something you've learned about yourself this week?", level: 2},
  {id: 72, question: "Self love is ___.", level: 2},
  {id: 73, question: "What was the lesson in your most recent painful experience?", level: 2},
  {id: 74, question: "I know I'm in love when ___.", level: 2},
  {id: 75, question: "What's your favorite song lyric you can think of off the top of your head?", level: 2},
  {id: 76, question: "How did you get over your first love?", level: 2},
  {id: 77, question: "What's the best lesson an ex has ever taught you?", level: 2},
  {id: 78, question: "Is there anyone who's changed your life but doesn't know it?", level: 2},
  {id: 79, question: "What do you need right now, more than anything?", level: 2},
  {id: 80, question: "When was the last time you felt lucky to be you?", level: 2},
  {id: 81, question: "What do you need to accept today?", level: 2},
  {id: 82, question: "When was the last time you felt most yourself?", level: 2},
  {id: 83, question: "What's your mother's name and the most valuable lesson she's taught you thus far?", level: 2},
  {id: 84, question: "What are you most grateful for in this current moment?", level: 2},
  {id: 85, question: "What are you still trying to prove to yourself?", level: 2},
  {id: 86, question: "What have you been taking for granted lately?", level: 2},
  {id: 87, question: "Is there a feeling you miss?", level: 2},
  {id: 88, question: "What would your younger self not believe about your life today?", level: 2},
  {id: 89, question: "If you could have it your way: Who would you be with? Where would you be? And what would you be doing?", level: 2},
  {id: 90, question: "What do you need to hear right now?", level: 2},
  {id: 91, question: "What title would you give this chapter in your life?", level: 2},
  {id: 92, question: "What dating advice would you give your younger self?", level: 2},
  {id: 93, question: "What lesson should you have learned by now?", level: 2},
  {id: 94, question: "When was the last time you were able to use your pain to help someone else?", level: 2},
  {id: 95, question: "What would you never want to change about yourself?", level: 2},
  {id: 96, question: "What question did this year leave you with?", level: 2},
  {id: 97, question: "What about yourself is hardest to admit?", level: 2},
  {id: 98, question: "What question are you trying to answer most in your life right now?", level: 2},
  {id: 99, question: "Finish the sentences: strangers would describe me as _____. Only I know that I am ______", level: 2},
  {id: 100, question: "When you're asked how are you, how often do you answer truthfully?", level: 2},
  {id: 101, question: "Has a stranger ever changed your life?", level: 2},
  {id: 102, question: "What is the most unexplainable thing that's ever happened to you?", level: 2},
  {id: 103, question: "Describe your perfect day!", level: 2},
  {id: 104, question: "Have you changed your mind about anything recently?", level: 2},
  {id: 105, question: "What's been the best compliment a stranger has ever given you?", level: 2},
  {id: 106, question: "What is a compliment you wish you received more frequently?", level: 2},
  {id: 107, question: "What do you crave more of?", level: 2},
  {id: 108, question: "What has been your earliest recollection of happiness?", level: 2},
  {id: 109, question: "What are you more afraid of, failure or success? And why?", level: 2},
  {id: 110, question: "How would you describe the feeling of being in love in one word?", level: 2},
  {id: 111, question: "When was the last time you surprised yourself?", level: 2},
  {id: 112, question: "What's been your happiest memory this past year?", level: 2},
  {id: 113, question: "Do you think the image you have of yourself matches the image people see you as?", level: 2},
  {id: 114, question: "If you have, when was the moment you realized you weren't invincible?", level: 2},
  {id: 115, question: "What lesson took you the longest to unlearn?", level: 2},
  {id: 116, question: "What part of your life works? What part of your life hurts?", level: 2},
  {id: 117, question: "What is your 1st love's name and the reason you fell in love with him/her?", level: 2},
  {id: 118, question: "What's your mother's name? And the most beautiful thing about her?", level: 2},
  {id: 119, question: "If you could get to know someone in your life on a deeper level, who would it be and why?", level: 2},
  {id: 120, question: "Are you missing anyone right now? Do you think they are missing you too?", level: 2},
  {id: 121, question: "What is a dream you've let go of?", level: 2},
  {id: 122, question: "What is the last thing you lied to your mother about?", level: 2},
  {id: 123, question: "How can you become a better person?", level: 2},

  //LEVEL 3
  {id: 124, question: "What can I help you with?", level: 3},
  {id: 125, question: "Why do you think we met?", level: 3},
  {id: 126, question: "What about me surprised you?", level: 3},
  {id: 127, question: "In a word, how would you describe our conversation?", level: 3},
  {id: 128, question: "What do you think my strength is?", level: 3},
  {id: 129, question: "What can I teach you?", level: 3},
  {id: 130, question: "Based on what you've learned about me, do you have any Netflix recommendations?", level: 3},
  {id: 131, question: "Who do I remind you of?", level: 3},
  {id: 132, question: "What can you be kinder towards yourself for today?", level: 3},
  {id: 133, question: "What's one small thing you can do to be a better person in 2019?", level: 3},
  {id: 134, question: "What can we create together?", level: 3},
  {id: 135, question: "How would you describe me to a stranger?", level: 3},
  {id: 136, question: "What about me most surprised you?", level: 3},
  {id: 137, question: "What would be the perfect gift for me?", level: 3},
  {id: 138, question: "What do you admire most about me?", level: 3},
  {id: 139, question: "Based on what you learned about me, what book would you recommend I read?", level: 3},
  {id: 140, question: "What about me is hardest for you to understand?", level: 3},
  {id: 141, question: "What am I most qualified to give advice about?", level: 3},
  {id: 142, question: "What is one thing you think I can do that would dramatically improve my life?", level: 3},
  {id: 143, question: "If we were in a band, what would our name be?", level: 3},
  {id: 144, question: "Based on what you learned about me, does my social media accurately reflect who I am? Why or why not?", level: 3},
  {id: 145, question: "What do I need to hear right now?", level: 3},
  {id: 146, question: "Based on what you know about me, do you have any netflix recommendations?", level: 3},
  {id: 147, question: "What do you think my superpower is?", level: 3},
  {id: 148, question: "What is a lesson you will take away from our conversation?", level: 3},
  {id: 149, question: "When in this game did you feel most connected to me?", level: 3},
  {id: 150, question: "How does one earn your vulnerability? Have I earned it? How can I earn more?", level: 3},
  {id: 151, question: "What do you think our most important similarity is?", level: 3},
  {id: 152, question: "In one word, how would you describe our conversation?", level: 3},
  {id: 153, question: "What answer of mine made you light up?", level: 3},
  {id: 154, question: "When this game is over, what will you remember about me?", level: 3},
  {id: 155, question: "What question were you most afraid to answer?", level: 3},
  {id: 156, question: "What parts of yourself do you see in me?", level: 3},
  {id: 157, question: "How do our personalities complement each other?", level: 3},
  {id: 158, question: "What do you think my weakness is?", level: 3},
  {id: 159, question: "What would make you feel closer to me?", level: 3},
  {id: 160, question: "What do you think I fear the most?", level: 3},
  {id: 161, question: "What do you think I fear the most?", level: 3},
  {id: 162, question: "What has this conversation taught you about yourself?", level: 3},
  {id: 163, question: "What do you think I should know about myself that perhaps I'm unaware of?", level: 3},
  {id: 164, question: "What do you think my defining characterisitic is?", level: 3},
  {id: 165, question: "Do you believe everyone has a calling? If so, do you think I've found mine?", level: 3},
  {id: 166, question: "What do you recommend I let go of, if anything?", level: 3},
  {id: 167, question: "In one word, describe how you feel right now", level: 3},
]

module.exports = data
