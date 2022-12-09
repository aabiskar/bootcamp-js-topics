/** A Map is a data structure in Javascript that can remember the order of the insertion of the key value pairs, 
 * while in an object, the keys are ordered! 
 * */

 let map1 = new Map()

 map1.set('object', {'b': 2})
 map1.set('array', [1,2,3,4,5,6,7])
 map1.set(undefined, 'this is undefined')
 map1.set(null, 0)
 
 console.log(map1)
 
 /** Performs better in scenarios involving frequent additions and deletion of key value pairs */
 map1.delete(null)
 map1.set('new value', 'Its me! The new value...')
 
 console.log(map1)
 
 /** You can iterate over a map function */
 map1.forEach((value,key)=>console.log(`Iterated over ${key}:`, value))
 
 /** you can determine the size of the map object */
 console.log('The size of the map is:',map1.size)
 
 let object = {
     undefined: 'this is undefined',
     null: 0
 }
 
 console.log(object)