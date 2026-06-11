const MiniUI = {

  // 🔔 Alert box
  alert: function(msg){
    this._show(msg, "#38bdf8");
  },

  // ✅ Success message
  success: function(msg){
    this._show(msg, "#22c55e");
  },

  // ❌ Error message
  error: function(msg){
    this._show(msg, "#ef4444");
  },

  // 📢 Internal function
  _show: function(msg, color){
    let box = document.createElement("div");

    box.innerText = msg;
    box.style.position = "fixed";
    box.style.top = "20px";
    box.style.right = "20px";
    box.style.background = "#1e293b";
    box.style.color = "white";
    box.style.padding = "15px 20px";
    box.style.borderLeft = "5px solid " + color;
    box.style.borderRadius = "8px";
    box.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
    box.style.zIndex = "9999";

    document.body.appendChild(box);

    setTimeout(()=>{
      box.remove();
    }, 2500);
  }

};
