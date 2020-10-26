const rows = 15;
const columns = 15;

function populateSquareWithSpinnies(square)
{
	const colWidth = square.width() / columns;
	const rowHeight = square.height() / rows;

	for (let i = 0; i < rows; ++i)
	{
		const typeOfRow = (i % 2 == 0) ? 'row-even' : '';
		const row = $(`<div class='row ${typeOfRow}' style='height: ${rowHeight}px'></div>`);

		for (let j = 0; j < columns; ++j)
		{
			const typeOfColumn = (j % 2 == 0) ? 'col-even' : '';
			const column = $(`<div class='col ${typeOfColumn}' style='width: ${colWidth}px;'>
				<div class='spinny'></div>
			</div>`);
			row.append(column);
		}
		square.append(row);
	}
}

function populateSquareWithCircles(square)
{
	const colWidth = square.width() / columns;
	const rowHeight = square.height() / rows;

	for (let i = 0; i < rows; ++i)
	{
		const typeOfRow = (i % 2 == 0) ? 'row-even' : '';
		const row = $(`<div class='row ${typeOfRow}' style='height: ${rowHeight}px'></div>`);

		for (let j = 0; j < columns; ++j)
		{
			const typeOfColumn = (j % 2 == 0) ? 'col-even' : '';
			const column = $(`<div class='col ${typeOfColumn}' style='width: ${colWidth}px;'>
				<div class='circle'></div>
			</div>`);
			row.append(column);
		}
		square.append(row);
	}
}

function initSquare1()
{
	const sq1 = $('#square1');
	populateSquareWithSpinnies(sq1);
}

function initSquare2()
{
	const sq2 = $('#square2');
	populateSquareWithSpinnies(sq2);

	const sq2Rows = $('#square2 .row');
	for (let i = 0; i < rows; ++i)
	{
		for (let j = 0; j < i; ++j)
		{
			const elem = $($(sq2Rows[i]).children()[j]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square2 4s linear infinite'});
			}, (i + j) * 200);
		}

		for (let j = columns; j >= i; --j)
		{
			const elem = $($(sq2Rows[i]).children()[j]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square2 4s linear infinite'});
			}, (i + j) * 200);
		}
	}
}

function initSquare3()
{
	const sq3 = $('#square3');
	populateSquareWithSpinnies(sq3);

	const sq3Rows = $('#square3 .row');
	for (let i = 0; i < rows; ++i)
	{
		for (let j = 0; j < columns; ++j)
		{
			const elem = $($(sq3Rows[i]).children()[j]);
			const elem2 = $($(sq3Rows[rows - i - 1]).children()[columns - j - 1]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square3 7s ease-in-out infinite'});
				elem2.css({'animation': 'square3 7s ease-in-out infinite'});
			}, i * j * 100);
		}
	}
}

function initSquare4()
{
	const sq4 = $('#square4');
	populateSquareWithCircles(sq4);

	const sq4Rows = $('#square4 .row');
	for (let i = 0; i < sq4Rows.length; ++i)
	{
		for (let j = 0; j < $(sq4Rows[i]).children().length; ++j)
		{
			 $($(sq4Rows[i]).children()[j]).css({'animation': `square4 2s linear ${(i + j) / 3}s infinite alternate`});
		}
	}
}

function initSquare5()
{
	const sq5 = $('#square5');
	populateSquareWithCircles(sq5);

	const sq5Rows = $('#square5 .row');
	for (let i = 0; i < sq5Rows.length; ++i)
	{
		for (let j = 0; j < $(sq5Rows[i]).children().length; ++j)
		{
			 $($(sq5Rows[i]).children()[j]).css({'animation': `square5 3s linear ${(i + j) / 2}s infinite alternate`});
		}
	}
}

function initSquare6()
{
	const sq6 = $('#square6');
	populateSquareWithCircles(sq6);
}

function init()
{
	initSquare1();
	initSquare2();
	initSquare3();
	initSquare4();
	initSquare5();
}

$(document).ready(() =>
{
	init();
});

$(window).resize(() =>
{
	$('.square').children().remove();
	init();
});
