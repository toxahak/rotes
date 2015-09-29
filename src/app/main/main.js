'use strict';

angular.module('app').controller('MainCtrl', function($scope) {

	var vm = this;
	vm.mapCenter = { latitude: 45, longitude: -73 }; 
	vm.addPoint = addPoint;

	vm.points = [
		{"id":"1","name":"temp","coords":{"latitude":45,"longitude":-73}},
		{"id":"2","name":"hfg","coords":{"latitude":44.53982484893886,"longitude":-73.472412109375}},
		{"id":"3","name":"test","coords":{"latitude":45.4911766676506,"longitude":-73.68115234375}}
	].map(function(point){
		return _.extend(point, {options: {draggable: true}})
	});


	function addPoint(name) {
		vm.points.push({
			id: _.uniqueId(),
			name: name,
			coords: _.extend({}, vm.mapCenter),
			options: {
				labelContent: name,
				labelClass: 'point-label',
		    draggable: true
			}
		});
	}
});
