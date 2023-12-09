<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Typewriter</title>

        <style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

body{
        min-height: 100vh;
        display:flex;
        align-items: center;
        justify-content: center;
        /* overflow:hidden; */
    }
    .container .text{
     position: relative;
     color: blue;
     font-size: 20px;
     font-weight: 600;
           
    }

    .container .text.first-text{
     color:blueviolet;
    }

    .text.sec-text::before{
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     position: absolute;
     height: 100%;
     width: 100%;
     background-color: white;
     border-left: 2px solid blue;
     animation: animate 4s steps(10) infinite;
    }

    @keyframes animate {
        30%,70%{
            left:100%;
        }
        100%{
            left:0%;
        }
    }


</style>
    </head>
    <body>
        <div class="container">
            <span class="text first-text">I am a </span>
            <span class="text sec-text">Web Developer</span>
        </div>
        <script>
        const text = document.querySelector(".sec-text");
        const textLoad = () => {
               
            setTimeout(() => { 
                text.textContent="Web Developer";
            },0);
        
            setTimeout(() => { 
                text.textContent="Freelancer";
            },4000);
            
            setTimeout(() => { 
                text.textContent="Blogger";
            },8000);
        
        }
             textLoad();  
        setInterval(textLoad,12000);
        
        </script>
    </body>

</html>
