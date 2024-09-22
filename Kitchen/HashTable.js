class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  // Hash function to generate an index for the key
  hash(key){
    // var total to collect ASCII values of characters in key
    let total = 0

    // Loop through each character in the key
    for (let i = 0 ; i < key.length ;i++) {
      // Get the ASCII value of the character in the key
      total += charCodeAt(i)
    }
    return total % this.size 
  }

  // Set function to store key-value pair in the hash table
  set(key, value){
    // calc the hash index
    const index = this.hash(key)
    // store the value by using this index in table
    this.table[index] = value
  }

    // Get function to retrieve value by key from the hash table
  get(key){
      // calculate the index of the key
      const index = this.hash(key)
      // Return the value stored at the calculated index
      return this.table[index]  || 'Key not found'
  }

  // Remove function to remove a key-value pair from the hash table
  remove(key){
      // calculate the index of the key
      const index = this.hash(key)
      // set the value of this index to undefined 
      this.table[index] = undefined
  }

  // Display function to print all key-value pairs in the hash table
  display(){
    for(let i = 0 ; i < this.table.length ;i++){
      if(this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }
}
