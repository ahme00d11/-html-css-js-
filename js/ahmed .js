        let btt1 =document.getElementById("bt1")
        let btt2 =document.getElementById('bt2')
        let btt3=document.getElementById('bt3')
        let btt4=document.getElementById('bt4')
        let btt5=document.getElementById('bt5')
        let btt6=document.getElementById('bt6')
        
        
        let num =document.getElementById("num1")
        let num11 =document.getElementById("num2")
        let num22 =document.getElementById("num3")
        let num33 =document.getElementById("num4")
        
        let num44 =document.getElementById("num5")
        let num55 =document.getElementById("num6")

        let a=0;
        let a1=0
        let a2=0
        let a3 =0
        let a4=0
        let a5=0
        let a6=0
        
        btt1.addEventListener('click',ahmed1)
        btt2.addEventListener('click',ahmed2)
        btt3.addEventListener('click',ahmed3)
        btt4.addEventListener('click',ahmed4)
        btt5.addEventListener('click',ahmed5)
        btt6.addEventListener('click',ahmed6)

        
        
        
        function ahmed1() { 
            
                a++
                num.innerHTML=a
            
          
        
            
        }
        function ahmed2() { 
            
            a1++
            num11.innerHTML=a1
        
        
        
        
        }
        function ahmed3() { 
            
            a2++
            num22.innerHTML=a2
        
        
        
        
        }
        function ahmed4() { 
            
            a3++
            num33.innerHTML=a3
        
        
        
        
        }
        function ahmed5() { 
            
            a4=a1+a+a2+a3
            num44.innerHTML=a4+" :المجموع"
        
        
        
        
        }
        function ahmed6() { 
            a=a6
            a1=a6
            a2=a6
            a3=a6
            a4=a6
            
           
        
            num.innerHTML=0
            num11.innerHTML=0
            num22.innerHTML=0
            num33.innerHTML=0
            num44.innerHTML=0
            num55.innerHTML=" شارك البرنامج من فضلك ليكون في ميزان حسناتك وتقبل الله منا ومنكم صالح الاعمال" 
    
        
    }