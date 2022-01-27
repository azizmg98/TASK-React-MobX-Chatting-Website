## First things first:

1. Fork and clone [this repository](https://github.com/JoinCODED/TASK-React-MobX-Chatting-Website) to your `development folder
2. `npm install`
3. `npm start`

## Instructions

1. `npm install mobx mobx-react`
2. Create a file called roomStore in src
3. Define the room class and inside create an empty array rooms = `[]`
4. `import { makeObservable } from "mobx";`
5. Create a constructor and call `makeObservable(this)`
6. Create a store instance and export it as default

## Fetch rooms:

1. Move `fetchRooms` function to the store and modify it (remove `setRooms`)
2. In the list component :
   1. `import roomStore from "../roomStore";`
   2. `import { observer } from "mobx-react";`
   3. Add `useEffect` to call fetchRooms
   4. Add `observer` before component export if it needs to

## Create a room:

1. Move `createRoom` function to the store
2. Add `createRoom` as an action in the constructor
3. In the create room component:
   1. `import roomStore from "../roomStore";`
   2. `import { observer } from "mobx-react";`
   3. Call createRoom in the correct place (instead of the old one)
   4. Add observer before component export if it needs too

## Delete a room:

1. Move deleteRoom function to the store
2. Add deleteRoom as an action in the constructor
3. In the room component :
   1. `import roomStore from "../roomStore";`
   2. `import { observer } from "mobx-react";`
   3. Call deleteRoom in the correct place (instead of the old one)
   4. Add observer before component export if it needs too

## Clean up:

Don't forget to clean up the code in App.js and remove room state as you no longer need it!

### Challenge

- Update , Create a message (no steps ! its a challenge)
