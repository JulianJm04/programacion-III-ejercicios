function obtenerSumaMaxima(arr) {
    let maxActual = 0;
    let maxGlobal = 0;

    for (let i = 0; i < arr.length; i++) {
        maxActual = Math.max(0, maxActual + arr[i]);
        maxGlobal = Math.max(maxGlobal, maxActual);
    }
    return maxGlobal;
}

console.log(obtenerSumaMaxima([-1, 2, 3, -9]));       
console.log(obtenerSumaMaxima([2, -1, 2, 3, -9]));     
console.log(obtenerSumaMaxima([-1, 2, 3, -9, 11]));    
console.log(obtenerSumaMaxima([-2, -1, 1, 2]));        
console.log(obtenerSumaMaxima([100, -9, 2, -3, 5]));   
console.log(obtenerSumaMaxima([1, 2, 3]));             
console.log(obtenerSumaMaxima([-1, -2, -3]));          
