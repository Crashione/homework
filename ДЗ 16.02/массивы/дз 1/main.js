let queue = ['Иван', 'Мария', 'Петр'];
queue.push('Анна');
queue.shift();
queue.unshift('Олег');

console.log(queue + `, длина ${queue.length}`)