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
