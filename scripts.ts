// function getFirstElement<T>(array: T[]){
//     return array[0];
// }

// const nunbers = [1, 2, 3, 4, 5];
// const firstNumber = getFirstElement(nunbers);

// const strings = ["one", "two", "three"];
// const firstString = getFirstElement(strings);

class Rectangle
{
    width: number
    height: number
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area = () => {
        return this.width * this.height;
    }


    
}