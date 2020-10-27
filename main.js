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


function initSquare2()
{
	const sq2 = $('#square2');
	populateSquareWithSpinnies(sq2);
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
			const elem = $($(sq1Rows[i]).children()[j]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square1 4s linear infinite'});
			}, (i + j) * 200);
		}

		for (let j = columns; j >= i; --j)
		{
			const elem = $($(sq1Rows[i]).children()[j]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square1 4s linear infinite'});
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
				elem.css({'animation': 'square3 5s ease-in-out infinite'});
				elem2.css({'animation': 'square3 5s ease-in-out infinite'});
			}, (i + j) * 100);
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
			setTimeout(() =>
			{
				$($(sq4Rows[i]).children()[j]).css({'animation': `square4 1s linear infinite alternate`});
			}, (i + j) * 100);
		}
	}
}

function initSquare5()
{
	const sq5 = $('#square5');
	populateSquareWithCircles(sq5);

	const sq5Rows = $('#square5 .row');
	for (let i = 0; i < sq5Rows.length / 2; ++i)
	{
		for (let j = $(sq5Rows[i]).children().length; j >= 0 ; --j)
		{
			setTimeout(() =>
			{
				const elem1 = $($(sq5Rows[i]).children()[j]);
				const elem2 = $($(sq5Rows[i]).children()[rows - 1 - j]);
				const elem3 = $($(sq5Rows[columns - 1 - i]).children()[j]);
				const elem4 = $($(sq5Rows[columns - 1 - i]).children()[rows - 1 - j]);
				elem1.css({'animation': `square5 1s linear infinite alternate`});
				elem2.css({'animation': `square5 1s linear infinite alternate`});
				elem3.css({'animation': `square5 1s linear infinite alternate`});
				elem4.css({'animation': `square5 1s linear infinite alternate`});
			}, (i * j) * 100);
		}
	}

}

function initSquare6()
{
	const sq6 = $('#square6');
	populateSquareWithCircles(sq6);
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

	for (let i = 0; i < sq8.children().length; ++i)
	{
		const row = $(sq8.children()[i]);
		for (let j = 0; j < row.children().length; ++j)
		{
			const elem = $(row.children()[j]);
			if (j % 2 == 0)
				elem.css({'animation': 'square8 3s ease-in-out infinite alternate'});
			else
				elem.css({'animation': 'square8 3s ease-in-out infinite alternate-reverse'});
		}
	}
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
			setTimeout(() =>
			{
				elem.css({'animation': 'square9 3s ease infinite alternate'});
			}, Math.cos(j + i) * (180 / Math.PI) * 30);
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
	//initSquare6();
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
