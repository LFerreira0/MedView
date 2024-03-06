# Anotações

    ## Adição de nodemon para live Reload e sucrase para suporte de versões
    yarn add nodemon sucrase -D 

    ##Adição do Sequelize
    yarn add sequelize-cli -D
    
    ##Para utilização do postgress, duas bibliotecas são solicitadas
    yarn add pg pg-hstore

    ##Para criação de uma migration, utilize
    yarn sequelize migration:create --name=create-users
    
    ##Rodar migration
    yarn sequelize db:migrate

    ##Desfazer migration
    yarn sequelize db:migrate:undo

    ##Biblioteca para criptografia
    yarn add bcrypt js

    ##Instalação JWT
    yarn add jsonwebtoken

    ##Instalação do Yup para validações de campos
    yarn add Yup
