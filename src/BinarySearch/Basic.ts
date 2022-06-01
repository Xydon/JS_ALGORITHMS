import * as T from "../index";

class PreProcessor {
  // is sorted ?
  isSorted(arr: number[]): boolean | { type: string } {
    let incConfig = false,
      decConfig = false,
      constConfig = false;
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] > arr[i + 1]) decConfig = true;
      else if (arr[i] < arr[i + 1]) incConfig = true;
      else constConfig = true;
    }
    if (decConfig && incConfig) return false;
    else {
      if (decConfig) {
        if (constConfig) return { type: "decConstConfig" };
        else return { type: "decConfig" };
      } else if (incConfig) {
        if (constConfig) return { type: "incConstConfig" };
        else return { type: "incConfig" };
      } else {
        return { type: "constant" };
      }
    }
  }
}

class BinarySearch {
  // basic search -- considering increasing sorting 
  basic_search(
    arr: number[],
    x: number
  ){
    const n = arr.length;
    let l = 0, r = n-1, indx = -1; 
    const res = { first_occurence : -1, last_occurence : -1, count : 0, floor : -1, ceil : -1}; 

    // first occurence 
    while(l <= r) {
      let mid = l + Math.trunc((r-l)/2); 
      if(x === arr[mid]) {
        res.first_occurence = mid; 
        r  = mid -1; 
      } else if(arr[mid] < x) {
        l = mid + 1; 
        res.floor = mid; 
      } else {
        r = mid - 1; 
      }
    }

    // resetting 
    l = 0, r= n-1;
    
    //last occurence 
    while(l<=r){
      let mid = l + Math.trunc((r-l)/2); 
      if(x === arr[mid]) {
        res.last_occurence = mid; 
        l = mid + 1; 
      } else if(arr[mid] < x) {
        l = mid + 1; 
      } else {
        r = mid -1; 
        res.ceil = mid; 
      }
    }
  if(res.first_occurence !== -1) res.count = res.last_occurence - res.first_occurence + 1; 
  return res; 
  }
}
