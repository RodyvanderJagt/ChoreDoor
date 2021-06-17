let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;


const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    switch(choreDoor) {
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1:
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            openDoor1 = spaceDoorPath;
            break;
        case 2:
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            break;  
        default: break;
    }
}


let start = document.getElementById('start');

doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
    
}

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
}

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
}

randomChoreDoorGenerator();

