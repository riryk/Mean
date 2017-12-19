set port=27018
mongo mean --port %port% --eval "db.users.remove({})";
mongo mean --port %port% --eval "db.users.insert({firstName: 'John', lastName: 'Doe'})";
mongo mean --port %port% --eval "db.users.insert({firstName: 'Jonathan', lastName: 'Perchuk'})";
mongo mean --port %port% --eval "db.users.insert({firstName: 'Svetlana', lastName: 'Savchenko'})";

