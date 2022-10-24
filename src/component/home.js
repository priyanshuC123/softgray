import React from "react";
import {BiMessage,BiCodeAlt} from "react-icons/bi";
import {RiLayout5Fill} from "react-icons/ri";
import {BsGraphUp} from "react-icons/bs";
import {FaBars} from "react-icons/fa";
class Home extends React.Component{
    render(){
      return ( <div>
            
<div id="root">


<section id="navbar">

 
    <nav class="navbar  navbar-expand-lg">
      <a class="navbar-brand" href="">SOFTGRAY</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#footer">PRODUCTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing">SERVICES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#cta">ABOUT</a></li>
          <li class="nav-item">
          
            <a class="nav-link" href="#cta">JOBS</a></li>
          <li class="nav-item">
          
            <a class="nav-link" href="#cta">CONTACT</a></li>
          <li class="nav-item">
          
            <a class="nav-link5" href="tel:+81-0000-0000"><p>+81-0000-0000</p></a>
          </li>

        </ul>
      </div>
    </nav>
</section>





<section id="Title">


  

    <div class = "row ">
      <h1 class="big-heading">Creative Solution</h1>
      <h2 class="p1">Lorem ipsum dolor sit amet, consectetur <br/>ajnivbvf sed do eiusmod<br/> tempor  inci
    dolore  aliqua. Ut enim ad minim  veniam, bringme thaorbvj <br/> nostrud jnefvbvv exhfrubr exercitation ullamco <br/>laboris nisi ut aliquip exea inmageirrfir firejfr </h2>
  </div>

  </section>



<section id="features">


<div class="features">
<div class="col">

<div className="iconsb">
<BiMessage class="icons" size="3em" />
</div>

  <h3 class="feat c-heading">Consulting</h3>
  <p class="f">Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
</p>
</div>

<div class="col">

<div className="iconsb">
<BiCodeAlt class="icons" size="3em"/>
</div>
  <h3 class="feat c-heading">Developing</h3>
  <p class="f">Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
</p>

</div>

<div class="col">

<div className="iconsb">
<RiLayout5Fill class="icons" size="3em"/>
</div>
  <h3 class="feat c-heading">Designing</h3>
  <p class="f">Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo   
</p>
</div>

<div class="col">

<div className="iconsb">
<BsGraphUp class="icons" size="3em"/>
</div>

  <h3 class="feat c-heading">Analysis</h3>
  <p class="f">Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
</p>
</div>
</div>



</section>

</div>
<script src="../src/index.js" type="./src/text/jsx"></script>
        </div>);
    }
}

export default Home;