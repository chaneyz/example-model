var test = new exampleModel();

$(document).ready(function () {
	$('#ex-image').attr('src', test.get('imageUrl'));
	$('#ex-name').html(test.get('name'));

	test.on('change', updateTest);

	test.on('change:name', function(newModel) {
		console.log('the name was changed');
	});

	function updateTest(testModel) {
		$('#ex-image').attr('src', testModel.get('imageUrl'));
		$('#ex-name').html(testModel.get('name'));
	}

	$('#testing-image').on('submit', function(e) {
		e.preventDefault();
		test.set({
			imageUrl: $('#ex-change-image').val(),
			name: $('#ex-change-name').val()
		});
	});
});