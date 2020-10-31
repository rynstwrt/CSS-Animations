const browserTransitionEndEvents = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd';
const numSquares = 9;
const rows = 15;
const columns = 15;
let index = 1;
let isInTransition = false;

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

function initSquareFromIndex()
{
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
}

function moveSliderToIndex(isLeft)
{
	isInTransition = true;

	$('#slider').css({'margin-left': `${(index - 1) * window.innerWidth * -1}px`});

	initSquareFromIndex();

	$('#slider').on(browserTransitionEndEvents, () =>
	{
		const previousSquareIndex = isLeft ? index + 1 : index - 1;
		$(`#square${previousSquareIndex}`).children().remove();
		isInTransition = false;
	});
}

$(document).ready(() =>
{
	initSquare1();
	$('#leftarrow').addClass('disabled');

	$('#leftarrow').click(() =>
	{
		if (isInTransition || $('#leftarrow').hasClass('disabled'))
			return;

		if (index === numSquares)
			$('#rightarrow').removeClass('disabled');

		if (index === 2)
			$('#leftarrow').addClass('disabled');

		--index;

		moveSliderToIndex(true);
	});

	$('#rightarrow').click(() =>
	{
		if (isInTransition || $('#rightarrow').hasClass('disabled'))
			return;

		if (index === 1)
			$('#leftarrow').removeClass('disabled');

		if (index + 1 === numSquares)
			$('#rightarrow').addClass('disabled');

		++index;

		moveSliderToIndex(false);
	});
});

$(window).resize(() =>
{
	//TODO
});
