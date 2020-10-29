const numSquares = 9;
const rows = 15;
const columns = 15;
let index = 1;

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

function moveSlider(direction)
{
	const previousSquare = (direction === 'right') ? $(`#square${index - 1}`) : $(`#square${index + 1}`);

	switch (index)
	{
		case 1:
			initSquare1();
			break;
		case 2:
			initSquare2();
			break;
		case 3:
			initSquare3();
			break;
		case 4:
			initSquare4();
			break;
		case 5:
			initSquare5();
			break;
		case 6:
			initSquare6();
			break;
		case 7:
			initSquare7();
			break;
		case 8:
			initSquare8();
			break;
		case 9:
			initSquare9();
			break;
	}

	const slider = $('#slider');

	// left is half the square size + left margin

	const squareWidth = $(`#square${index}`).width();
	const squareMarginLeft = $(`#square${index}`).css('margin-left');

	console.log(squareMarginLeft);

	previousSquare.children().remove();
}

$(document).ready(() =>
{
	initSquare1();

	$('#leftarrow').click(() =>
	{
		if (index <= 1) return;
		--index;
		moveSlider('left');
	});

	$('#rightarrow').click(() =>
	{
		if (index >= numSquares) return;
		++index;
		moveSlider('right');
	});
});

// $(window).resize(() =>
// {
// 	$('.square').children().remove();
// 	init();
// });
