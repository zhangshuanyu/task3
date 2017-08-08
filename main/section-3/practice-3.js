﻿/*'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var count=1;
  var collectionC=[];
  var n=0;
 
  for(var i;i<collectionA.length;i++){
      if(collectionA[i]===collectionA[i+1]){
          count++;
      }else{
          collectionC[n]= { key:collectionA[i],count: count};
          count = 1;
          n++;        
      }
  }    
for(var C in collectionC){
      for(var B in objectB.value){
          if(collectionC[C].key===objectB.value[B]){
              collectionC[C].count-=Math.floor((collectionC[C].count)/3);
          }
      }
      
  }
  return collectionC;

}
*/
'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var c=[];
    var key_v="";
    var count_v=0;

    for(var i=0;i<collectionA.length;i++){
        if (collectionA[i] != -1){
            key_v = collectionA[i];
            var keyValue = list(collectionA,key_v,count_v);
            c.push(keyValue);
            count_v =0 ;
        }

    }
    for (var a in c){
        for (var b in objectB.value){
            if (c[a].key === objectB.value[b]){
                c[a].count-=Math.floor(c[a].count/3);
            }
        }
    }
    return c;
}
function list(collectionA,key_v,count_v) {
    for(var j=0;j<collectionA.length;j++){
        if (key_v === collectionA[j]){
            count_v++;
            collectionA[j] = -1;
        }
    }
    var sum = {key:key_v,count:count_v}
    return sum;
}

