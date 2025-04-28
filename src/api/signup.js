export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      const airtableApiKey = process.env.AIRTABLE_API_KEY;
      const baseId = process.env.AIRTABLE_BASE_ID;
  
      const response = await fetch(`https://api.airtable.com/v0/${baseId}/tbl4awyeEddmlJgQt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${airtableApiKey}`,
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
              },
            },
          ],
        }),
      });
  
      if (response.ok) {
        res.status(200).json({ message: 'Success' });
      } else {
        res.status(500).json({ error: 'Failed to submit to Airtable' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  