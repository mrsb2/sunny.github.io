let toggle=0;
function menuOpen()
{
    
    
    toggle++;
    
    if(toggle%2==0)
    {
        document.getElementById('menu').style.display='none';
        
       
    }
    else
    {
        document.getElementById('menu').style.display='flex';
        
        
    }
}
function closeMenu()
{
    document.getElementById('menu').style.display='none';
}
function scrollDown()
{
    window.scroll({
        top: vh(100),
        
        behavior: 'smooth'
      });
}
function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }