module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.number()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    var min,
	max,
	sum = 0;
    for(var i=0;i<input.length;i++){
	var value = input[i];
        sum += value;
	if(!i){
		min  = value;
		max  = value;
		continue;
	}
	if(value<min){
		min = value;
	}
	
	if(value>max){
		max = value;
	}
    }
    this.min = min;
    this.max = max;
    this.sum = sum;
    this.input = input;
    //console.log(min,max,sum);
  }

  minimum() {
    return this.min;
  }
  
  maximum(){
    return this.max;
  }

  average(){
    return (this.sum/this.input.length).toFixed(2);
  }
  
  number(){
    return this.input.length;
  }
}