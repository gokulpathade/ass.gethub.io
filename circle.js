<html>
  <body>

    <script>
      class Shape{ 
        constructor(color){
          this.color = color;
        }
        msg(){
          document.write("The color of the shape is " + this.color + "</br>");
        }
      }
      class Circle extends Shape{ 
        constructor(color){
          super(color); 
        }
        msg(){
          document.write("The color of the circle is " + this.color + "</br>");
        }
      }
      var c1 = new Circle("Blue"); 
      c1.msg(); 
    </script>

  </body>
</html># ass.gethub.io
