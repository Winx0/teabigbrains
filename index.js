const Web3 = require('web3');
const express = require('express');
const app = express();

// Logika aplikasi utama

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
