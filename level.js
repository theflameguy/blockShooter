class Level{
    constructor(ship){
        this.n=360;
        this.ptsX = [];
        this.ptsY = [];
        // this.pos=ship.pos


    }
    preRender(){
        for(var i=0;i<this.n;i++){
            this.ptsX.push(random(-width/8,9*width/8))
            this.ptsY.push(random(-height/8,9*height/8));
        }

    }
    render(){
        var mousex=ship.pos.x;
        var mousey=ship.pos.y;
        background(20);
        stroke(255,90);
        //mousex=noise(xof)*width*scl
        //mousey=noise(yof)*height*scl
        for(var i=0;i<this.n/3;i++){
            var xoff=map(mousex,width/2,width,0,width/8)
            var yoff=map(mousey,width/2,width,0,width/8)
            strokeWeight(0.5);
            point(this.ptsX[i]+xoff,this.ptsY[i]+yoff) 
        }
        for(var i=this.n/3;i<2*this.n/3;i++){
            var xoff=map(mousex,width/2,width,0,width/16)
            var yoff=map(mousey,width/2,width,0,width/16)
            strokeWeight(1);
            point(this.ptsX[i]+xoff,this.ptsY[i]+yoff) 
        }
        for(var i=2*this.n/3;i<this.n;i++){
            var xoff=map(mousex,width/2,width,0,width/32)
            var yoff=map(mousey,width/2,width,0,width/32)
            strokeWeight(2);
            point(this.ptsX[i]+xoff,this.ptsY[i]+yoff) 
        }
    }


}