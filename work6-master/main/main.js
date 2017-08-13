const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    
	var items = loadAllItems(),
		sumArr = [],                      // 所有购买的产品的数量分类统计
		output = '***<没钱赚商店>购物清单***\n';

	for(let i=0; i< inputs.length;i++){
		let barcode = inputs[i];
		if(undefined===sumArr[barcode]){   // 有些商品没有购买，sumArray没有值，当没有值时，从1开始计数
			sumArr[barcode] = 1;       
		}else{
			sumArr[barcode]++;
		}
	}
	
	let totalPrice = 0;
	for(let i=0; i<items.length;i++){
		let item = items[i],
			barcode = item.barcode,
			name = item.name,
			unit = item.unit,
			price = item.price,
			sum = sumArr[barcode];
		if(undefined===sum) continue;    
		let total = (sum*price).toFixed(2);
		totalPrice += parseFloat(total);
		price = price.toFixed(2);
		output += `名称：${name}，数量：${sum}${unit}，单价：${price}(元)，小计：${total}(元)\n`; 
	}
	totalPrice = totalPrice.toFixed(2);
	output += '----------------------\n';
	output += `总计：${totalPrice}(元)\n`;
	output += '**********************';
	
	console.log(output,totalPrice);
    return output;
};