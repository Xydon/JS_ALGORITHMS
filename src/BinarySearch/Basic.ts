import * as T from '../index'; 

class PreProcessor {
  
  // is sorted ? 
  isSorted(arr : number[]) : boolean | {type : string} {
    let incConfig = false, decConfig = false, constConfig = false; 
    for(let i = 0; i < arr.length - 1; ++i) {
      if(arr[i] > arr[i+1]) decConfig = true;
      else if(arr[i] < arr[i+1]) incConfig = true; 
      else constConfig = true; 
    }
    if(decConfig && incConfig) return false; 
    else {
      if(decConfig) {
        if(constConfig) return {type : "decConstConfig"}
        else return {type : "decConfig"}; 
      } else if(incConfig) {
        if(constConfig) return {type : "incConstConfig"}
        else return {type : "incConfig"};
      } else {
        return {type : "constant"}
      }
    }
  }
}

class BinarySearch {

  // basic search 
  private search(arr : number[], x : number) : number | -1 {
    const n = arr.length; 
    let l = 0, r = n -1, indx = -1; 
    while(l <= r) {
      let mid = l + new T.Int((r-l)/2).val; 
      if(x === arr[mid]) {
        indx = mid; break; 
      } else if(x < arr[mid]) {
        r  = mid - 1; 
      } else l = mid + 1; 
    }
    return indx; 
  }

  

}