function f1(startingValue) 
{
  this.value = startingValue
  this.read = () => 
  {
    this.value = +prompt('Enter value:')
  }
}
