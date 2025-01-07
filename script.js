 let newBall = document.createElement('div')
        let glr

        function gen() {
            let player = document.getElementById("player").value
            let pr = document.getElementsByClassName("ply")[0]
            pr.innerHTML = ""

            if (player == "") {
                alert("Please set players first!")
            }
            else if (player > 10) {
                alert("Maximum of 10 players allowed!")
            }
            else {
                for (let i = 0; i < player; i++) {
                    let glass = document.createElement('div')
                    glass.classList.add('glass');
                    pr.appendChild(glass)
                }
            }
            glr = document.getElementsByClassName('glass')

        }



        function fun() {
            let random = Math.floor(Math.random() * glr.length)
            console.log(random);
            for (let i = 0; i < glr.length; i++) {
                glr[i].style.background = "rgba(255, 255, 255, 0.2)";
            }
            glr[random].style.background = "skyblue"
            newBall.classList.add('new-ball')
            newBall.style.marginLeft = "-20px"
            glr[random].appendChild(newBall)
        }
