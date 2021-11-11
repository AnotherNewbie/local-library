function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((booksBorrowed, book) => {
    for (borrow of book.borrows) {
      if (borrow.returned === false) {
        booksBorrowed++;
      }
    }
    return booksBorrowed;
  }, 0);
}

function mostPopularGenre(books) {
  const arr = books.sort((bookA, bookB) =>
    bookA.borrows.length > bookB.borrows.length ? -1 : 1
  );
  return arr;
}

function sortByCount(array) {
  array.sort((elemA, elemB) => elemB.count - elemA.count);
}

function getMostCommonGenres(books) {
  ranks = books.reduce((results, book) => {
    if (!results.find((result) => result.name === book.genre)) {
      results.push({ name: book.genre, count: 1 });
    } else {
      results.find((result) => result.name === book.genre).count++;
    }
    return results;
  }, []);
  sortByCount(ranks);
  return ranks.slice(0, 5);
}

function getMostPopularBooks(books) {
  const borrows = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  return borrows.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorArray = [];
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length;
      }
    });
    authorArray.push(theAuthor);
  });
  sortByCount(authorArray);
  return authorArray.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
