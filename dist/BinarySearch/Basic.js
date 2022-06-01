"use strict";
class PreProcessor {
    // is sorted ? 
    isSorted(arr) {
        let incConfig = false, decConfig = false, constConfig = false;
        for (let i = 0; i < arr.length - 1; ++i) {
            if (arr[i] > arr[i + 1])
                decConfig = true;
            else if (arr[i] < arr[i + 1])
                incConfig = true;
            else
                constConfig = true;
        }
        if (decConfig && incConfig)
            return false;
        else {
            if (decConfig) {
                if (constConfig)
                    return { type: "decConstConfig" };
                else
                    return { type: "decConfig" };
            }
            else if (incConfig) {
                if (constConfig)
                    return { type: "incConstConfig" };
                else
                    return { type: "incConfig" };
            }
            else {
                return { type: "constant" };
            }
        }
    }
}
class BinarySearch {
}

