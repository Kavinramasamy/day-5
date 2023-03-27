1.Do the below programs in anonymous function & IIFE

a. Print odd numbers in an array
		function oddElements(arr){
    		var a=[];
   		 for(var i=0;i<arr.length;i++){
        			if(arr[i]%2!=0){
           				a.push(arr[i])
        			}
    		}
    		return a;
		}
	var a=oddElements([10,1,12,2,3,4]);
	console.log(a)

   b. Convert all the strings to title caps in a string array
		function upperCase(arr){
    			for(var i=0;i<arr.length;i++){
        			arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    			}
    			return arr;
		} 


        
    c. Sum of all numbers in an array

		function sumOfElements(arr){
    		var temp=0;
    		for(var i=0;i<arr.length;i++){
        			temp=temp+arr[i];
    		}
    		return temp;
		}
		var temp=sumOfElements([1,2,3]);
		console.log(temp);   


     d. Return all the prime numbers in an array

		function primeNumber(arr){
    		var a=[];
    		for(var i=0;i<arr.length;i++){
        		var count=0;
        		for(var j=1;j<=arr[i];j++){
            			if(arr[i]%j===0){
                		count++;
            			}
        		}
        		if(count===2){
            		a.push(arr[i])
        		}
    		}
    		return a;
		}
		var a=primeNumber([1,2,5,7]);
		console.log(a);    

     e. Return all the palindromes in an array

		function palindrome(arr){
		    var a=[];
		    for(var i=0;i<arr.length;i++){
		        if((arr[i]+"")===(arr[i]+"").split("").reverse().join("")){
		            a.push(arr[i])
		        }
		    }
		    return a;
		}

     f. Return median of two sorted arrays of the same size.
		function median(arr1,arr2){
		    var a=Math.abs(arr1.length/2);
		    return arr1[a]+" "+arr2[a]
    
		}


    g. Remove duplicates from an array
		function removeDuplicate(arr){
		    for(var i=0;i<arr.length;i++){
		        var k=arr[i];
		        for(var j=i+1;j<arr.length;j++){
		            if(k==arr[j]){
		                arr.splice(j,1);
		                j--;
		            }
		        }
		    }
		    return arr
		}
		var k=removeDuplicate([1,1,2,3]);
		console.log(k);


     h. Rotate an array by k times
		function rotate(arr,k){
		        if(k<0){
		            arr=arr.reverse();
		            k=-1*k;
		            var n=1;
		        }
		for (var i = 0; i < k; i++) {
		            arr.unshift(arr.pop());
            
		        }
		        if(n===1){
	            		return arr.reverse();
		        }
		        else{
		            return arr;
		        }
		}
   

 3. Do the below programs in arrow functions.

	a. Print odd numbers in an array

		var oddElements=(arr)=>{
    		var a=[];
   		 for(var i=0;i<arr.length;i++){
        			if(arr[i]%2!=0){
           				a.push(arr[i])
        			}
    		}
    		return a;
		}

	b. Convert all the strings to title caps in a string array

		var upperCase=(arr)=>{
    			for(var i=0;i<arr.length;i++){
        			arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    			}
    			return arr;
		}

	c. Sum of all numbers in an array

		var sumOfElements=(arr)=>{
    		var temp=0;
    		for(var i=0;i<arr.length;i++){
        			temp=temp+arr[i];
    		}
    		return temp;
		}
	d. Return all the prime numbers in an array

		var primeNumber=(arr)=>{
    		var a=[];
    		for(var i=0;i<arr.length;i++){
        		var count=0;
        		for(var j=1;j<=arr[i];j++){
            			if(arr[i]%j===0){
                		count++;
            			}
        		}
        		if(count===2){
            		a.push(arr[i])
        		}
    		}
    		return a;
		}
	e. Return all the palindromes in an array
		var palindrome=(arr)=>{
		    var a=[];
		    for(var i=0;i<arr.length;i++){
		        if((arr[i]+"")===(arr[i]+"").split("").reverse().join("")){
		            a.push(arr[i])
		        }
		    }
		    return a;
		}
       