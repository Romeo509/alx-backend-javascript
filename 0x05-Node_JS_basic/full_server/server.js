// full_server/server.js
import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 1245;

// Use the defined routes
app.use(router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
