export async function sendEmail(state) {
  console.log(state);
  const result = await fetch('/api',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state)
  }).then((result) => result.json());
  console.log(result);
}
