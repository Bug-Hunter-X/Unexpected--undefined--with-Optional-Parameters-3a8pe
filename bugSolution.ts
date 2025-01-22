function printName(name: string | undefined = 'Unknown'): void {
  if (name === undefined) {
    console.error('Name is required'); //Error Handling
    return;
  }
  console.log(name);
}

printName(); //This will now print an error message
printName('John'); //This will print 'John' 

//Alternative solution using a default value
function printNameWithDefault(name: string = 'Unknown'): void {
    console.log(name);
}

printNameWithDefault(); //Prints 'Unknown'
printNameWithDefault('Alice'); //Prints 'Alice'