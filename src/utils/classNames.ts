type ClassValue =
	| string
	| number
	| undefined
	| null
	| false
	| Record<string, boolean | undefined | null>
	| ClassValue[];

export function classNames(...args: ClassValue[]): string {
	let classes: string[] = [];

	args.forEach((cls) => {
		if (typeof cls === 'string' || typeof cls === 'number') {
			classes.push(String(cls));
		} else if (Array.isArray(cls)) {
			classes = classes.concat(classNames(...cls));
		} else if (typeof cls === 'object' && cls !== null) {
			const c = classNames(
				...Object.entries(cls)
					.filter(([_, value]) => Boolean(value))
					.map(([className, _]) => className)
			);
			if (c) classes = classes.concat(c);
		}
	});

	return classes.join(' ');
}
