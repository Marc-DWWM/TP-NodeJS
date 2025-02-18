import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import Message from './models/Message.js';

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Test : GET /
app.get('/', (req, res) => {
  res.send('Hello depuis Express + Sequelize + MariaDB');
});

// GET /messages (Lister)
app.get('/messages', (req, res) => {
  Message.findAll({ order: [['createdAt', 'DESC']] })
    .then((messages) => res.json(messages))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// POST /messages (Créer)
app.post('/messages', (req, res) => {
  const author = req.body.author;
  const content = req.body.content;

  if (!author || !content) {
    return res.status(400).json({ error: 'Champs manquants' });
  }
  Message.create({ author, content })
    .then((newMsg) => res.status(201).json(newMsg))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// DELETE /messages/:id (Supprimer)
app.delete('/messages/:id', (req, res) => {
  const id = req.params.id;
  Message.destroy({ where: { id } })
    .then((count) => {
      if (count === 0) {
        return res.status(404).json({ error: 'Introuvable' });
      }
      res.json({ message: `Message ${id} supprimé.` });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

// PUT /messages/:id (Modifier)
app.put('/messages/:id', (req, res) => {
  const id = req.params.id;
  const author = req.body.author;
  const content = req.body.content;

  Message.update({ author, content }, { where: { id } })
    .then(([nbUpdated]) => {
      if (nbUpdated === 0) {
        return res.status(404).json({ error: 'Introuvable ou pas modifié' });
      }
      return Message.findByPk(id);
    })
    .then((updatedMessage) => res.json(updatedMessage))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Synchroniser et démarrer
const PORT = 3000;
sequelize.sync()
  .then(() => {
    console.log('Base synchronisée.');
    app.listen(PORT, () => {
      console.log(`Serveur sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Sync error:', err));