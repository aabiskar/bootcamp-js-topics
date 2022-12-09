function findMostRepeatativeElement(arr) {
    let max = 1;
    let item;
    for (let i = 0; i < arr.length; i++) {
        let counter = 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) counter++
        }
        if (counter > max) {
            max = counter;
            item = arr[i]
        }

    }
    console.log(item, max)
}

findMostRepeatativeElement([3, 3, 3, 1, 'a', 2, 2, 2, 3, 3, 'a', 4, 5555, 32])