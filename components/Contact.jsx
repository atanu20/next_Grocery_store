import React from 'react';

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>

        <form action="">
          <div class="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>

          <div class="inputBox">
            <input type="number" placeholder="number" />
            <input type="text" placeholder="subject" />
          </div>

          <textarea
            placeholder="message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <input type="submit" value="send message" class="btn" />
        </form>
      </section>
      <section class="newsletter">
        <h3>subscribe us for latest updates</h3>

        <form action="">
          <input class="box" type="email" placeholder="enter your email" />
          <input type="submit" value="subscribe" class="btn" />
        </form>
      </section>
    </>
  );
};

export default Contact;
