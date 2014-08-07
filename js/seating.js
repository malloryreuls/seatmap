app.controller('SeatChart', function($scope) {

	$scope.amounts = [
		{ label: "1", value: 1 },
		{ label: "2", value: 2 },   
		{ label: "3", value: 3},
		{ label: "4", value: 4},
		{ label: "5", value: 5},
		{ label: "6", value: 6}
	];

	$scope.prices = [
		{ label: "$10-$50", value: 1 },
		{ label: "$51-$100", value: 2 },   
		{ label: "$101-$150", value: 3},
		{ label: "$151-$200", value: 4}
	];

	$scope.sections = [
		{ label: "Best Available", value: 1},
		{ label: "VIP", value: 2},
		{ label: "100-199", value: 3 },
		{ label: "200-299", value: 4 },   
		{ label: "300-399", value: 5}
	];


});