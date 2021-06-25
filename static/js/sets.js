
var btn = document.getElementById("py-set-2");
        btn.addEventListener("click", function () {
            var ourRequest = new XMLHttpRequest();
            ourRequest.open("GET", "static/js/pyquiz.json")

            ourRequest.onload = function () {
                var ourData = JSON.parse(ourRequest.responseText);
                console.log(ourData);
            };
            ourRequest.send();
        });