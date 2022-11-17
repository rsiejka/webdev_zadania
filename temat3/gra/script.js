var canvas
            var ctx//uchwytkontekstutkaninypozwalającynaoperowanienaniej
            var pos_x=320,pos_y=200//zmiennepozycjibohatera
            var welcome_screen=true//stanekranupowitalnego
            var point_x = 200, point_y = 400
            var new_point = false
            var last_key = "null"
            var bo_size = 30
            var gained_points = 0
            var last_pos_x = []
            var last_pos_y = []


            

            function draw_hero(){  

                ctx.save()//zachowaniestanukontekstu
                ctx.fillStyle='rgba(0,255,0,1)';//ustawieniekoloruwypełnienia
                ctx.translate(pos_x, pos_y)//przesunięcietkaninytak,abynarysowny//bohaterznalazłsięwodpowiednimmiejscu
                ctx.fillRect(0,0,bo_size,bo_size)//narysowaniebohatera
                ctx.restore()//przywróceniestanukontekstu

                last_pos_x.push(pos_x)
                last_pos_y.push(pos_y)
                
                for(let i = last_pos_x.length-(gained_points*3); i < last_pos_x.length; ++i){

                    console.log("fdsfsafds")

                    ctx.save()//zachowaniestanukontekstu
                    ctx.fillStyle='rgba(0,255,0,1)';//ustawieniekoloruwypełnienia
                    ctx.translate(last_pos_x[i], last_pos_y[i])//przesunięcietkaninytak,abynarysowny//bohaterznalazłsięwodpowiednimmiejscu
                    ctx.fillRect(0,0,30,30)//narysowaniebohatera
                    ctx.restore()//przywróceniestanukontekstu

                    if(last_pos_x[i] == pos_x && last_pos_y[i] == pos_y && i < last_pos_x.length-2){
                        game_over = true
                        alert("game over!")
                    }

                }

                switch(last_key){
                    case "top":
                        pos_y -= 10
                    break

                    case "left":
                        pos_x -= 10
                    break

                    case "right":
                        pos_x += 10
                    break

                    case "down":
                        pos_y += 10
                    break

                }

                if(pos_x < -10 || pos_x > 620 || pos_y < -10 || pos_y > 460){
                    game_over = true
                    alert("game over!")
                }

                if (
                    point_x < pos_x + bo_size &&
                    point_x + 20 > pos_x &&
                    point_y < pos_y + bo_size &&
                    20 + point_y > pos_y
                  ){
                    new_point = true
                    gained_points += 1

                    }

            }


            


        
            function draw_point(){
                ctx.save()//zachowaniestanukontekstu
                ctx.fillStyle='rgba(255,0,0,1)';//ustawieniekoloruwypełnienia
                ctx.translate(point_x,point_y)//przesunięcietkaninytak,abynarysowny//bohaterznalazłsięwodpowiednimmiejscu
                ctx.fillRect(0,0,20,20)//narysowaniebohatera
                ctx.restore()//przywróceniestanukontekstu

            }

            

            function redraw(){
                if(game_over == true){
                    return 0
                }

                if(new_point == true){
                    point_x = Math.floor(Math.random() * 630)
                    point_y = Math.floor(Math.random() * 470)
                    // bo_size += 10
                    new_point = false
                }

                ctx.clearRect(0,0,640,480)//czyszczenietkaniny

                ctx.font = "32px Calibri";
                ctx.fillStyle = "white";
                ctx.fillText(gained_points,320,80)

                draw_hero()
                draw_point()
            }

            function init(){
                window.addEventListener("keydown",keyListener,false)//skojarzeniefunkcjiobsługiklawiaturyzezdarzeniem
                canvas=document.getElementById('game')//pobraniewskazanianaelementtkaniny
                ctx=canvas.getContext('2d')//pobraniekontekstugrafikidwuwymiarowejdlatkaniny
                ctx.font='48pxsans-serif'
                ctx.textAlign='center'//ustawieniedlatkaninykrojupismaisposobuwyrównania//tekstu
                ctx.fillText('READYPLAYERONE?',320,240)//umieszczenienapisunaekraniepowitalnym
                draw_hero()
                draw_enemies()
                check_point()
            }


            var game_over = false


            function keyListener(e){
                if(welcome_screen){//jeżeliekranpowitalnytowyczyść
                    ctx.clearRect(0,0,640,480)
                    welcome_screen=false
                    window.setInterval(redraw,70)//podłączeniefunckjiprzerysowaniatkanin
                }


                switch(e.keyCode){

                    

                    case 37://naciśniętostrzałkęwlewo
                    
                        if(last_key != "right"){
                            last_key = "left"
                        }

                    break

                    case 38://naciśniętostrzałkęwgórę

                        if(last_key != "down"){
                            last_key = "top"
                        }
                        
                    break

                    case 39://naciśniętostrzałkęwprawo
                       
                        if(last_key != "left"){
                        last_key = "right"
                        }

                    break

                    case 40://naciśniętostrzałkęwdół
                        if(last_key != "top"){
                            last_key = "down"
                        }
                    break

                }
            }
