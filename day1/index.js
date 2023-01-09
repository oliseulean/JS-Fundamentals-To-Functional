/**
 * List Transformation
 */

const game = {
  'suspects': [
    {
      name: 'Rusty',
      color: 'orange',
    },
    {
      name: 'Miss Scarlet',
      color: 'red',
    },
  ],
};

game['suspects'].forEach(elem => {
  console.log(elem);
});


const foo = () => {
  for (let i = 0 ; i < game.suspects.length ; i++) {
    console.log(game.suspects[i]);
  }
};

foo();