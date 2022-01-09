import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

import "./header.css";

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GTP-3 OpenAI</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie accumsan
          velit eu suscipit. Vestibulum in leo luctus, viverra nunc ut, malesuada orci. Donec tempor
          lorem vel magna lacinia laoreet. Nulla eget enim imperdiet, suscipit urna eget, vulputate
          est.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your E-Mail' />
          <button type='button'> Get Started </button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
}

export default Header;
