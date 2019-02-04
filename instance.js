const Vue = require('vue');

var data = { 
	a: 1,
	animal: 'abelha',
  cor: 'verde'
}

var vm = new Vue({
	data: data,
	created: function() {
		// gets printed before all the others
		console.log(0)
	}
})

console.log(vm.a);

vm.a = 2

console.log(vm.a);

vm.a = 3

console.log(vm.a);

//console.log(vm)