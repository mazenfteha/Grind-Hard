/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
     // Creating a Map to Track Prerequisites
        let preMap = new Map();
        for(let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }

        // Loop theough the prerequisites
        for (let [course, pre] of prerequisites) {
            preMap.get(course).push(pre);
        }

        // Store all courses along the current DFS path
        let visiting = new Set();

        const dfs = (course) => {
        if (visiting.has(course)) {
            // Cycle detected
            return false;
        }
        if (preMap.get(course).length === 0) {
            return true;
        }

        visiting.add(course);
        for (let pre of preMap.get(course)) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting.delete(course);
        preMap.set(course, []); // Clear prerequisites once processed
        return true;
        };

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }

        return true;
};