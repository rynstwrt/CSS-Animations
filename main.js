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

function populateSquareWithTriangles(square)
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
				<div class='triangle'></div>
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

	const sq1Rows = $('#square1 .row');
	for (let i = 0; i < rows; ++i)
	{
		for (let j = 0; j < i; ++j)
		{
			const col = $($(sq1Rows[i]).children()[j]);
			const elem = $(col.children()[0]);
			elem.css({'animation-delay': `${(i + j) * .2}s`});
		}

		for (let j = columns; j >= i; --j)
		{
			const col = $($(sq1Rows[i]).children()[j]);
			const elem = $(col.children()[0]);
			elem.css({'animation-delay': `${(i + j) * .2}s`});
		}
	}
}

function initSquare2()
{
	const sq2 = $('#square2');
	populateSquareWithSpinnies(sq2);
}

function initSquare3()
{
	const sq3 = $('#square3');
	populateSquareWithSpinnies(sq3);

	const sq3Rows = $('#square3 .row');
	for (let i = 0; i < rows; ++i)
	{
		const row = $(sq3Rows[i]);
		for (let j = 0; j < columns; ++j)
		{
			const elem1 = $($($(sq3Rows[i]).children()[columns - j - 1]).children()[0]);
			const elem2 = $($($(sq3Rows[rows - i - 1]).children()[columns - j - 1]).children()[0]);
			const delayAmount = (i + j) * .2;
			elem1.css({'animation-delay': `${delayAmount}s`});
			elem2.css({'animation-delay': `${delayAmount}s`});
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
		const row = $(sq4Rows[i]);
		for (let j = 0; j < row.children().length; ++j)
		{
			const elem = $($(row.children()[j]).children()[0]);
			if (i % 2 == 0)
			{
				const delayAmount = ((i * rows) + j) * .1;
				elem.css({'animation-delay': `${delayAmount}s`});
			}
			else
			{
				const delayAmount = ((i * rows) + (columns - j)) * .1;
				elem.css({'animation-delay': `${delayAmount}s`});
			}
		}
	}
}

function initSquare5()
{
	const sq5 = $('#square5');
	populateSquareWithCircles(sq5);

	for (let i = 0; i < sq5.children().length / 2; ++i)
	{
		const row1 = $(sq5.children()[i]);
		const row2 = $(sq5.children()[rows - i - 1]);
		for (let j = 0; j < row1.children().length / 2; ++j)
		{
			const delayAmount = (columns - j - 1) / 10 + (rows - i - 1) / 10;
			const elem1 = $($(row1.children()[j]).children()[0]);
			const elem2 = $($(row1.children()[columns - j - 1]).children()[0]);
			const elem3 = $($(row2.children()[j]).children()[0]);
			const elem4 = $($(row2.children()[columns - j - 1]).children()[0]);
			elem1.css({'animation-delay': `${delayAmount}s`});
			elem2.css({'animation-delay': `${delayAmount}s`});
			elem3.css({'animation-delay': `${delayAmount}s`});
			elem4.css({'animation-delay': `${delayAmount}s`});
		}
	}
}

function initSquare6()
{
	const sq6 = $('#square6');
	populateSquareWithCircles(sq6);

	const sq6Rows = $('#square6 .row');
	for (let i = 0; i < sq6Rows.length; ++i)
	{
		const row = $(sq6Rows[i]);
		for (let j = 0; j < row.children().length; ++j)
		{
			const elem = $($(row.children()[j]).children()[0]);
			if (i % 2 == 0)
			{
				const delayAmount = j * .3;
				elem.css({'animation-delay': `${delayAmount}s`});
			}
			else
			{
				const delayAmount = (columns - j - 1) * .3;
				elem.css({'animation-delay': `${delayAmount}s`});
			}
		}
	}
}

function initSquare7()
{
	const sq7 = $('#square7');
	populateSquareWithTriangles(sq7);

	for (let i = 0; i < sq7.children().length; ++i)
	{
		const row = $(sq7.children()[i]);
		for (let j = 0; j < row.children().length; ++j)
		{
			const elem = $($(row.children()[j]).children()[0]);
			const delayAmount = j * .1;
			elem.css({'animation-delay': `${delayAmount}s`});
		}
	}
}

function initSquare8()
{
	const sq8 = $('#square8');
	populateSquareWithTriangles(sq8);
}

function initSquare9()
{
	const sq9 = $('#square9');
	populateSquareWithTriangles(sq9);

	for (let i = 0; i < sq9.children().length; ++i)
	{
		const row = $(sq9.children()[i]);
		for (let j = 0; j < row.children().length; ++j)
		{
			const elem = $($(row.children()[j]).children()[0]);
			const delayAmount = Math.log10(i + (columns - j - 1));
			elem.css({'animation-delay': `${delayAmount}s`});
		}
	}
}

function init()
{
	initSquare1();
	initSquare2();
	initSquare3();
	initSquare4();
	initSquare5();
	initSquare6();
	initSquare7();
	initSquare8();
	initSquare9();
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
