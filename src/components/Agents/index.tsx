class Message {
    sender: string;
    recipient: string;
    content: string;
  
    constructor(sender: string, recipient: string, content: string) {
      this.sender = sender;
      this.recipient = recipient;
      this.content = content;
    }
  }
  
class Agent {
    mailbox: Message[];
  
    constructor() {
      this.mailbox = [];
    }
  
    sendMessage(recipient: Agent, content: string) {
      const message = new Message("Agent", recipient.toString(), content);
      recipient.mailbox.push(message);
    }
  
    receiveMessage() {
      return this.mailbox.shift();
    }
  
    act() {
      const message = this.receiveMessage();
      if (message) {
        console.log(`Received message: ${message.content}`);
      }
      // Perform decision-making and action-taking based on the messages in the mailbox
    }
  }
  
  const agent1 = new Agent();
  const agent2 = new Agent();
  
  setInterval(() => {
    const message = agent1.receiveMessage();
    if (message) {
      agent2.mailbox.push(message);
    }
    agent1.act();
    agent2.act();
  }, 1000);

export default Agent;