import { rest } from 'msw'

export const handlers = [
  // Mock a named API endpoint used in .env for example
  rest.get('https://api.example.com/hello', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'Hello from MSW (remote)' })
    )
  }),

  // Local-origin example
  rest.get('/hello', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'Hello from MSW (local)' })
    )
  })
]
