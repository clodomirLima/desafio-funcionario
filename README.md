# projeto node 
# installation
npm install

# teste
npm test
# Para acessar o endpoint que lista funcionario:
URL: 
curl --location --request GET 'localhost:3000/funcionario' \
--header 'x-action: listar-funcionario'

# Para acessar o endpoint que consulta determinado funcionario por ID: 
curl --location --request GET 'localhost:3000/funcionario/:id' \
--header 'x-action: consulta-funcionario-por-id'

# Para acessar o endpoint que altera dados do funcionario: 
curl --location --request PUT 'localhost:3000/funcionario/:id' \
--header 'x-action: alterar-funcionario' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 3,
    "idade": 22,
    "nome": "Flavio Dino",
    "cargo": "Auditor Federal"
}'

# Para acessar o endpoint que deleta o funcionario da base dados: 
curl --location --request DELETE 'localhost:3000/funcionario/:id' \
--header 'x-action: deletar-funcionario' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 3,
    "idade": 22,
    "nome": "Flavio Dino",
    "cargo": "Auditor Federal"
}'