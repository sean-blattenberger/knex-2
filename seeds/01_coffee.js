const coffeeData = [
  {
    id: 1,
    name: "Black and Tan",
    roaster: "Ink",
    aroma: 3
  },
  {
    id: 2,
    name: "Holiday Roast",
    roaster: "Starbucks",
    aroma: 9
  },
  {
    id: 3,
    name: "House Quake",
    roaster: "Denver Coffee",
    aroma: 6
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "coffee"; ALTER SEQUENCE coffee_id_seq RESTART WITH 4;').then(function () {
      // Inserts seed entries
      return knex('coffee').insert(coffeeData);
    });
};
