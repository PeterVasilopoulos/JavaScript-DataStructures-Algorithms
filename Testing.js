let numbers = [1,3,3,4,4,4]

function countDuplicate(numbers) {
    // Write your code here
    let counts = {}
    
    for(let i = 0; i < numbers.length; i++) {
        if(counts.hasOwnProperty(numbers[i])) {
            counts[numbers[i]]++;
        } else {
            counts[numbers[i]] = 1;
        }
    }

    let nonUnique = 0;

    for(key in counts) {
        if(counts[key] > 1) {
            nonUnique++;
        }
    }

    return nonUnique
}

// console.log(countDuplicate(numbers));


let num1 = "7596801";
let num2 = "1806579";

function getLargestNumber2(num) {
    let odds = []
    let evens = []
    
    for(let i = 0; i < num.length; i++) {
        if(parseInt(num[i]) % 2 === 0) {
            evens.push(parseInt(num[i]));
        } else {
            odds.push(parseInt(num[i]));
        }
    }

    odds.sort((a,b) => a-b);
    evens.sort((a,b) => a-b);

    let result = "";

    for(let i = 0; i < num.length; i++) {
        if(parseInt(num[i]) % 2 === 0) {
            result += evens[evens.length - 1];
            evens.pop();
        } else {
            result += odds[odds.length - 1];
            odds.pop();
        }
    }

    return result;
}

// console.log(getLargestNumber(num));


function getLargestNumber(num) {
    let nums = num.split('');
    
    let odds = [];
    let evens = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            evens.push(num[i]);
        } else {
            odds.push(nums[i]);
        }
    }

    let result = "";

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            if(nums[i + 1] === evens[evens.length - 1]) {

            }
        }
    }
}

// getLargestNumber(num1);


function getLargestNumber3(num) {
    let nums = num.split('');
    let pointer = -1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0 && nums[i -1] % 2 === 0) {
            if(nums[i] < nums[i + 1]) {
                pointer = i

                [num[i], nums[i + 1]] = [num[i + 1], nums[i]];

                while(nums[i] % 2 === 0 && nums[i - 1] % 2 === 0) {
                    if(nums[i] > nums[i - 1]) {
                        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
                        i--;
                    }
                }
            }

            i = pointer;
        }
        
        if(nums[i] % 2 !== 0 && nums[i -1] % 2 !== 0) {
            if(nums[i] < nums[i + 1]) {
                pointer = i

                [num[i], nums[i + 1]] = [num[i + 1], nums[i]];

                while(nums[i] % 2 !== 0 && nums[i - 1] % 2 !== 0) {
                    if(nums[i] > nums[i - 1]) {
                        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
                        i--;
                    }
                }

                i = pointer;
            }
        }
    }

    return nums.join('');
}

// console.log(getLargestNumber3(num1))







function maxNumber(num) {
    let nums = num.split('');

    let n = nums.length;
    
    let ans = "";
    
    let freq = Array(10).fill(0);
    
    let left = 0;

    while (left < n) {
        let right = left;
    
        while (right < n - 1 && parseInt(nums[right]) % 2 === parseInt(nums[right + 1]) % 2) {
            freq[parseInt(nums[right])] += 1;
            right += 1;
        }
    
        freq[parseInt(nums[right])] += 1;
    
        for (let i = 9; i >= 0; i--) {
            while (freq[i] > 0) {
                ans += String(i);
                freq[i] -= 1;
            }
        }
    
        left = right + 1;
    }

    return ans;
}

// console.log(maxNumber(num1))
// console.log(maxNumber(num2))