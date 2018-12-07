const getindex = data => {
  switch (data) {
    case 'A':
      return 0;
      break;
    case 'B':
      return 1;
      break;
    case 'C':
      return 2;
      break;
    case 'D':
      return 3;
      break;
    case 'E':
      return 4;
      break;
    case 'F':
      return 5;
      break;
    case 'G':
      return 6;
      break;

  }
}
module.exports= {
  getindex : getindex
}