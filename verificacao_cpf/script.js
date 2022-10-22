cpf=prompt("Digite o CPF:","formato: xxxxxxxxxxx")
  dv1 = cpf.substr(9,1)
  s=0
  p=8
  
  for(m=2;m<=10;m++){
  s=s+parseInt(cpf.substr(p,1))*m
  p--
  }
    
  div=parseInt(s/11)
  sub=s%11  
    if(sub>=2){
      dvc=11-sub
     }
    else{
      dvc=0 
    }
  
    dv2=cpf.substr(10,1)
    p2=8
    s2=0
    for(m1=3;m1<=11;m1++){
  s2=s2+parseInt(cpf.substr(p2,1))*m1
  p2-- 
    
  }
    
  s2=s2+dvc*2
    
  div2=parseInt(s2/11)
    sub2=s2%11  
    if(sub2>=2){
      dvc1=11-sub2
     }
    else{
      dvc1=0 
    }
    if(dv1==dvc && dv2==dvc1){
      alert("CPF válido!")
    }
    else{
      alert("CPF inválido!")
    }

    
    
  
  