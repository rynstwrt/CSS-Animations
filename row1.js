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
