<template>
    <div class="chat-container">
    <div class="chat-messages">
      <div v-for="msg in messages" :key="msg.id" class="chat-message">
        <strong>{{ msg.user }}:</strong> {{ msg.message }}
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="chat-form">
      <input v-model="user" type="text" class="chat-input" placeholder="Your Name" required />
      <input v-model="message" type="text" class="chat-input" placeholder="Your Message" required />
      <button type="submit" class="chat-btn">Send</button>
    </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Pusher from 'pusher-js';
  
  export default {
    data() {
      return {
        user: '',
        message: '',
        messages: [],
      };
    },
    methods: {

      sendMessage() {
      if (this.user.trim() === '' || this.message.trim() === '') return;
      this.$http.post(this.dynamic_route('/group/messages'), { user: this.user, message: this.message }).then(() => {});
      this.message = '';
    },
    },
    created() {
        // console.log(JSON.parse(localStorage.getItem('auth_user')).auth_user.username);
        this.user = JSON.parse(localStorage.getItem('auth_user')).auth_user.username
      // Fetch initial messages from the database (if you have stored messages in the backend)
      // Replace this with your actual backend endpoint to fetch messages
      // Example: axios.get('/api/messages')
      // After fetching, update this.messages with the fetched data
  
      // Set up Pusher to listen for new messages
      this.pusher = new Pusher('23770585f05335a622d6', {
      cluster: 'mt1',
      encrypted: true,
    });
    this.chatChannel = this.pusher.subscribe('chat-channel');
    this.chatChannel.bind('new-message', (data) => {
      this.messages.push(data);
    });
    },
  };
  </script>
  
  <style>
  .chat-container {
    max-width: 450px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Arial', sans-serif;
  }
  
  .chat-header {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #007bff;
  }
  
  .chat-messages {
    max-height: 300px;
    overflow-y: auto;
  }
  
  .chat-message {
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .current-user {
    background-color: #007bff;
    color: #fff;
    align-self: flex-end;
  }
  
  .message-sender {
    font-size: 12px;
    font-weight: bold;
    color: #333;
    margin-bottom: 4px;
  }
  
  .message-content {
    font-size: 14px;
  }
  
  .chat-form {
    display: flex;
    margin-top: 20px;
  }
  
  .chat-input {
    flex: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .chat-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  
  .chat-btn:hover {
    background-color: #0056b3;
  }
  </style>
  
  