let myPen = {
    init: function(color, type){
        this.color = color;
        this.type = type;
        return this
    },
    price:'30EUR',
    writes: function(){
        console.log(`My ${this.type} writes in ${this.color}`)
    }
}

/** returning 'this' in the init method will allow you to use chining of methods like below */
let myNewPen = Object.create(myPen).init('blue', 'Point Pen')
myNewPen.writes();