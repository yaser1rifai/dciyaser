class Tv {
    constructor(brand,channel,volume){
      this.brand = brand;
      this.channel = channel;
      this.volume = volume;
    }
    incVolume(){
   if (this.volume < 0){
     console.log(`that volume is too low`);
     //return this;
    }
    else if(this.volume > 100){
      console.log(`that volume is too high`);
     // return this;
    }
   
  }
    decVolume(){
      if (this.volume < 0){
        console.log(`that volume is too low`);
      }
      else if(this.volume > 100){
        console.log(`that volume is too high`);
        return this;
      }
    }
  
    setChannel(){
      if (this.channel >= 50){
        console.log(`Sorry There are not enough Channel`);
        return this;
        
      }
    }
   
  
    resetTv(){
      this.channel = 1;
      this.volume = 50;
      
    }
  
    status(){
      console.log(`${this.brand} at channel: ${this.channel},Volume: ${this.volume}`)
    }
   
  }
  const newTv = new Tv("Sony",1,150);
  //console.log(newTv); 
  console.log(newTv.incVolume());

  console.log(`-----------------------------------tv`)
  let check=arr=>{
    let i=0
    let count=0
    let result;
    do{
    if(arr[i]<arr[i+1]) count++
    i++
    }
    while(i<arr.length-1)
    if(count===arr.length-1) result ='increasing'
    else if (count===0)result = 'decreasing'
    else result = 'neither'

    return result

}
console.log(check([1, 2, 50]))




console.log(`-----------------------------------clock`)




class Clock{
    constructor({template}){
        this.timer;
    
    this.render=function(){
            let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
}
    stop(){
        clearInterval(this.timer);
    }
    start(){
        this.render();
        this.timer = setInterval(this.render,1000);
    }

    }
    let clock = new Clock({template: 'h:m:s'});
    clock.start();
    clock.stop();