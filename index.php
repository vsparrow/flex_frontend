<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script  src="https://code.jquery.com/jquery-3.3.1.min.js"  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./src/js/category.js"></script>
    <script type="text/javascript" src="./src/js/display.js"></script>
    <script type="text/javascript" src="./src/js/event_listener.js"></script>
    <script type="text/javascript" src="./src/js/item.js"></script>
    <script type="text/javascript" src="./src/js/navbar.js"></script>
    <script type="text/javascript" src="./src/js/index.js"></script>
    <link rel="stylesheet" href="./src/css/styles.css">

  </head>

  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" id="site-title">FLEX</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav nav-links">
            <li ><a  href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"id="sortHigh" style="font-size: 1.25em"><i class="fa fa-sort-up"></i><i class="fa fa-usd"></i></a></li>
            <li><a href="#"id="sortLow" style="font-size: 1.25em"><i class="fa fa-sort-down"></i><i class="fa fa-usd"></i></a></li>
            <li><a href="#"><input type="text" placeholder="Search.." name="search" id="search">
              <button type="submit" id="searchButton"><i class="fa fa-search"></i></button>
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="" id="main">
    </div>
  </body>
</html>
<!-- end -->
