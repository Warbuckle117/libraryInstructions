
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert(
          [
            {id: 1, bookTitle: "To Kill A Mockingbird", Author: "Harper Lee", ISBNNumber: "9780060173227", bookCheckedOut: true },
            {id: 2, bookTitle: "Animal Farm", Author: "George Orwell", ISBNNumber: "9780151002177", bookCheckedOut: false },
            {id: 3, bookTitle: "Ender's Shadow", Author: "Orson Scott Card", ISBNNumber: "9780756901530", bookCheckedOut: true },
            {id: 4, bookTitle: "Hyperion", Author: "Dan Simmons", ISBNNumber: "9780385249492", bookCheckedOut: false }
        ]
      );
    });
};
