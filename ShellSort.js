/*
Time Complexity: 
Worst case, shell sort becomes an insertion sort O(n^2)
Average Complexity depends on the gap. either O(n^(5/4)) or O(n^(3/2))

1. Compare and swap indices of a certain distance apart (e.g. 0 and 4, 1 and 5, 2 and 6, etc.)
2. In second iteration reduce the gap (e.g. 0 and 3, 1 and 4, 2 and 5, etc.)
3. Repeat process until gap size is one (Insertion Sort)

Not stable
In place
*/