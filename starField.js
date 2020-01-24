class Star{
    constructor(){
        this.x = random(-width,width);
        this.y = random(-height,height);
        this.z = random(width);
    }
    
    show(){
        fill(random(255),random(255),random(255));
        //fill(random(255),random(69));
        noStroke();
        this.sx = map(this.x/this.z,0,1,0,width);
        this.sy = map(this.y/this.z,0,1,0,height);
        this.r = map(this.z,0,width,15,0);
        circle(this.sx,this.sy,this.r);
    }
    update(){
        this.z = this.z-3;
        if(this.z<1){
            this.x = random(-width,width);
            this.y = random(-height,height);
            this.z = width;
        }
    }
}

let stars = [];
let canvas;
function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    for(let i = 0;i<1500;i++){
        let tempo = new Star();
        stars.push(tempo);
    }
}

function draw(){
    translate(width/2,height/2);
    background(0);
    for(let i = 0;i<stars.length;i++){
        stars[i].update();
        stars[i].show();
    }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
