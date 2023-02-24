// Time Complexity is same as SelectionSort in the worst and average case.
// Best case is O(n)
/*
 * Start at index 1
 * compare with previous
 * If it's smaller, swap
 * Keep swapping with previous index until it's is bigger than the previous or
 * index 0 is reached
 * Move to next index, repeat
 */

/*Best used for adding something to a list that is already sorted 
Stabl and in place*/

    for (let i = 1; i < array.length; i++) {
        let j;
        let v = array[i];
        for(j = i - 1; j >= 0; j--) {
            if (array[j] <= v) {
                break;
            }
            array[j + 1] = array[j];
        }
        array[j + 1] = v;
    }
