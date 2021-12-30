import React from 'react';

const Category = () => {
  return (
    <>
      <section class="category" id="category">
        <h1 class="heading">
          shop by <span>category</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <h3>vegitables</h3>
            <p>upto 50% off</p>
            <img src="images/category-1.png" alt="" />
            <a href="#" class="btn">
              shop now
            </a>
          </div>
          <div class="box">
            <h3>juice</h3>
            <p>upto 44% off</p>
            <img src="images/category-2.png" alt="" />
            <a href="#" class="btn">
              shop now
            </a>
          </div>
          <div class="box">
            <h3>meat</h3>
            <p>upto 35% off</p>
            <img src="images/category-3.png" alt="" />
            <a href="#" class="btn">
              shop now
            </a>
          </div>
          <div class="box">
            <h3>fruite</h3>
            <p>upto 12% off</p>
            <img src="images/category-4.png" alt="" />
            <a href="#" class="btn">
              shop now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
