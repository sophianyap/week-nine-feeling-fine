
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';



console.log(jsonObject.name);	// Output: John console.log(jsonObject.age);	// Output: 30

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);	// Output: {"name":"John","age":30,"city":"New York"}
 

