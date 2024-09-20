# resgate arcadafé

O Projeto de Formulário de Animais do Abrigo Veterinário é uma plataforma dedicada a ajudar abrigos e o público a registrar e gerenciar a chegada de animais. Este sistema permite que os abrigos forneçam informações detalhadas sobre os animais resgatados, como condições de saúde e histórico, além de permitir que o público contribua com fotos e descrições dos animais ao serem acolhidos.

## Estrutura
[] Cadastro de Users
[] Autenticação de Users
[] Cadastro de Permissões
[] Cadastro de Produtos
[] Conexão User_Roles
[] Conexão Permission_Roles

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Mongoose**: ODM para MongoDB.
- **Bcryptjs**: Biblioteca para hashing de senhas.
- **jsonwebtoken**: Biblioteca para criar e verificar tokens JWT.
- **dotenv**: Biblioteca para carregar variáveis de ambiente.
- **express-validator**: Middleware para validação de entrada.
- **multer**: Middleware para upload de arquivos.
- **cors**: Middleware para permitir requisições de diferentes origens.

## Pré-requisitos

Certifique-se de ter [Node.js](https://nodejs.org/) e [MongoDB](https://www.mongodb.com/try/download/community) instalados no seu sistema. Você também precisa do `npm` para gerenciar pacotes.

## Configuração do Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/ericcampos321/resgate-backend.git
   cd resgate-backend