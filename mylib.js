const Spinner = {

  // show loader
  show: function(){
    let loader = document.getElementById("spinner-loader");

    if(!loader){
      loader = document.createElement("div");
      loader.id = "spinner-loader";

      loader.innerHTML = `
        <div class="spinner-box">
          <div class="spinner"></div>
        </div>
      `;

      document.body.appendChild(loader);

      // add style
      const style = document.createElement("style");
      style.innerHTML = `
        #spinner-loader{
          position:fixed;
          top:0; left:0;
          width:100%; height:100%;
          background:rgba(0,0,0,0.6);
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:9999;
        }

        .spinner{
          width:60px;
          height:60px;
          border:6px solid #ccc;
          border-top:6px solid #38bdf8;
          border-radius:50%;
          animation:spin 1s linear infinite;
        }

        @keyframes spin{
          0%{transform:rotate(0deg);}
          100%{transform:rotate(360deg);}
        }
      `;
      document.head.appendChild(style);
    }

    loader.style.display = "flex";
  },

  // hide loader
  hide: function(){
    let loader = document.getElementById("spinner-loader");
    if(loader){
      loader.style.display = "none";
    }
  }

};
