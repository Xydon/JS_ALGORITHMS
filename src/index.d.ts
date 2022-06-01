class Int {
  val: number;
  constructor(x: number) {
    this.val = Math.trunc(x);
  }
}

class ERR {
  readonly glb_err = {
    arr_not_sorted = "entered array is not sorted",
    arr_not_valid = "entered array is not valid",
  };
  readonly bs_err = {};
}

// binary serach
class BS_RES {
  found: boolean;
  details: null | {
    count: number, 
    first_occurence: number, 
    last_occurence: number, 
    floor : number, 
    ceil : number 
  };
}

export {
  BS_RES, 
  ERR, 
  Int
}
