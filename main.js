function populateSquareWithSpinnies(square, rows, columns)
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

function populateSquareWithCircles(square, rows, columns)
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

function initSquare1(rows, columns)
{
	const sq1 = $('#square1');
	populateSquareWithSpinnies(sq1, rows, columns);
}

function initSquare2(rows, columns)
{
	const sq2 = $('#square2');
	populateSquareWithSpinnies(sq2, rows, columns);

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

function initSquare3(rows, columns)
{
	const sq3 = $('#square3');
	populateSquareWithSpinnies(sq3, rows, columns);

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

function initSquare4(rows, columns)
{
	const sq4 = $('#square4');
	populateSquareWithCircles(sq4, rows, columns);

	const sq4Rows = $('#square4 .row');
	for (let i = 0; i < rows; ++i)
	{
		for (let j = 0; j < columns; ++j)
		{
			const elem = $($(sq4Rows[i]).children()[j]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square4 4s ease-in-out infinite'});
			}, (i + j) * 200);
		}
	}
}

function initSquare5()
{

}

const rows = 15;
const cols = 15;
let elementColor;

function clear()
{
	$('.square').children().remove();
	$('.square').css({'background-color': elementColor});
}

$(document).ready(() =>
{
	elementColor = getComputedStyle(document.body).getPropertyValue('--accentColor');

	$('.square').click(function()
	{
		if ($(this).css('background-color') !== 'rgba(0, 0, 0, 0)')
			$(this).css({'background-color': 'transparent'});
		else
			clear();
	});

	$('#square1').click(function()
	{
		if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)')
			initSquare1(rows, cols);
	});

	$('#square2').click(() =>
	{
		initSquare2(rows, cols);
	});

	$('#square3').click(() =>
	{
		initSquare3(rows, cols);
	});

	$('#square4').click(() =>
	{
		initSquare4(rows, cols);
	});
});

$(window).resize(() =>
{
	clear();
});
