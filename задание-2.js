function Calculator()
{
  this.a = 0
  this.b = 0
  this.read = () => 
  {
    this.a = +prompt('Enter a:')
    this.b = +prompt('Enter b:')
  }
  this.sum = () => 
  {
    return this.a + this.b
  }
  this.mul = () => 
  {
    return this.a * this.b
  }
}

