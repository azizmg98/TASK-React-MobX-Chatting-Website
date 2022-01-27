
## First things first:
1. Fork [this repo](https://github.com/JoinCODED/Task-react-MobX/)
2. Clone 
4. `npm install`
5. `npm start`

## Instructions
1. `npm install mobx mobx-react`
2. Create a file called roomStore in src
3. Define the room class and inside create an empty array rooms =[]
4. `import { makeObservable, observable, action } from "mobx";`
5. Make a constructor that will make this a store 
6. Create a store and export it


## Fetch rooms :
7. Move fetchRooms function to the store and modify it (remove setRooms)
8. Add fetchRoom as an action in the constructor 
9. In the list component :
    1. `import roomStore from "../roomStore";`
    2. `import { observer } from "mobx-react";`
    3. Add useEffect to call fetchRooms
    4. Add observer before component export if it needs too 

## Create a room:
1. Move createRoom function to the store 
2. Add createRoom as an action in the constructor 
9. In the create room component :
    1. `import roomStore from "../roomStore";`
    2. `import { observer } from "mobx-react";`
    3. Call createRoom in the correct place (instead of the old one)
    4. Add observer before component export if it needs too 


## Delete a room :
1. Move deleteRoom function to the store 
2. Add deleteRoom as an action in the constructor 
9. In the room component :
    1. `import roomStore from "../roomStore";`
    2. `import { observer } from "mobx-react";`
    3. Call deleteRoom in the correct place (instead of the old one)
    4. Add observer before component export if it needs too 


## Clean up:
Don't forget to clean up the code in App.js and remove room state as you no longer need it!

### Challenge
## Update , Create a msg:
no steps ! its a challenge 

