<template>
  
  <div class="card">
  <img src="~/assets/images/visit.jpeg" alt="Card background" class="card-background">
  <div class="card-content">
    <button class="btn-deal">Deal</button>
    <div class="product-details">
      <h2 class="product-name">Product Name</h2>
      <p class="product-description">Product details go here...</p>
      <p class="product-description">Product details go here...</p>
      <p class="product-description">Product details go here Product details go here Product details go here...</p>
    </div>
  </div>
</div>


  <div style="position: relative; width: 300px; height: 400px; overflow: hidden;" class="card">
    <img src="~/assets/images/visit.jpeg" alt="Card background" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" class="card-background">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 1rem;" class="card-content">
      <button style="background-color: #3490dc; color: #ffffff; padding: 0.5rem 1rem; border: none; cursor: pointer;" class="btn-deal">Deal</button>
      <div style="text-align: right; color: #ffffff; text-transform: bold;" class="product-details">
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; text-decoration: underline; text-align: left; color: #ffffff; text-transform: bold;" class="product-name">Product Name</h2>
        <p style="font-size: 1rem; color: #ffffff; text-align: left; text-transform: bold;" class="product-description">Product details go here...</p>
        <p style="font-size: 1rem; color: #ffffff; text-align: left; text-transform: bold;" class="product-description">Product details go here...</p>
        <p style="font-size: 1rem; color: #ffffff; text-align: left; text-transform: bold;" class="product-description">Product details go here Product details go here Product details go here...</p>
      </div>
    </div>
  </div>



    
    </template>
    
    <script setup>
// import { Carousel, initTE } from "tw-elements";
    </script>
    
    <style lang="scss" scoped>
    
  .card {
    position: relative;
    width: 300px; /* Adjust the width as needed */
    height: 400px; /* Adjust the height as needed */
    overflow: hidden;
  }

  .card-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .card-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  .btn-deal {
    background-color: #3490dc;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }

  .product-details {
    text-align: right;
    color: #ffffff;
    text-transform:  bold;
  }

  .product-name {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-decoration:  underline;
    text-align: left;
    color: #ffffff;
    text-transform:  bold;
  }

  .product-description {
    font-size: 1rem;
    color: #ffffff;
    text-align: left;
    text-transform:  bold;
  }
</style>

    