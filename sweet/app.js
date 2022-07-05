// Describe base class Entity that can store name
// Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user
// Add example of usage of these classes, e.g., create some instances, display data related to them
// Push code to repo “sweet sugar”

class Entity {
    constructor(name) {
        this.name = name;
    }
}

class Box extends Entity {
    constructor(name) {
        super(name)
        this.stuffs = [];
        this.usedBox = false
    }
    addStufs(...newSuffs) {
        this.stuffs = [...this.stuffs, ...newSuffs]
    }
    showStuffs() {
        return `${this.name} box contains ${this.stuffs.join(`,`)}`
    }
}

class Stuff extends Entity {
    constructor(name) {
        super(name);
    }
    showName() {
        return `${this.name}`
    }
}

class User extends Entity {
    constructor(name) {
        super(name);
    }
    setBox(box) {
        if (!box.usedBox) {
            this.box = box;
            this.box.usedBox = true
        } else {
            console.log(`This box cannot be owned by the user ${this.name}`);
        }
    }
}
// set Stuffs
let stuff1 = new Stuff(`pen`);
let stuff2 = new Stuff(`pencil`);
//set boxes
const box1 = new Box(`Pencil Box`)
const box2 = new Box(`Pencil Box`)
const box3 = new Box(`Other Pencil Box`)

//add stuffs to boxes
box1.addStufs(stuff1, stuff2);
box2.addStufs(stuff1, stuff2);
box3.addStufs(stuff1, stuff2);

//create first user and give him the box1
const user1 = new User(`Vit`);
user1.setBox(box1)
//create second user and give him the box2
const user2 = new User(`Ned`); 
user2.setBox(box2)
//create third user and try to give him box1 and box2
const user3 = new User(`Tyrion`); 
user3.setBox(box1)
user3.setBox(box2)
//Now try to give User3 another box
user3.setBox(box3)

console.log(
    JSON.stringify(user1)
);
console.log(
    JSON.stringify(user2)
);
console.log(
    JSON.stringify(user3)
);
