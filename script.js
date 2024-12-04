let boxes = document.querySelectorAll(".box");
let turnO = true;
const aw=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("it is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disable=true;
        checkwinner();
    });
});

const checkwinner=()=>{
    for (pattern of winpattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

    } 
    let p1v=boxes[pattern[0]].innerText;   
    let p1v=boxes[pattern[1]].innerText;   
    let p1v=boxes[pattern[2]].innerText;   
};