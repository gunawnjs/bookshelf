const data = [
	{
		"name": "Book A",
		"publisher": "Alfred",
		"finished": false
	},
	{
		"name": "Book B",
		"publisher": "Boneto",
		"finished": true
	},	
	{
		"name": "Book C",
		"publisher": "Charlie",
		"finished": true
	},
	{
		"name": "Book D",
		"publisher": "Daniel",
		"finished": false
	},	
	{
		"name": "Book D",
		"publisher": "Daniel",
		"finished": false
	},
]

const done = data.filter((book) => book.finished === false);
console.log(done);