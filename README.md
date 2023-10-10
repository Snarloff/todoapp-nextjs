# Todo App com Next.js, Prisma, Tailwind CSS e SWR

Este é um projeto de aplicação de lista de tarefas (Todo App) desenvolvido com Next.js. A aplicação possui uma API no Next.js que salva as tarefas em um banco de dados MySQL por meio do Prisma ORM. A estilização é feita com Tailwind CSS, e as requisições são gerenciadas com o SWR.

## Visão Geral

Este projeto inclui as seguintes funcionalidades:

- Adição e remoção de tarefas.
- Listagem de tarefas a partir dos dados armazenados no banco de dados usando Prisma.
- Estilização da interface com Tailwind CSS para um visual simples e centralizado.
- Gerenciamento eficiente de requisições com o SWR.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/): Framework de React para renderização do lado do servidor.
- [Prisma](https://www.prisma.io/): ORM (Object-Relational Mapping) para interagir com o banco de dados.
- [Tailwind CSS](https://tailwindcss.com/): Framework de estilização CSS.
- [SWR](https://swr.vercel.app/): Biblioteca para busca de dados em tempo real.

## Instalação e Configuração

Certifique-se de ter o Node.js, MySQL e as dependências do projeto instaladas na sua máquina. Em seguida, siga os passos abaixo:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/todoapp-nextjs.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto e configure a variável de ambiente necessária:

   ```env
   DATABASE_URL=sua-url-do-banco-de-dados-MySQL
   SHADOW_DATABASE_URL=sua-url-do-banco-de-dados-MySQL
   ```

5. Configure o modelo de dados no Prisma para representar as tarefas.

6. Execute as migrações do Prisma para criar as tabelas do banco de dados:

   ```shell
   npx prisma db push
   ```

7. Inicie o servidor de desenvolvimento:

   ```shell
   npm run dev
   ```

8. Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Uso do SWR

O SWR permite a busca de dados em tempo real e é utilizado para buscar e atualizar as tarefas na aplicação. Você pode personalizar as requisições SWR de acordo com suas necessidades específicas.

Exemplo de uso:

```javascript
import useSWR from 'swr'

function MinhaComponente() {
  const { data, error } = useSWR('/api/todo')

  if (error) return <div>Erro ao buscar dados</div>
  if (!data) return <div>Carregando...</div>

  return (
    // Renderizar o conteúdo usando os dados
  )
}
```

## Projeto rodando

![Site](https://i.imgur.com/yCSZttP.png)

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes de contribuição e envie um pull request.

## Problemas e Sugestões

Se você encontrar algum problema ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.

## Licença

Este projeto está sob a licença ISC.

---

Agradecemos por visitar este repositório e por seu interesse no projeto de aplicação de lista de tarefas com Next.js, Prisma, Tailwind CSS e SWR. Esperamos que este projeto seja útil e educativo para outros desenvolvedores interessados em criar aplicativos semelhantes.
