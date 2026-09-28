#include <iostream>
#include <vector>
using namespace std;

class Book {
public:
    string isbn;
    string title;
    string author;

    Book(string isbn, string title, string author)
        : isbn(isbn), title(title), author(author) {}
};

class BookCopy {
private:
    string copyId;
    Book* book;
    bool available;

public:
    BookCopy(string id, Book* book)
        : copyId(id), book(book), available(true) {}

    bool isAvailable() {
        return available;
    }

    void borrow() {
        available = false;
    }

    void returnCopy() {
        available = true;
    }

    string getCopyId() {
        return copyId;
    }

    Book* getBook() {
        return book;
    }
};

class Member {
public:
    string memberId;
    string name;
    vector<BookCopy*> borrowedBooks;

    Member(string id, string name)
        : memberId(id), name(name) {}
};

class Loan {
public:
    Member* member;
    BookCopy* copy;
    long borrowTime;

    Loan(Member* member, BookCopy* copy, long time)
        : member(member), copy(copy), borrowTime(time) {}
};

class Library {
private:
    vector<Book*> books;
    vector<BookCopy*> copies;
    vector<Member*> members;
    vector<Loan*> loans;

public:

    void addBook(Book* book) {
        books.push_back(book);
    }

    void addCopy(BookCopy* copy) {
        copies.push_back(copy);
    }

    void addMember(Member* member) {
        members.push_back(member);
    }

    Book* searchBook(string title) {

        for (Book* book : books) {

            if (book->title == title) {
                return book;
            }
        }

        return nullptr;
    }

    BookCopy* findAvailableCopy(Book* \) {

        for (BookCopy* copy : copies) {

            if (copy->getBook() == book &&
                copy->isAvailable()) {

                return copy;
            }
        }

        return nullptr;
    }

    Loan* borrowBook(Member* member, string title, long currentTime) {

        Book* book = searchBook(title);
        if (book == nullptr) return nullptr;

        BookCopy* copy = findAvailableCopy(book);
        if (copy == nullptr) return nullptr;

        copy->borrow();
        member->borrowedBooks.push_back(copy);

        Loan* loan = new Loan(member, copy, currentTime);

        loans.push_back(loan);

        return loan;
    }

    void returnBook(Member* member, BookCopy* copy) {

        copy->returnCopy();

        auto& borrowed = member->borrowedBooks;

        for (int i = 0; i < borrowed.size(); i++) {

            if (borrowed[i] == copy) {
                borrowed.erase(borrowed.begin() + i);
                break;
            }
        }
    }
};