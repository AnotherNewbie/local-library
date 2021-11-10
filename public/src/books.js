function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let bookArray = [];

  bookArray[0] = books.filter((book) => !book.borrows[0].returned);
  bookArray[1] = books.filter((book) => book.borrows[0].returned);
  return bookArray;
}

function getBorrowersForBook(book, accounts) {
  result = [];
  for (borrow of book.borrows) {
    const account = accounts.find((account) => account.id === borrow.id);
    result.push({
      name: account.name,
      email: account.email,
      returned: borrow.returned,
    });
  }
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
