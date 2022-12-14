<template>
    <body>
    <h2>You are welcomed to write us any time</h2>
<br>

<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Rait Pommer</h2>
        <p class="title">Peainsener</p>
        <p>rait.pommer@ut.ee</p>
        <p><button class="button" onclick="window.location.href='https://www.linkedin.com/in/rait-pommer-084671226/';">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Cardo Kenten Ross</h2>
        <p class="title">Objektijuht</p>
        <p>cardo.kenten.ross@ut.ee</p>
        <p><button class="button" onclick="window.location.href='https://www.linkedin.com/in/cardo-kenten-ross-6a282a226/';">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Liis Reimand</h2>
        <p class="title">Sekretär</p>
        <p>liis.reimand@ut.ee</p>
        <p><button class="button" onclick="window.location.href='https://www.linkedin.com/in/liis-reimand-728330250/';">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</body>
</template>

<script>
</script>


<style>

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

h2 {
    text-align: center;
}

.button:hover {
  background-color: #555;
}
</style>