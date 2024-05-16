const fs = require('fs');
const imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;

// Ignore self-signed certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

class RamblerReader {
  constructor() {
    this.config = {
      imap: {
        user: 'tltrhdandhfckeof@myrambler.ru',
        password: 'LakRTjUyr3*8',
        host: 'imap.rambler.ru',
        port: 993,
        tls: true,
        authTimeout: 3000
      }
    };
  }

  async fetchEmails() {
    const connection = await imaps.connect(this.config);
    await connection.openBox('INBOX');

    const searchCriteria = ['UNSEEN'];
    const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: false };

    const results = await connection.search(searchCriteria, fetchOptions);
    const messages = await Promise.all(results.map(res => simpleParser(res.parts.find(part => part.which === 'TEXT').body)));

    this.latestMessage = messages[messages.length - 1];
    this.messageText = this.latestMessage.text || this.latestMessage.html;
    connection.end();
  }

  async printConfirmationCode() {
    if (!this.messageText) {
      console.log('No message text available.');
      return;
    }

    const lines = this.messageText.split('\n');
    for (const line of lines) {
      if (line.includes("ваш код подтверждения на Playerok")) {
        console.log(line.split(' ')[2]);
        return line.split(' ')[2];
      }
    }
  }
}

module.exports = RamblerReader;
