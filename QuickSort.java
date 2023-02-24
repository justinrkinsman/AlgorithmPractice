/*
Time Complexity: O(log n)
worst case: O(n^2)

create a pivot point
Eveything that is smaller than the pivot will move to the left of the pivot
All the bigger things will move to the right of the pivot
Repeat process on each half of the list until list is sorted
*/

public class QuickSort<E> {
    E[] array;

    public E[] sort(E[] array) {
        this.array = array;
        quickSort(0, array.length - 1);
        return array;
    }

    public void swap(int from, int to) {
        E tmp = array[from];
        array[from] = array[to];
        array[to] = tmp;
    }

    public void quickSort(int from, int to) {
        if (from >= to)
            return;
        E value = array[to];
        int counter = from;
        for (int i = from; i < to; i++) {
            if (((Comparable<E>) array[i]).compareTo(value) <= 0) {
                swap(i, counter);
                counter++;
            }
        }
        swap(counter, to);
        quickSort(from, counter -1);
        quickSort(counter + 1, to);
    }
}