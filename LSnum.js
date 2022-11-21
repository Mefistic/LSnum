function LS(op, d1, d2)
{
	if (op == 'new')
	{
		if (typeof(d1) == 'string')
		{
			a = d1.split('e')

			if (!a[1])
			{
				return {l: Number(Math.log10(a[0]))}
			}
			else
			{
				return {l: Math.log10(a[0]) + Number(a[1])}
			}
		}
	}

	if (op == 'add')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		if (d1.l == -Infinity || d2.l == -Infinity || Math.abs(d1.l - d2.l) >= 15)
		{
			return {l: Math.max(d1.l, d2.l)}
		}

		return {l: d2.l + Math.log10(1 + (10 ** (d1.l - d2.l)))}
	}

	if (op == 'sub')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		if (d1.l <= d2.l)
		{
			return {l: -Infinity}
		}

		if (Math.abs(d1.l - d2.l) >= 15)
		{
			return {l: d1.l}
		}
		console.log('a')
		return {l: d1.l + Math.log10(1 - (10 ** -(d1.l - d2.l)))}
	}

	if (op == 'mul')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return {l: d1.l + d2.l}
	}

	if (op == 'div')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return {l: d1.l - d2.l}
	}

	if (op == 'pow')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return {l: d1.l * d2.l}
	}

	if (op == 'root')
	{
		d1 = LS('new', d1)
		d2 = Number(d2)

		return {l: d1.l / d2}
	}

	if (op == 'log')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return {l: d1.l / d2.l}
	}

	if (op == 'floor')
	{
		d1 = LS('new', d1)

		if (d1.l >= 15) return {l: d1.l}
		return {l: Math.log10(Math.floor(10**d1.l))}
	}

	if (op == 'ceil')
	{
		d1 = LS('new', d1)

		if (d1.l >= 15) return {l: d1.l}
		return {l: Math.log10(Math.ceil(10**d1.l))}
	}

	if (op == 'round')
	{
		d1 = LS('new', d1)

		if (d1.l >= 15) return {l: d1.l}
		return {l: Math.log10(Math.round(10**d1.l))}
	}

	if (op == 'max')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return {l: Math.max(d1.l, d2.l)}
	}

	if (op == 'min')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return {l: Math.min(d1.l, d2.l)}
	}

	if (op == 'lt')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return d1.l < d2.l
	}

	if (op == 'lte')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return d1.l <= d2.l
	}

	if (op == 'gt')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return d1.l > d2.l
	}

	if (op == 'gte')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return d1.l >= d2.l
	}

	if (op == 'eq')
	{
		d1 = LS('new', d1)
		d2 = LS('new', d2)

		return d1.l == d2.l
	}
}