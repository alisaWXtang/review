        // let arr = [[0, 1], [2, 3], [4,[5,6,7]]];
        // const newarr = function(arr){
        //     return arr.reduce((prev,cur)=>{return prev.concat(Array.isArray(cur)?newarr(cur):cur)},[])
        // }
        // console.log(newarr(arr));
        

        let arr = [[0, 1], [2, 3], [4,[5,6,7]]];
        const newarr = function(array){
            return array.reduce((prev,cur)=>{ return prev.concat(Array.isArray(cur)?newarr(cur):cur)},[])
        };
        console.log(newarr(arr));

