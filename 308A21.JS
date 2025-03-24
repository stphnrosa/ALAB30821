
// Part 1: Humble Beginnings
// From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].

//  const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name:"Leo",
//         type:"Cat",
//              companion: {
//                 name:"Frank",
//                 type:"Flea",
//                 inventory:["small hat","sunglasses"],
            

//             }
//         }

//     };

// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
 
// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion:{ // When I used "... it didn't work. I just rewrote everything from the previous example
//                 name:"Leo",
//                 type:"Cat",
//                      companion: {
//                         name:"Frank",
//                         type:"Flea",
//                         inventory:["small hat","sunglasses"],
//                      }
//                     }   ,                
//     roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//     }
//     }
//     adventurer.roll() // <=== This is so cool. I got robin rolled a 3, robin rolled a 5 and robin rolled a 7. Super convenient.


    // Part 2: Class Fantasy
    // Start with a Character class, which will define generic character entities. Robin and their companions all have a name, so the Character class should definitely include name as one of its properties. At this stage, we will also make the decision that every character should have health (which we will standardize to a maximum of 100, and an inventory (even if the inventory is empty).

    class Character {
        constructor (Robin) {
          this.name = Robin;
          this.health = 100;
          this.inventory = ["sword", "potion", "artifact"];
        }
      }

      class Character {
        constructor (Leo) {
          this.name = Leo;
          this.health = 100;
          this.inventory = [];
        }
      }
      class Character {
        constructor (Frank) {
          this.name = Frank;
          this.health = 100;
          this.inventory = ["small hat","sunglasses"];
        }
      }

      roll (mod = 0); {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
      
        Character.roll()