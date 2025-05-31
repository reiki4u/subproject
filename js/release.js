  /* conteo de salida */
  /* Normal=""; SD="2"; AVI="3"; HDTV="4"; MKV="5" ;Muy Pronto="6";Terminada="7";Desconocido="9";   */

  StartCountDown6("amagamiclock","03/09/2012 01:25 AM -0400","10")
  StartCountDown6("dxdclock","03/09/2012 09:50 PM -0400","10")
  StartCountDown6("zeroclock","03/10/2012 06:10 PM -0400","10")
  StartCountDown6("natsuclock","03/20/2012 05:20 AM -0400","11") 


  StartCountDown6("hoshizoraclock","12/23/2011 08:00 PM -0400","13") 
  StartCountDown6("denpaonnaclock","01/25/2012 08:00 PM -0400","13") 
  CountDown2("toradoraclock","12/23/2011 09:00 PM -0400","1")
/*  StartCountDown("rclock","12/23/2011 10:00 PM -0400","13")
  StartCountDown("shanaclock","01/06/2012 03:10 PM -0400","13")
  CountDown2("kissxsisclock","07/06/2012 11:40 AM -0400","7")
  CountDown2("makenkiclock","02/28/2012 08:00 PM -0400","1")
  CountDown2("kikinasaiclock","01/10/2012 08:00 PM -0400","1")  */


  /*
   Date Format: MM/DD/YYYY
     Author:      Robert Hashemian (http://www.hashemian.com/)
     Modified by:   Munsifali Rashid (http://www.munit.co.uk/)
     Modified by:   Tilesh Khatri
  */
  
   function StartCountDown(myDiv,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack(myDiv,gsecs,ep);
  }

  
  function Calcage(secs, num1, num2)
  {
    s = ((Math.floor(secs/num1))%num2).toString();
    if (s.length < 2) 
    {   
      s = "0" + s;
    }
    return (s);
  }
  function Calchour(epi,secs, num1, num2)
   
   {
    s = ((Math.floor(secs/num1))%num2).toString();
      if ((epi-((Math.floor((secs/num1)/7))%num2)) < 1)
    {
    return (s);
    }
      if (s < 7)
       {
      return (s);
       }
   do 
   {
   s = (s - 7);
   }
   while (s >= 7);
    return (s);
  }


function CalcEp(epi,secs, num1, num2)
   
   {
    s = (epi-((Math.floor((secs/num1)/7))%num2)).toString();
    if (s < 1)
      {
      s = (1);
      }
      return (s);
  }
    
  
  function CountBack(myDiv, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%% \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv).innerHTML = DisplayStr;
      setTimeout("CountBack('" + myDiv + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv).innerHTML = "Publicado";
    }
  }

/*********************************************/

  /* conteo de SDTV */


   function StartCountDown2(myDiv2,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack2(myDiv2,gsecs,ep);
  }
 
  
  function CountBack2(myDiv2, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%% \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv2).innerHTML = DisplayStr;
      setTimeout("CountBack2('" + myDiv2 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv2).innerHTML = "SDTV Publicada";
    }
  }

/*********************************************/

  /* conteo de salida AVI */


   function StartCountDown3(myDiv3,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack3(myDiv3,gsecs,ep);
  }
 
  
  function CountBack3(myDiv3, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%%AVi \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv3).innerHTML = DisplayStr;
      setTimeout("CountBack3('" + myDiv3 + "', " + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv3).innerHTML = "AVI Publicada";
    }
  }

/*********************************************/

  /* conteo de salida HDTV */


   function StartCountDown4(myDiv4,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack4(myDiv4,gsecs,ep);
  }
 
  
  function CountBack4(myDiv4, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%% \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv4).innerHTML = DisplayStr;
      setTimeout("CountBack4('" + myDiv4 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv4).innerHTML = "HDTV Publicada";
    }
  }

/*********************************************/

  /* conteo de salida MKV */


   function StartCountDown5(myDiv5,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack5(myDiv5,gsecs,ep);
  }
 
  
  function CountBack5(myDiv5, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%% \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv2).innerHTML = DisplayStr;
      setTimeout("CountBack5('" + myDiv5 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv5).innerHTML = "MKV Publicada";
    }
  }

/*********************************************/

  /* conteo de salida Muy Pronto */


   function StartCountDown6(myDiv6,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack6(myDiv6,gsecs,ep);
  }
 
  
  function CountBack6(myDiv6, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%% \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv6).innerHTML = DisplayStr;
      setTimeout("CountBack6('" + myDiv6 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv6).innerHTML = "Muy Pronto";
    }
  }

/*********************************************/

  /* conteo de salida Finalizada */


   function StartCountDown7(myDiv7,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack7(myDiv7,gsecs,ep);
  }
 
  
  function CountBack7(myDiv7, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%% \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv7).innerHTML = DisplayStr;
      setTimeout("CountBack7('" + myDiv7 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv7).innerHTML = "Finalizada";
    }
  }

/*********************************************/

  /* conteo de salida Desconocido */


   function StartCountDown9(myDiv9,myTargetDate,epnum)
  {
    var ep = new Number(epnum);
    var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    CountBack9(myDiv9,gsecs,ep);
  }
 
  
  function CountBack9(myDiv9, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%E%% \xa0 %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace((/%%D%%/g),   Calchour(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%E%%/g,               CalcEp(epi,secs,86400,100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calcage(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,   Calcage(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calcage(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv9).innerHTML = DisplayStr;
      setTimeout("CountBack9('" + myDiv9 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv9).innerHTML = "Desconocido";
    }
  }
/*********************************************/
/////////////////////Episodios largos//////////////////////
    function CountDown(myDiv7,myTargetDate,epnum)
  {
    var epn =  new Number(epnum);
      var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    Count(myDiv7,gsecs,epn);
  }
  
  function Calctime(secs, num1, num2)
  {
    s = ((Math.floor(secs/num1))%num2).toString();
    if (s.length < 2) 
    {   
      s = "0" + s;
    }
    return (s);
  }
  
    
  function Calcday(secs, num1, num2)
  {
    s = ((Math.floor(secs/num1))%num2).toString();
    
    return (s);
  }
   function Showepn(epn)
   {
     s = (epn).toString();
     return (s);
   }
   
  function Count(myDiv7, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%N%% %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace(/%%D%%/g,   Calcday(secs,86400,100000));
      DisplayStr = DisplayStr.replace(/%%N%%/g,   Showepn(epi));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calctime(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,      Calctime(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calctime(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv7).innerHTML = DisplayStr;
      setTimeout("Count('" + myDiv7 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv7).innerHTML = "HDTV Publicada";
    }
  }


//////////////////////////////////////2/////////////////////////

    function CountDown2(myDiv8,myTargetDate,epnum)
  {
    var epn =  new Number(epnum);
      var dthen   = new Date(myTargetDate);
    var dnow   = new Date();
    ddiff      = new Date(dthen-dnow);
    gsecs      = Math.floor(ddiff.valueOf()/1000);
    Count2(myDiv8,gsecs,epn);
  }
  
  function Calctime(secs, num1, num2)
  {
    s = ((Math.floor(secs/num1))%num2).toString();
    if (s.length < 2) 
    {   
      s = "0" + s;
    }
    return (s);
  }
  
    
  function Calcday(secs, num1, num2)
  {
    s = ((Math.floor(secs/num1))%num2).toString();
    
    return (s);
  }
   function Showepn(epn)
   {
     s = (epn).toString();
     return (s);
   }
   
  function Count2(myDiv8, secs,epi)
  {
    var DisplayStr;
    var DisplayFormat = "Ep%%N%% %%D%%d %%H%%:%%M%%:%%S%%";
    DisplayStr = DisplayFormat.replace(/%%D%%/g,   Calcday(secs,86400,100000));
      DisplayStr = DisplayStr.replace(/%%N%%/g,   Showepn(epi));
    DisplayStr = DisplayStr.replace(/%%H%%/g,      Calctime(secs,3600,24));
    DisplayStr = DisplayStr.replace(/%%M%%/g,      Calctime(secs,60,60));
    DisplayStr = DisplayStr.replace(/%%S%%/g,      Calctime(secs,1,60));
    if(secs > 0)
    {   
      document.getElementById(myDiv8).innerHTML = DisplayStr;
      setTimeout("Count2('" + myDiv8 + "'," + (secs-1) + ","+ epi +");", 990);
    }
    else
    {
      document.getElementById(myDiv8).innerHTML = "Episodio Publicado";
    }
  }

