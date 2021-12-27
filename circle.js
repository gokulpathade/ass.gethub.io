<html>
  <body>

    <script>
      class Shape{ 
        drawShape(color){
          this.color = color;
          this.color = "black";
        }
      calculateArea(){
          document.write("The color of the shape is " + this.color + "</br>");
        }
      }
      class Circle extends Shape{ 
         drawShape(color){
          super(color); 
        }
          calculateArea(){
          document.write("The color of the circle is " + this.color + "</br>");
        }
      }
      var c1 = new Circle("Blue"); 
      c1. calculateArea(); 
    </script>

  </body>
</html># ass.gethub.io
