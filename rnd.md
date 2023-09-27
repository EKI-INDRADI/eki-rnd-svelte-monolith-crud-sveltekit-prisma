
# 2023 CRUD SVELTE (MONOLITH), SVELTE-KIT & PRISM | EKI INDRADI DOCUMENTATION RND

# ---------- PRISMA

```sh
npm i prisma

npm i @prisma/client  --> prisma = ORM database , mirip typeORM , Mongoose , dll

npx prisma init  --> auto generate ./prisma/schema.prisma

npx prisma db push  --> auto generate database & schema (file:./dev.sqlite -> ./prisma/dev.sqlite) from ./prisma/schema.prisma

```

# ---------- /PRISMA

# ---------- TOOLS

visual studio code ext / tools : 

https://marketplace.visualstudio.com/items?itemName=Prisma.prisma

https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer or https://dbeaver.io/files/dbeaver-ce-latest-win32.win32.x86_64.zip (PORTABLE)

# ---------- TOOLS

---

create ./src/app.d.ts -> generate env prisma exist/ new
create ./src/lib/server/prisma.ts -> generate env prisma exist/ new
delete ./src/lib/server/prisma.js <---- bug connection prisma.js , because using .ts 

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

create ./src/routes/+page.svelte      -->    import type { PageData } from './$types', <form action="?/createArticle" method="POST">  , <form action="?/deleteArticle&id={article.id}" method="POST">
create ./src/routes/+page.server.ts   -->     load, createArticle, deleteArticle
create ./src/routes/src/[articleId]/+page.svelte     --> import type { PageData } from './$types' , <form action="?/updateArticle" method="POST">
create ./src/routes/src/[articleId]/+page.server.ts  --> load, getArticle, updateArticle

---


reference : https://www.youtube.com/watch?v=E9J2VXd-bzE&ab_channel=Huntabyte