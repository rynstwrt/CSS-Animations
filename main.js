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
			elem.css({'animation': `square1 4s ${(i + j) * .2}s linear infinite`});
		}

		for (let j = columns; j >= i; --j)
		{
			const col = $($(sq1Rows[i]).children()[j]);
			const elem = $(col.children()[0]);
			elem.css({'animation': `square1 4s ${(i + j) * .2}s linear infinite`});
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
			const elem = $($($(sq3Rows[i]).children()[j]).children()[0]);
			const elem2 = $($($(sq3Rows[rows - i - 1]).children()[j]).children()[0]);
			const delayAmount = (i + j) * .2;
			elem.css({'animation': `square3 4s ${delayAmount}s ease-in-out infinite`});
			elem2.css({'animation': `square3 4s ${delayAmount}s ease-in-out infinite`});
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
			const elem = $(row.children()[j]);
			elem.css({'animation': `square4 2s ${(i + (columns - j - 1)) * .2}s ease infinite alternate`});
		}
	}
}

function initSquare5()
{
	const sq5 = $('#square5');
	populateSquareWithCircles(sq5);

	for (let i = 0; i < sq5.children().length; ++i)
	{
		const row = $(sq5.children()[i]);
		for (let j = 0; j < row.children().length; ++j)
		{
			const elem = $(row.children()[j]);
			const delayAmount = (i % 2 == 0) ? (columns - j - 1) * .6 : (j) * .6 + 1;
			elem.css({'animation': `square5 1s ${delayAmount}s ease infinite alternate`});
		}
	}
}

function initSquare6()
{
	const sq6 = $('#square6');
	populateSquareWithCircles(sq6);

	for (let i = 0; i < sq6.children().length; ++i)
	{
		const row = $(sq6.children()[i]);
		for (let j = 0; j < row.children().length / 2; ++j)
		{
			const elem = $($(row.children()[j]).children()[0]);
			const elem2 = $($(row.children()[columns - j - 1]).children()[0]);
			elem.css({'animation': `square6 2s ${j / 10 + i / 10}s ease-in-out infinite alternate`});
			elem2.css({'animation': `square6 2s ${j / 10 + i / 10}s ease-in-out infinite alternate`});
		}
	}
}

function initSquare7()
{
	const sq7 = $('#square7');
	populateSquareWithTriangles(sq7);
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
			const elem = $(row.children()[j]);
			const delayAmount = Math.sin(i+j) + 1;
			elem.css({'animation': `square9 3s ${delayAmount}s ease infinite alternate`});
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
