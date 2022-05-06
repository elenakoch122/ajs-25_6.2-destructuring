import attackOptions from '../app';

test('attackOptions function', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
      {
        id: 10,
        name: 'Пинок',
        icon: 'http://...',
      },
      {
        id: 11,
        name: 'Пощёчина',
        icon: 'http://...',
        description: 'Пощёчина наносит непоправимый вред психике',
      },
    ],
  };

  const result = attackOptions(character);
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 10,
      name: 'Пинок',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 11,
      name: 'Пощёчина',
      icon: 'http://...',
      description: 'Пощёчина наносит непоправимый вред психике',
    },
  ];

  expect(result).toEqual(expected);
});
