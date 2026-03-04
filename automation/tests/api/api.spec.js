const { test, expect } = require('@playwright/test')

test('create user api', async ({ request }) => {

 const res = await request.post(
  'http://localhost:5000/users',
  {
   data:{
    name:"api-user",
    email:"api@test.com"
   }
  }
 )

 expect(res.status()).toBe(200)

})