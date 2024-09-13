/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let total = []
    let cur = []
    backtrack(candidates, target, total, cur, 0)
    return total
};

var backtrack = function(candidates, target, total, cur, index) {
    //base cases
    if(target === 0) { // Base case: if target reaches 0, we have a valid combination
        total.push([...cur])
        return;
    } else if (index >=candidates.length  || target < 0) {  // If index is out of bounds or target becomes negative, backtrack
    return;
    }

    // Choose the current number
    cur.push(candidates[index]);

    // Recursively call backtrack with updated target and current index (allowing reuse of the same number)
    backtrack(candidates, target - candidates[index], total, cur, index);

    // Undo the choice (backtrack)
    cur.pop();

    // Move to the next index to explore other combinations
    backtrack(candidates, target, total, cur, index + 1);
}