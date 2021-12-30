import React from 'react';

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <a href="#" class="logo">
              <i class="fas fa-shopping-basket"></i>groco
            </a>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              culpa sit enim nesciunt rerum laborum illum quam error ut alias!
            </p>
            <div class="share">
              <a href="#" class="btn fab fa-facebook-f"></a>
              <a href="#" class="btn fab fa-twitter"></a>
              <a href="#" class="btn fab fa-instagram"></a>
              <a href="#" class="btn fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <h3>our location</h3>
            <div class="links">
              <a href="#">india</a>
              <a href="#">USA</a>
              <a href="#">france</a>
              <a href="#">japan</a>
              <a href="#">russia</a>
            </div>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <div class="links">
              <a href="#">home</a>
              <a href="#">category</a>
              <a href="#">product</a>
              <a href="#">deal</a>
              <a href="#">contact</a>
            </div>
          </div>

          <div class="box">
            <h3>download app</h3>
            <div class="links">
              <a href="#">google play</a>
              <a href="#">window xp</a>
              <a href="#">app store</a>
            </div>
          </div>
        </div>

        <h1 class="credit">
          created by{' '}
          <span>
            {' '}
            <a href="https://github.com/atanu20">atanu20</a>{' '}
          </span>{' '}
          | all rights reserved!
        </h1>
      </section>
    </>
  );
};

export default Footer;
