# Library Management System

Assumptions

- Library is both offline and online.
- Library has digital and physical content.
- User can checkout any material that is not checkedout from library.

## Design 1

A Library, A Membership, A User, A Book

Library issues Membership.
User requests Membership.
Membership can be of type: Offline, Online, Both.
User can browse all physical and digital content online.
User can checkout a book.
User can return a checked out book.

```javascript

function searchBook(bookname) {
  return allBooks.find(bookname)
}

function checkoutBook(searchedBook) {
  if(searchedBook.isavailable) {
    return searchedBook.checkout()
  }
}

```
