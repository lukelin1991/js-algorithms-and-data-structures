Root Test -
Creating a program that would take 
Example Input:

Driver Dan
Driver Lauren
Driver Kumi
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Lauren 12:01 13:16 42.0

and spit out this
Expected output:
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles

Step 1 - Creating a function that can initially read a .txt file.
  - I had contemplated on how to truly break this process down into smaller pieces
  - I had to google how to read a file, and break the file up line by line.
  - I had contemplated on how I can make this possible, and my mind went to creating a react application automatically
  - although it would be nice, I know it would've taken a lot of time, utilizing react, and recoil as a state management
  - so I opted for simplicity and wrote everything in a main.js file.

Step 2 - What to do once the file is read and parsed into a string?
  - This is where manipulation needs to happen, because I needed to set the information into 3 parts.
  - first part is.. calculating total number of minutes taken for the drive.
  - second part is how many total miles.
  - third part is to calculate the avg miles per hour each person has driven based on Trip data.
  - push all the data into an array into each individual's object key.

Step 3 - What to do with object?
  - Now that the format is in an object notation, it will be easier to manipulate.
  - the only problem is that Dan traveled twice, Kumi traveled none.
  - I have to further manipulate Dan's object value because he has 2 logs of travel.
  - I concatenated the two arrays into 1, while also adjusting the strings into numerical value (int/float)
  - By this time, my goal was to make sure that the way the data is displayed for each person in Key/value pair are all the same

Step 4 - Once everything is lined up.
  - the final step of the process was to ensure that each data is calculated properly.
  - knowing that the array layout are all similar (except Kumi's). 
  - I can then write out the output using backticks ` ` along with ${{objName} in order to write out the output
  - since Kumi's array length will be different than everyone else's, I created an if/else statement to make sure 
  that her output is unique compared to everybody else's.
  - I created a function to wrap the final output in.

By Luke Lin
