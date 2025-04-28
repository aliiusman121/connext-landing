export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email } = req.body;

  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!airtableApiKey || !baseId) {
    return res.status(500).json({ error: 'Missing Airtable credentials.' });
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/tbl4awyeEddmlJgQt`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json',
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
      return res.status(200).json({ message: 'Success' });
    } else {
      const errorBody = await response.text();
      console.error('Airtable Error:', errorBody);
      return res.status(500).json({ error: 'Failed to submit to Airtable', details: errorBody });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Server Error', details: error.message });
  }
}
