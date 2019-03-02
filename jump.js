<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8" />
    <title>
      文字跳动特效-vico
    </title>
    <style type="text/css">
      #txtDom{ padding: 50px; width:500px; margin: 0 auto; font-size: 16px;
      font-family: "微软雅黑"; line-height: 1.3em; text-indent: 2em;}
    </style>
  </head>

  <body>

    <div id="txtDom">
     要是没有错误和失败，你就不会学到东西；要是没有痛苦，你就不会长大。
     一旦你明白了这些，你就知道了一切事情都是为了某种目的而发生。 
     所以不要紧张或者认为生活不公平，因为一切事情都有原因，只有时间能诉说教会了我们什么。
    </div>

    <script type="text/javascript">
      var txtAnim = {

        len: 0,

        txtDom: "",

        arrTxt: [],

        init: function(obj) {

          this.obj = obj;

          this.txtDom = obj.innerHTML.replace(/\s+/g, "");

          this.len = this.txtDom.length;

          obj.innerHTML = "";

          this.addDom();

        },

        addDom: function() {

          for (var i = 0; i < this.len; i++) {

            var spanDom = document.createElement("span");

            spanDom.innerHTML = this.txtDom.substring(i, i + 1);

            this.obj.appendChild(spanDom);

            this.arrTxt.push(spanDom);

          };

          for (var j = 0; j < this.len; j++) {

            this.arrTxt[j].style.position = "relative";

          };

          this.strat();

        },

        strat: function() {

          for (var i = 0; i < this.len; i++) {

            this.arrTxt[i].onmouseover = function() {

              this.stop = 0;

              this.speed = -1;

              var $this = this;

              this.timer = setInterval(function() {

                $this.stop += $this.speed; //0 += -1
                if ($this.stop <= -20) {

                  $this.speed = 1;

                }

                $this.style.top = $this.stop + "px";

                if ($this.stop >= 0) {

                  clearInterval($this.timer)

                  $this.style.top = 0 + "px";

                };

              },
              15);

            };

          }

        }

      }

      var txtDom = document.getElementById("txtDom");

      txtAnim.init(txtDom);

    </script>
  </body>

</html>
