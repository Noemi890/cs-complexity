/*
Conceptual description: A loop within a loop, where loop2 is running n times for every element of loop1
Time Complexity: O(n^2)
Space Complexity: O(1)
*/
export const bubbleSort = (array) => {
    const sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i]
        let smallestIndex = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j
            }
        }

        array[i] = array[smallestIndex]
        array[smallestIndex] = currentItem
    }
    sortedArray.push(...array)
    return sortedArray;
} 

console.log(performance.now())


