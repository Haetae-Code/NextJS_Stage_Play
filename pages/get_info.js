const express = require('express');
const { ChakraProvider, Box, Heading, UnorderedList, ListItem } = require('@chakra-ui/react');
const { theme } = require('@chakra-ui/core');
const app = express();
const db = require('../db_c.js');

app.get('/', async (req, res) => {
  try {
    const query = `
      SELECT P.title, P.location, P.capacity, D.view_day, T.view_time
      FROM time T
      JOIN performance P ON T.performance_key = P.performance_key
      JOIN date D ON T.date_key = D.date_key;
    `;

    const results = await db.query(query);

    // Render the results using Chakra UI components
    const performanceItems = results.map((row) => (
      <ListItem key={row.title}>
        <Heading as="h3" size="md" mt={4}>
          {row.title}
        </Heading>
        <Box>
          <strong>Location:</strong> {row.location}
        </Box>
        <Box>
          <strong>Capacity:</strong> {row.capacity}
        </Box>
        <Box>
          <strong>View Day:</strong> {row.view_day}
        </Box>
        <Box>
          <strong>View Time:</strong> {row.view_time}
        </Box>
      </ListItem>
    ));

    const html = (
      <ChakraProvider theme={theme}>
        <Box p={4}>
          <Heading as="h1" size="xl" mb={6}>
            Performance Information
          </Heading>
          <UnorderedList>{performanceItems}</UnorderedList>
        </Box>
      </ChakraProvider>
    );

    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3306, () => {
  console.log('Server listening on port 3306');
});

