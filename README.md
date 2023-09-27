# 2023 EKI INDRADI | DOCUMENTATION RND
# CRUD SVELTE (MONOLITH), SVELTE-KIT & PRISMA

# PRISMA

```sh
npm i prisma

npm i @prisma/client  --> prisma = ORM database , mirip typeORM , Mongoose , dll

npx prisma init  --> auto generate ./prisma/schema.prisma

npx prisma db push  --> auto generate database & schema (file:./dev.sqlite -> ./prisma/dev.sqlite) from ./prisma/schema.prisma

```

---

## TOOLS

visual studio code ext / tools : 

https://marketplace.visualstudio.com/items?itemName=Prisma.prisma

https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer or https://dbeaver.io/files/dbeaver-ce-latest-win32.win32.x86_64.zip (PORTABLE)

---

```sh

create ./src/app.d.ts -> generate env prisma exist/ new
create ./src/lib/server/prisma.ts -> generate env prisma exist/ new
delete ./src/lib/server/prisma.js <---- bug connection prisma.js , because using .ts 

```

---

```.env
NODE_ENV=development
```

```sh

npm run build
npm run dev

for visual studio code : CTRL+SHIFT+P "simple browser"  http://localhost:5173/

```

---

```sh

create ./src/routes/+page.svelte      -->    import type { PageData } from './$types', <form action="?/createArticle" method="POST">  , <form action="?/deleteArticle&id={article.id}" method="POST">
create ./src/routes/+page.server.ts   -->     load, createArticle, deleteArticle
create ./src/routes/src/[articleId]/+page.svelte     --> import type { PageData } from './$types' , <form action="?/updateArticle" method="POST">
create ./src/routes/src/[articleId]/+page.server.ts  --> load, getArticle, updateArticle

```

---


reference : https://www.youtube.com/watch?v=E9J2VXd-bzE&ab_channel=Huntabyte


---


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## EKI INDRADI
"TIME > KNOWLEDGE > MONEY". #2024_3_DIGIT_MOTIVATION
