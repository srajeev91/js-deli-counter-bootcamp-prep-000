var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  var realTime = [];
  if (line.length === 0){
    return `The line is currenty empty.`;
  } else {
    for (let i = 0; i < line.length; i++) {
      realTime.push(` ${i + 1}. ${line[i]}`);
    }
  }
  return `The line is currently:${realTime}`; 
}