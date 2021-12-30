import React from 'react';

const Baner = () => {
  return (
    <>
      <section class="banner-container">
        <div class="banner">
          <img src="images/banner-1.jpg" alt="" />
          <div class="content">
            <h3>special offer</h3>
            <p>upto 45% off</p>
            <a href="#" class="btn">
              check out
            </a>
          </div>
        </div>

        <div class="banner">
          <img src="images/banner-2.jpg" alt="" />
          <div class="content">
            <h3>limited offer</h3>
            <p>upto 50% off</p>
            <a href="#" class="btn">
              check out
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Baner;
