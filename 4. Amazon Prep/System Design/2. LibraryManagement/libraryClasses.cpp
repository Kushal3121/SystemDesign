class Book {
public:
    string isbn;
    string title;
    string author;

    Book(string isbn, string title, string author);
};

class BookCopy {
private:
    string copyId;
    Book* book;
    bool available;

public:
    BookCopy(string id, Book* book);

    bool isAvailable();
    void borrow();
    void returnCopy();

    string getCopyId();
    Book* getBook();
};

class Member {
public:
    string memberId;
    string name;

    vector<BookCopy*> borrowedBooks;

    Member(string id, string name);
};

class Loan {
public:
    Member* member;
    BookCopy* copy;
    long borrowTime;

    Loan(Member* member, BookCopy* copy, long borrowTime);
};

class Library {
private:
    vector<Book*> books;
    vector<BookCopy*> copies;
    vector<Member*> members;
    vector<Loan*> loans;

public:
    void addBook(Book* book);
    void addCopy(BookCopy* copy);
    void addMember(Member* member);

    Book* searchBook(string title);

    BookCopy* findAvailableCopy(Book* book);

    Loan* borrowBook(Member* member,
                     string title,
                     long currentTime);

    void returnBook(Member* member,
                    BookCopy* copy);
};