function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) =>
    a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
  const selectID = account.id;
  let borrowedBooks = 0;
  for (book of books) {
    for (borrow of book.borrows) {
      if (borrow.id === selectID) {
        borrowedBooks++;
      }
    }
  }
  return borrowedBooks;
}

function getBooksPossessedByAccount(account, books, authors) {
  const selectID = account.id;
  const booksPossessed = [];
  for (book of books) {
    for (borrow of book.borrows) {
      if (borrow.id === selectID && borrow.returned === false) {
        const author = authors.find((author) => author.id === book.authorId);
        const { id, title, genre, authorId, borrows } = book;
        booksPossessed.push({ id, title, genre, authorId, borrows, author });
      }
    }
  }
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
