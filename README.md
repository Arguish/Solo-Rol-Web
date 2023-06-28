# ME_N-Backend

---

## Routes

- {{baseUrl/api}} -> /

  - Req: X
  - Res: "Todo OK"

  ***

- {{baseUrl/api}} -> /user

  - Req: X

- post -> /loggin

  - Req: `{
  "mail": "..."
  "pass": "..."
}`

- post -> /add

  - Req: `{
  "nick": "..."
  "mail": "..."
  "pass": "..."
}`

- get -> /all

  - Req: X

- get -> /:id

  - Req: X

- put -> /:id

  - Req: `{
  "nick": "..."
  "mail": "..."
  "pass": "..."
}`

- delete -> /:id

  - Req: X

  ***

- {{baseUrl/api}} -> /msg
  - Req: X

---

- {{baseUrl/api}} -> /todo
  - Req: X

---

- {{baseUrl/api}} -> /group

  - Req: X
  - Res: X

- get -> /:id

  - Req: X

- post -> /group/add

  - Req: `{
    {
"participant": [...],
"todos": [...]
}
  }`

- post -> /user

  - Req: `{
"_id": "649c0e61b48d66c7d20c3f1a"
}`

- put -> /:id

  > Pendiente

  - Req: X

- delete -> /id
  - Req: X
