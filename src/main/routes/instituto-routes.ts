
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/institutos', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
