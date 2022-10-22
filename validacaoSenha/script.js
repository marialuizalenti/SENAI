function verificação(){
    pw = document.form1.senha.value
    cpw = document.form1.confirmar.value
    
    var numeros = ['0','1','2','3','4','5','6','7','8','9'];
    var alfabetoMin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //var alfabetoMin = ['a'-'z'];
    var alfabetoMai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    //var alfabetoMai = ['A'-'Z']
    var chEspeciais = ['~','!','@','#','$','%','^','&','*','-','_','+','=','?','>','<'];
  
    num = false
    abcMin = false
    abcMai = false
    chEsp = false
  
    //Verificação de números
    for (i = 0; i < pw.length; i++)
    {
      for (j = 0; j < numeros.length; j++)
        {
          if (pw[i] == numeros[j])
          {
            num = true
          }
        }
    }
  
    //Verificação de letras minúsculas
    for (i = 0; i < pw.length; i++)
    {
      for (j = 0; j < alfabetoMin.length; j++)
        {
          if (pw[i] == alfabetoMin[j])
          {
            abcMin = true
          }
        }
    }
  
    //Verificação de letras maiúsculas
    for (i = 0; i < pw.length; i++)
    {
      for (j = 0; j < alfabetoMai.length; j++)
        {
          if (pw[i] == alfabetoMai[j])
          {
            abcMai = true
          }
        }
    }
    
    //Verificação de caracteres especias
    for (i = 0; i < pw.length; i++)
    {
      for (j = 0; j < chEspeciais.length; j++)
        {
          if (pw[i] == chEspeciais[j])
          {
            chEsp = true
          }
        }
    }
  
    if(num && abcMin && abcMai && chEsp)
    {
      if (pw != cpw)
      {
        alert ("Senhas diferentes")
      }
      else
      {
        alert ("Cadastrado com sucesso")
      }
    }
    else
    {
      alert ("Senha fraca")
    }
  }