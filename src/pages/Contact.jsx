import { useState } from 'react';
import './style.css';

function Contact() {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    const { input, value } = e.target;
    return input === 'Name' ? setName(value) : setEmail(value)
  };

  const handleInputChange2 = (e) => {
    const { input, value } = e.target;
    return input === setMessage(value)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>
        Contact
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange2}
          type="text"
          placeholder='Message'
        />
        <button type="submit" class="text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;