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
