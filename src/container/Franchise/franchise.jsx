import React, { useState } from 'react';
import axios from 'axios';
import './franchise.css';

const Franchise = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
    };

    try {
      const response = await axios.post('https://nodebackend-gk6i.onrender.com/sendMail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="background-image" id="franchise">
      <div className="fcontent" >
        <h4 className='headtext__cormorant1'>Franchise</h4>
        <p className="caption">Join our franchise and be a part of our growing family.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Your Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Franchise;
