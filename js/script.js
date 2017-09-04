$(function(){
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');

	function searchCountries() {
	  	var countryName = $('#country-name').val();
	  	if(!countryName.length) countryName = 'Poland';
	  	$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList,
	  		error: messageOnError
	  		});
	}

	function showCountriesList(resp) {
	  	countriesList.empty();
	  	resp.forEach(function(item) {
	  		var $row = $('<tr>');
	  		var $cell1 = $('<td>');
	  		var $cell2 = $('<td>');
	  		$cell1.text(item.name).appendTo($row);
	  		$cell2.text(item.capital).appendTo($row);
	  		$('.table>tbody').append($row);
	  		})
	}

	function messageOnError(resp) {
		countriesList.empty();
		var message = "Unidentified error";
		if (resp.status == 404) {
			message = "Nothing found";
		}
		var $row = $('<tr>');
		var $cell = $('<td>');
		$cell.text(message).appendTo($row);
		$row.appendTo(countriesList);
	}

	$('#search').click(searchCountries);
})