const { Room } = require('./room')
const { Food } = require('./food');
const { Item } = require("./item")

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;
      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
          console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Picks up an item from the current room into the player's inventory

    if (this.currentRoom.getItemByName(itemName) === itemName) {
      this.items.push(this.currentRoom.getItemByName(itemName))
      let index = this.currentRoom.items.indexOf(itemName)
      this.currentRoom.splice(index, 1)
    }

  }

  dropItem(itemName) {
    // Drops an item the player is holding into their current room
    if (Player.items.includes(itemName)){
      Room.items.push(itemName)
      //Player.items.filter((item) => item !== itemName)
      let index = Player.items.indexOf(itemName)
      Player.items.splice(index, 1)
    }
  }

  eatItem(itemName) {
    // Allow the player to eat food items, but not non-food items
    // Your code here 
  }

  getItemByName(name) { //"ROCK"
    // Retrieves an item from a player's inventory by item name
    
    for (let i = 0; i < this.items.length; i++){
      let item = this.items[i]
      if (item.name === name){
        return item
      }
    }
  
  }
}



module.exports = {
  Player
};
