var WordDictionary = function() {
    this.wordsSet = new Set();
};

WordDictionary.prototype.addWord = function(word) {
    this.wordsSet.add(word);
};

WordDictionary.prototype.search = function(word) {
    for (const savedWord of this.wordsSet) {
        if (savedWord.length !== word.length) continue; // Skip words of different length

        let wordsMatch = true;
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== '.' && savedWord[i] !== word[i]) {
                wordsMatch = false;
                break; // Exit inner loop if characters don't match
            }
        }
        if (wordsMatch) return true;
    }
    return false;
};