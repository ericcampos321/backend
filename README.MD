# resgate arcadafé

O Projeto de Publicação de Resgate de Animais é uma plataforma dedicada a ajudar instituições e ao público na publicação e gerenciamento de resgates de animais. Este sistema permite que instituições de resgate forneçam informações detalhadas sobre os trajetos de resgate e possibilita que o público poste fotos e descrições sobre resgates realizados.

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