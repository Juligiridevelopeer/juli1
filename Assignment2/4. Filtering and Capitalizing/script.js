// Step 1: Define input data - list of books
const books = [
    { title: "Book 1", author: "john doe", publicationYear: 2008 },
    { title: "Book 2", author: "jane smith", publicationYear: 2012 },
    { title: "Book 3", author: "alex brown", publicationYear: 2005 },
    { title: "Book 4", author: "emma wilson", publicationYear: 2011 }
];

// Step 2: Filter books published before 2010
const filteredBooks = books.filter(book => book.publicationYear >= 2010);

// Step 3: Map to capitalize author names in the filtered books
const updatedBooks = filteredBooks.map(book => ({
    title: book.title,
    author: book.author.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' '),
    publicationYear: book.publicationYear
}));

// Step 4: Output the updated list of books
console.log("Updated list of books:");
console.log(updatedBooks);
