$(document).ready(() =>
{
	// Square 1
	const sq1 = $('#square1');
	const sq1Columns = 15;
	const sq1Rows = 15;
	const colWidth = sq1.width() / sq1Columns;
	const spinnyContainerHeight = sq1.height() / sq1Rows;

	for (let i = 0; i < sq1Columns; ++i)
	{
		const typeOfColumn = (i % 2 == 0) ? 'col-even' : 'col-odd';
		const column = $(`<div class='col ${typeOfColumn}' style='width: ${colWidth}px'></div>`);

		for (let j = 0; j < sq1Rows; ++j)
		{
			const spinnyContainer = $(`
				<div class='spinny-container' style='height: ${spinnyContainerHeight}px'>
					<div class='spinny'></div>
				</div>
				`);
			column.append(spinnyContainer);
		}

		sq1.append(column);
	}

	// Square 2
	const sq2 = $('#square2');
	const sq2Columns = 15;
	const sq2Rows = 15;
	const sq2ColWidth = sq2.width() / sq2Columns;
	const sq2SpinnyContainerHeight = sq2.height() / sq2Rows;

	for (let i = 0; i < sq2Columns; ++i)
	{
		const typeOfColumn = (i % 2 == 0) ? 'col-even' : 'col-odd';
		const column = $(`<div class='col ${typeOfColumn}' style='width: ${colWidth}px'></div>`);

		for (let j = 0; j < sq2Rows; ++j)
		{
			const spinnyContainer = $(`
				<div class='spinny-container' style='height: ${spinnyContainerHeight}px'>
					<div class='spinny'></div>
				</div>
				`);
			column.append(spinnyContainer);
		}

		sq2.append(column);
	}

	const sq2Spinnies = $('#square2 .spinny');
	for (let i = 0; i < sq2Spinnies.length; ++i)
	{
		const spinny = sq2Spinnies[i];
		setTimeout(() =>
		{
			$(spinny).css({'animation': 'square1 3s ease-in-out infinite'});
		}, i * 50);
	}
});
